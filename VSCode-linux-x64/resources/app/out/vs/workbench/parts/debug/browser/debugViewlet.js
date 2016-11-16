/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
(function(){var e=["vs/css!vs/workbench/parts/debug/browser/media/debugViewlet","vs/nls!vs/workbench/parts/debug/browser/debugActionItems","vs/nls!vs/workbench/parts/debug/browser/debugViewlet","vs/workbench/parts/debug/browser/debugActionItems","require","exports","vs/workbench/parts/debug/common/debug","vs/nls","vs/base/common/errors","vs/base/browser/ui/actionbar/actionbar","vs/platform/storage/common/storage","vs/platform/configuration/common/configuration","vs/workbench/parts/debug/browser/debugViewlet","vs/css!vs/workbench/parts/debug/browser/debugViewlet","vs/base/common/winjs.base","vs/base/common/lifecycle","vs/base/browser/ui/splitview/splitview","vs/workbench/common/memento","vs/workbench/browser/viewlet","vs/workbench/parts/debug/browser/debugViewRegistry","vs/workbench/parts/debug/browser/debugActions","vs/platform/instantiation/common/instantiation","vs/platform/progress/common/progress","vs/platform/workspace/common/workspace","vs/platform/telemetry/common/telemetry","vs/base/browser/builder"],t=function(t){for(var i=[],n=0,o=t.length;n<o;n++)i[n]=e[t[n]];return i};define(e[0],t([13]),{}),define(e[1],t([7,2]),function(e,t){return e.create("vs/workbench/parts/debug/browser/debugActionItems",t)});var i=this&&this.__extends||function(e,t){function i(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)},n=this&&this.__decorate||function(e,t,i,n){var o,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(r=(s<3?o(r):s>3?o(t,i,r):o(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r},o=this&&this.__param||function(e,t){return function(i,n){t(i,n,e)}};define(e[3],t([4,5,1,8,9,6,11]),function(e,t,s,r,c,a,u){"use strict";var p=function(e){function t(t,i,n){e.call(this,null,t,[],-1),this.debugService=i,this.registerConfigurationListeners(n)}return i(t,e),t.prototype.registerConfigurationListeners=function(e){var t=this;this.toDispose.push(e.onDidUpdateConfiguration(function(e){t.updateOptions(!0).done(null,r.onUnexpectedError)})),this.toDispose.push(this.debugService.getConfigurationManager().onDidConfigurationChange(function(e){t.updateOptions(!1).done(null,r.onUnexpectedError)}))},t.prototype.render=function(t){e.prototype.render.call(this,t),this.updateOptions(!0).done(null,r.onUnexpectedError)},t.prototype.updateOptions=function(e){var t=this,i=this.debugService.getConfigurationManager();return i.loadLaunchConfig().then(function(n){if(!n||!n.configurations||0===n.configurations.length)return t.setOptions([s.localize(0,null)],0),e?t.actionRunner.run(t._action,null):null;var o=n.configurations.filter(function(e){return!!e.name}).map(function(e){return e.name}),r=i.configuration?i.configuration.name:null,c=o.indexOf(r);return t.setOptions(o,c),e?t.actionRunner.run(t._action,t.getSelected()):void 0})},t=n([o(1,a.IDebugService),o(2,u.IConfigurationService)],t)}(c.SelectActionItem);t.DebugSelectActionItem=p}),define(e[12],t([4,5,2,25,14,15,16,17,18,6,19,20,3,21,22,23,24,10,0]),function(e,t,s,r,c,a,u,p,l,h,g,f,v,d,b,w,m,S){"use strict";var y=h.IDebugService,I=r.$,D=function(e){function t(t,i,n,o,s,r){var c=this;e.call(this,h.VIEWLET_ID,t),this.progressService=i,this.debugService=n,this.instantiationService=o,this.contextService=s,this.progressRunner=null,this.viewletSettings=this.getMemento(r,p.Scope.WORKSPACE),this.toDispose=[],this.views=[],this.toDispose.push(this.debugService.onDidChangeState(function(e){c.onDebugServiceStateChange(e)}))}return i(t,e),t.prototype.create=function(t){var i=this;if(e.prototype.create.call(this,t),this.$el=t.div().addClass("debug-viewlet"),this.contextService.getWorkspace()){var n=this.getActionRunner();this.views=g.DebugViewRegistry.getDebugViews().map(function(e){return i.instantiationService.createInstance(e,n,i.viewletSettings)}),this.splitView=new u.SplitView(this.$el.getHTMLElement()),this.toDispose.push(this.splitView),this.views.forEach(function(e){return i.splitView.addView(e)}),this.toDispose.push(this.splitView.onFocus(function(e){i.lastFocusedView=e}))}else this.$el.append(I(['<div class="noworkspace-view">',"<p>",s.localize(0,null),"</p>","<p>",s.localize(1,null),"</p>","</div>"].join("")));return c.TPromise.as(null)},t.prototype.setVisible=function(t){var i=this;return e.prototype.setVisible.call(this,t).then(function(){return c.TPromise.join(i.views.map(function(e){return e.setVisible(t)}))})},t.prototype.layout=function(e){this.splitView&&this.splitView.layout(e.height)},t.prototype.focus=function(){return e.prototype.focus.call(this),this.lastFocusedView&&this.lastFocusedView.isExpanded()?void this.lastFocusedView.focusBody():void(this.views.length>0&&this.views[0].focusBody())},t.prototype.getActions=function(){var e=this;return this.debugService.state===h.State.Disabled?[]:(this.actions||(this.actions=[this.instantiationService.createInstance(f.StartAction,f.StartAction.ID,f.StartAction.LABEL),this.instantiationService.createInstance(f.SelectConfigAction,f.SelectConfigAction.ID,f.SelectConfigAction.LABEL),this.instantiationService.createInstance(f.ConfigureAction,f.ConfigureAction.ID,f.ConfigureAction.LABEL),this.instantiationService.createInstance(f.ToggleReplAction,f.ToggleReplAction.ID,f.ToggleReplAction.LABEL)],this.actions.forEach(function(t){e.toDispose.push(t)})),this.actions)},t.prototype.getActionItem=function(e){return e.id===f.SelectConfigAction.ID?this.instantiationService.createInstance(v.DebugSelectActionItem,e):null},t.prototype.onDebugServiceStateChange=function(e){this.progressRunner&&this.progressRunner.done(),e===h.State.Initializing?this.progressRunner=this.progressService.show(!0):this.progressRunner=null},t.prototype.dispose=function(){this.toDispose=a.dispose(this.toDispose),e.prototype.dispose.call(this)},t.prototype.shutdown=function(){this.views.forEach(function(e){return e.shutdown()}),e.prototype.shutdown.call(this)},t=n([o(0,m.ITelemetryService),o(1,b.IProgressService),o(2,y),o(3,d.IInstantiationService),o(4,w.IWorkspaceContextService),o(5,S.IStorageService)],t)}(l.Viewlet);t.DebugViewlet=D})}).call(this);
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/66f37fd2a99eb9d628dd374d81d78835b410c39b/vs/workbench/parts/debug/browser/debugViewlet.js.map