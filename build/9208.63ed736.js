"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[9208,9282],{19282:(e,t,o)=>{o.r(t),o.d(t,{default:()=>w});var n=o(52657),r=o(13815),a=o(7412),i=o(92541),c=o(75550),s=o(20157),d=o(54778),l=o(28877);const u={id:"@jupyterlite/console-application:buttons",autoStart:!0,requires:[i.ITranslator],optional:[a.IConsoleTracker],activate:(e,t,o)=>{if(!o)return;const{commands:n}=e,a=t.load("jupyterlab"),i="repl:run";n.addCommand(i,{caption:a.__("Run"),icon:c.runIcon,execute:()=>n.execute("console:run-forced")});const s=new r.CommandToolbarButton({commands:n,id:i}),u="repl:restart";n.addCommand(u,{caption:a.__("Restart"),icon:c.refreshIcon,execute:()=>n.execute("console:restart-kernel")});const p=new r.CommandToolbarButton({commands:n,id:u}),m="repl:clear";n.addCommand(m,{caption:a.__("Clear"),icon:c.clearIcon,execute:()=>n.execute("console:clear")});const h=new r.CommandToolbarButton({commands:n,id:m});o.widgetAdded.connect(((e,t)=>{const{toolbar:o}=t;t.toolbar.addItem("run",s),t.toolbar.addItem("restart",p),t.toolbar.addItem("clear",h),o.addItem("spacer",r.Toolbar.createSpacerItem());const n=document.createElement("a");n.title=a.__("Powered by JupyterLite"),n.href="https://github.com/jupyterlite/jupyterlite",n.target="_blank",n.rel="noopener noreferrer";const i=new l.Widget({node:n});d.liteIcon.element({container:n,elementPosition:"center",margin:"2px 2px 2px 8px",height:"auto",width:"16px"}),i.addClass("jp-PoweredBy"),o.insertAfter("spacer","powered-by",i)}))}},p={id:"@jupyterlite/repl-extension:console",autoStart:!0,optional:[a.IConsoleTracker,r.IThemeManager],activate:(e,t,o)=>{var n;if(!t)return;const{commands:r}=e,a=window.location.search,i=new URLSearchParams(a),c=i.getAll("code"),s=i.get("kernel")||void 0,d=null===(n=i.get("theme"))||void 0===n?void 0:n.trim(),l=i.get("toolbar");if(e.started.then((()=>{r.execute("console:create",{kernelPreference:{name:s}})})),d&&o){const e=decodeURIComponent(d);o.setTheme(e)}t.widgetAdded.connect((async(e,t)=>{const{console:o}=t;l||t.toolbar.dispose(),c&&(await o.sessionContext.ready,c.forEach((e=>o.inject(e))))}))}},m={id:"@jupyterlite/repl-extension:status",autoStart:!0,provides:n.ILabStatus,activate:e=>{if(!(e instanceof s.SingleWidgetApp))throw new Error(`${m.id} must be activated in SingleWidgetApp.`);return e.status}},h={id:"@jupyterlite/repl-extension:paths",autoStart:!0,provides:n.JupyterFrontEnd.IPaths,activate:e=>{if(!(e instanceof s.SingleWidgetApp))throw new Error(`${h.id} must be activated in SingleWidgetApp.`);return e.paths}},b={id:"@jupyterlite/repl-extension:router",autoStart:!0,provides:n.IRouter,requires:[n.JupyterFrontEnd.IPaths],activate:(e,t)=>{const{commands:o}=e,r=t.urls.base,a=new n.Router({base:r,commands:o});return e.started.then((()=>{a.route(),window.addEventListener("popstate",(()=>{a.route()}))})),a}},w=[u,p,h,b,m]}}]);
//# sourceMappingURL=9208.63ed736.js.map