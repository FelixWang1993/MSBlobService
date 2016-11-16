/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
(function(){var t=["vs/platform/instantiation/common/instantiation","vs/workbench/parts/output/browser/outputPanel","exports","vs/nls!vs/workbench/parts/output/browser/outputPanel","vs/base/common/lifecycle","vs/platform/telemetry/common/telemetry","vs/platform/storage/common/storage","vs/platform/configuration/common/configuration","vs/platform/event/common/event","require","vs/platform/message/common/message","vs/workbench/browser/parts/editor/stringEditor","vs/workbench/parts/output/common/output","vs/workbench/parts/output/browser/outputEditorInput","vs/workbench/parts/output/browser/outputActions","vs/platform/workspace/common/workspace","vs/workbench/services/editor/common/editorService","vs/workbench/services/themes/common/themeService"],e=function(e){for(var o=[],n=0,r=e.length;n<r;n++)o[n]=t[e[n]];return o},o=this&&this.__extends||function(t,e){function o(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)},n=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(s=(i<3?r(s):i>3?r(e,o,s):r(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s},r=this&&this.__param||function(t,e){return function(o,n){e(o,n,t)}};define(t[1],e([9,2,3,4,5,6,7,8,0,10,11,12,13,14,15,16,17]),function(t,e,i,s,c,a,p,u,l,h,v,f,m,d,g,y,I){"use strict";var S=function(t){function e(e,o,n,r,i,s,c,a,p,u){t.call(this,e,o,n,r,i,s,c,a,p),this.outputService=u,this.toDispose=[]}return o(e,t),e.prototype.getId=function(){return f.OUTPUT_PANEL_ID},e.prototype.getActions=function(){var t=this;return this.actions||(this.actions=[this.instantiationService.createInstance(d.SwitchOutputAction),this.instantiationService.createInstance(d.ClearOutputAction,d.ClearOutputAction.ID,d.ClearOutputAction.LABEL)],this.actions.forEach(function(e){t.toDispose.push(e)})),this.actions},e.prototype.getActionItem=function(e){return e.id===d.SwitchOutputAction.ID?this.instantiationService.createInstance(d.SwitchOutputActionItem,e):t.prototype.getActionItem.call(this,e)},e.prototype.getCodeEditorOptions=function(){var e=t.prototype.getCodeEditorOptions.call(this);e.wrappingColumn=0,e.lineNumbers=!1,e.glyphMargin=!1,e.lineDecorationsWidth=20,e.rulers=[],e.folding=!1,e.scrollBeyondLastLine=!1;var o=this.outputService.getActiveChannel();return e.ariaLabel=o?i.localize(0,null,o.label):i.localize(1,null),e},e.prototype.setInput=function(e,o){var n=this;return t.prototype.setInput.call(this,e,o).then(function(){return n.revealLastLine()})},e.prototype.createEditor=function(e){t.prototype.createEditor.call(this,e),this.setInput(m.OutputEditorInput.getInstance(this.instantiationService,this.outputService.getActiveChannel()),null)},e.prototype.focus=function(){t.prototype.focus.call(this),this.revealLastLine()},e.prototype.dispose=function(){this.toDispose=s.dispose(this.toDispose),t.prototype.dispose.call(this)},e=n([r(0,c.ITelemetryService),r(1,l.IInstantiationService),r(2,g.IWorkspaceContextService),r(3,a.IStorageService),r(4,h.IMessageService),r(5,p.IConfigurationService),r(6,u.IEventService),r(7,y.IWorkbenchEditorService),r(8,I.IThemeService),r(9,f.IOutputService)],e)}(v.StringEditor);e.OutputPanel=S})}).call(this);
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/66f37fd2a99eb9d628dd374d81d78835b410c39b/vs/workbench/parts/output/browser/outputPanel.js.map