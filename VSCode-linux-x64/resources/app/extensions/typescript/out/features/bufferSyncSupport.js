/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
var path = require('path');
var vscode_1 = require('vscode');
var typescriptService_1 = require('../typescriptService');
var async_1 = require('../utils/async');
var Mode2ScriptKind = {
    'typescript': 'TS',
    'typescriptreact': 'TSX',
    'javascript': 'JS',
    'javascriptreact': 'JSX'
};
var SyncedBuffer = (function () {
    function SyncedBuffer(document, filepath, diagnosticRequestor, client) {
        this.document = document;
        this.filepath = filepath;
        this.diagnosticRequestor = diagnosticRequestor;
        this.client = client;
    }
    SyncedBuffer.prototype.open = function () {
        var args = {
            file: this.filepath,
            fileContent: this.document.getText(),
        };
        if (this.client.apiVersion === typescriptService_1.APIVersion.v2_0_0) {
            // we have no extension. So check the mode and
            // set the script kind accordningly.
            var ext = path.extname(this.filepath);
            if (ext === '') {
                var scriptKind = Mode2ScriptKind[this.document.languageId];
                if (scriptKind) {
                    args.scriptKindName = scriptKind;
                }
            }
        }
        this.client.execute('open', args, false);
    };
    SyncedBuffer.prototype.close = function () {
        var args = {
            file: this.filepath
        };
        this.client.execute('close', args, false);
    };
    SyncedBuffer.prototype.onContentChanged = function (events) {
        var filePath = this.client.asAbsolutePath(this.document.uri);
        if (!filePath) {
            return;
        }
        for (var i = 0; i < events.length; i++) {
            var event = events[i];
            var range = event.range;
            var text = event.text;
            var args = {
                file: filePath,
                line: range.start.line + 1,
                offset: range.start.character + 1,
                endLine: range.end.line + 1,
                endOffset: range.end.character + 1,
                insertString: text
            };
            this.client.execute('change', args, false);
        }
        this.diagnosticRequestor.requestDiagnostic(filePath);
    };
    return SyncedBuffer;
}());
var BufferSyncSupport = (function () {
    function BufferSyncSupport(client, modeIds, diagnostics, extensions, validate) {
        var _this = this;
        if (validate === void 0) { validate = true; }
        this.disposables = [];
        this.client = client;
        this.modeIds = Object.create(null);
        modeIds.forEach(function (modeId) { return _this.modeIds[modeId] = true; });
        this.diagnostics = diagnostics;
        this.extensions = extensions;
        this._validate = validate;
        this.projectValidationRequested = false;
        this.pendingDiagnostics = Object.create(null);
        this.diagnosticDelayer = new async_1.Delayer(100);
        this.syncedBuffers = Object.create(null);
    }
    BufferSyncSupport.prototype.listen = function () {
        vscode_1.workspace.onDidOpenTextDocument(this.onDidOpenTextDocument, this, this.disposables);
        vscode_1.workspace.onDidCloseTextDocument(this.onDidCloseTextDocument, this, this.disposables);
        vscode_1.workspace.onDidChangeTextDocument(this.onDidChangeTextDocument, this, this.disposables);
        vscode_1.workspace.textDocuments.forEach(this.onDidOpenTextDocument, this);
    };
    Object.defineProperty(BufferSyncSupport.prototype, "validate", {
        get: function () {
            return this._validate;
        },
        set: function (value) {
            this._validate = value;
        },
        enumerable: true,
        configurable: true
    });
    BufferSyncSupport.prototype.handles = function (file) {
        return !!this.syncedBuffers[file];
    };
    BufferSyncSupport.prototype.reOpenDocuments = function () {
        var _this = this;
        Object.keys(this.syncedBuffers).forEach(function (key) {
            _this.syncedBuffers[key].open();
        });
    };
    BufferSyncSupport.prototype.dispose = function () {
        while (this.disposables.length) {
            this.disposables.pop().dispose();
        }
    };
    BufferSyncSupport.prototype.onDidOpenTextDocument = function (document) {
        if (!this.modeIds[document.languageId]) {
            return;
        }
        if (document.isUntitled) {
            return;
        }
        var resource = document.uri;
        var filepath = this.client.asAbsolutePath(resource);
        if (!filepath) {
            return;
        }
        var syncedBuffer = new SyncedBuffer(document, filepath, this, this.client);
        this.syncedBuffers[filepath] = syncedBuffer;
        syncedBuffer.open();
        this.requestDiagnostic(filepath);
    };
    BufferSyncSupport.prototype.onDidCloseTextDocument = function (document) {
        var filepath = this.client.asAbsolutePath(document.uri);
        if (!filepath) {
            return;
        }
        var syncedBuffer = this.syncedBuffers[filepath];
        if (!syncedBuffer) {
            return;
        }
        this.diagnostics.delete(filepath);
        delete this.syncedBuffers[filepath];
        syncedBuffer.close();
    };
    BufferSyncSupport.prototype.onDidChangeTextDocument = function (e) {
        var filepath = this.client.asAbsolutePath(e.document.uri);
        if (!filepath) {
            return;
        }
        var syncedBuffer = this.syncedBuffers[filepath];
        if (!syncedBuffer) {
            return;
        }
        syncedBuffer.onContentChanged(e.contentChanges);
    };
    BufferSyncSupport.prototype.requestAllDiagnostics = function () {
        var _this = this;
        if (!this._validate) {
            return;
        }
        Object.keys(this.syncedBuffers).forEach(function (filePath) { return _this.pendingDiagnostics[filePath] = Date.now(); });
        this.diagnosticDelayer.trigger(function () {
            _this.sendPendingDiagnostics();
        });
    };
    BufferSyncSupport.prototype.requestDiagnostic = function (file) {
        var _this = this;
        if (!this._validate || this.client.experimentalAutoBuild) {
            return;
        }
        this.pendingDiagnostics[file] = Date.now();
        this.diagnosticDelayer.trigger(function () {
            _this.sendPendingDiagnostics();
        });
    };
    BufferSyncSupport.prototype.sendPendingDiagnostics = function () {
        var _this = this;
        if (!this._validate) {
            return;
        }
        var files = Object.keys(this.pendingDiagnostics).map(function (key) {
            return {
                file: key,
                time: _this.pendingDiagnostics[key]
            };
        }).sort(function (a, b) {
            return a.time - b.time;
        }).map(function (value) {
            return value.file;
        });
        // Add all open TS buffers to the geterr request. They might be visible
        Object.keys(this.syncedBuffers).forEach(function (file) {
            if (!_this.pendingDiagnostics[file]) {
                files.push(file);
            }
        });
        var args = {
            delay: 0,
            files: files
        };
        this.client.execute('geterr', args, false);
        this.pendingDiagnostics = Object.create(null);
    };
    return BufferSyncSupport;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BufferSyncSupport;
//# sourceMappingURL=bufferSyncSupport.js.map