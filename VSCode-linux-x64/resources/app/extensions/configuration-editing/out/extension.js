/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
var vscode = require('vscode');
var jsonc_parser_1 = require('jsonc-parser');
function activate(context) {
    //keybindings.json command-suggestions
    context.subscriptions.push(registerKeybindingsCompletions());
}
exports.activate = activate;
function registerKeybindingsCompletions() {
    var commands = vscode.commands.getCommands(true);
    return vscode.languages.registerCompletionItemProvider({ pattern: '**/keybindings.json' }, {
        provideCompletionItems: function (document, position, token) {
            var location = jsonc_parser_1.getLocation(document.getText(), document.offsetAt(position));
            if (location.path[1] === 'command') {
                var range_1 = document.getWordRangeAtPosition(position) || new vscode.Range(position, position);
                return commands.then(function (ids) { return ids.map(function (id) { return newCompletionItem(id, range_1); }); });
            }
        }
    });
}
function newCompletionItem(text, range, documentation) {
    var item = new vscode.CompletionItem(JSON.stringify(text));
    item.kind = vscode.CompletionItemKind.Value;
    item.documentation = documentation;
    item.textEdit = {
        range: range,
        newText: item.label
    };
    return item;
}
//# sourceMappingURL=extension.js.map