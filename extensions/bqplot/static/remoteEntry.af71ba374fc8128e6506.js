var _JUPYTERLAB;(()=>{"use strict";var e,r,t,n,a,o,i,l,d,f,u,s,c,p,h,b,v,g,m={8873:(e,r,t)=>{var n={"./index":()=>Promise.all([t.e(842),t.e(668),t.e(568)]).then((()=>()=>t(1568))),"./extension":()=>Promise.all([t.e(842),t.e(668),t.e(568),t.e(133)]).then((()=>()=>t(2133)))},a=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n=t.S.default,a="default";if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[a]=e,t.I(a,r)}};t.d(r,{get:()=>a,init:()=>o})}},y={};function w(e){var r=y[e];if(void 0!==r)return r.exports;var t=y[e]={id:e,exports:{}};return m[e].call(t.exports,t,t.exports,w),t.exports}w.m=m,w.c=y,w.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return w.d(r,{a:r}),r},w.d=(e,r)=>{for(var t in r)w.o(r,t)&&!w.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},w.f={},w.e=e=>Promise.all(Object.keys(w.f).reduce(((r,t)=>(w.f[t](e,r),r)),[])),w.u=e=>e+"."+{87:"cc5d175e0ffc0d125bd5",133:"6a1bb63d389b2bb913aa",212:"e8cdc741c425e2902797",469:"a7f725142d31db4b2f8c",501:"6c13f92ce49688bde790",568:"b05e1448ad8864fcf75e",662:"8aa1bf615fb33700fe46",668:"c78ed007387e38f61a69",794:"1ed37f30b94f252add42",815:"5a9f6cdc8bf7c98ec71e",842:"55077e555f9c628e3b70",981:"8fb11420f77b34a88fb2"}[e]+".js?v="+{87:"cc5d175e0ffc0d125bd5",133:"6a1bb63d389b2bb913aa",212:"e8cdc741c425e2902797",469:"a7f725142d31db4b2f8c",501:"6c13f92ce49688bde790",568:"b05e1448ad8864fcf75e",662:"8aa1bf615fb33700fe46",668:"c78ed007387e38f61a69",794:"1ed37f30b94f252add42",815:"5a9f6cdc8bf7c98ec71e",842:"55077e555f9c628e3b70",981:"8fb11420f77b34a88fb2"}[e],w.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),w.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="bqplot:",w.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==a)for(var d=document.getElementsByTagName("script"),f=0;f<d.length;f++){var u=d[f];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==r+a){i=u;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,w.nc&&i.setAttribute("nonce",w.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var s=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},c=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),l&&document.head.appendChild(i)}},w.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{w.S={};var e={},r={};w.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];w.o(w.S,t)||(w.S[t]={});var o=w.S[t],i="bqplot",l=(e,r,t,n)=>{var a=o[e]=o[e]||{},l=a[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(a[r]={get:t,from:i,eager:!!n})},d=[];switch(t){case"default":l("bqplot","0.5.34",(()=>Promise.all([w.e(842),w.e(668),w.e(568)]).then((()=>()=>w(1568))))),l("d3-selection","1.4.2",(()=>w.e(815).then((()=>()=>w(4815))))),l("d3","5.16.0",(()=>Promise.all([w.e(842),w.e(662),w.e(668),w.e(469)]).then((()=>()=>w(662))))),l("is-typedarray","1.0.0",(()=>w.e(501).then((()=>()=>w(4501))))),l("popper.js","1.16.1",(()=>w.e(981).then((()=>()=>w(8981))))),l("three","0.91.0",(()=>w.e(212).then((()=>()=>w(2212))))),l("topojson","1.6.27",(()=>w.e(87).then((()=>()=>w(9087))))),l("underscore","0",(()=>w.e(794).then((()=>()=>w(7794)))))}return e[t]=d.length?Promise.all(d).then((()=>e[t]=1)):1}}})(),(()=>{var e;w.g.importScripts&&(e=w.g.location+"");var r=w.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),w.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(l=e[o]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var i=[];for(o=1;o<e.length;o++){var l=e[o];i.push(0===l?"not("+d()+")":1===l?"("+d()+" || "+d()+")":2===l?i.pop()+" "+i.pop():a(l))}return d();function d(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,l=1,d=!0;;l++,i++){var f,u,s=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(u=(typeof(f=r[i]))[0]))return!d||("u"==s?l>n&&!a:""==s!=a);if("u"==u){if(!d||"u"!=s)return!1}else if(d)if(s==u)if(l<=n){if(f!=e[l])return!1}else{if(a?f>e[l]:f<e[l])return!1;f!=e[l]&&(d=!1)}else if("s"!=s&&"n"!=s){if(a||l<=n)return!1;d=!1,l--}else{if(l<=n||u<s!=a)return!1;d=!1}else"s"!=s&&"n"!=s&&(d=!1,l--)}}var c=[],p=c.pop.bind(c);for(i=1;i<e.length;i++){var h=e[i];c.push(1==h?p()|p():2==h?p()&p():h?o(h,r):!p())}return!!p()},i=(e,r)=>{var t=w.S[e];if(!t||!w.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},d=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+a(t)+")",f=(e,r,t,n)=>{var a=l(e,t);return o(n,a)||"undefined"!=typeof console&&console.warn&&console.warn(d(t,a,n)),s(e[t][a])},u=(e,r,t)=>{var a=e[r];return(r=Object.keys(a).reduce(((e,r)=>!o(t,r)||e&&!n(e,r)?e:r),0))&&a[r]},s=e=>(e.loaded=1,e.get()),p=(c=e=>function(r,t,n,a){var o=w.I(r);return o&&o.then?o.then(e.bind(e,r,w.S[r],t,n,a)):e(r,w.S[r],t,n,a)})(((e,r,t,n)=>(i(e,t),f(r,0,t,n)))),h=c(((e,r,t,n,a)=>{var o=r&&w.o(r,t)&&u(r,t,n);return o?s(o):a()})),b={},v={1668:()=>h("default","d3-selection",[1,1],(()=>w.e(815).then((()=>()=>w(4815))))),366:()=>h("default","d3",[1,5,7,0],(()=>Promise.all([w.e(662),w.e(469)]).then((()=>()=>w(662))))),2729:()=>h("default","is-typedarray",[1,1,0,0],(()=>w.e(501).then((()=>()=>w(4501))))),3211:()=>p("default","@lumino/messaging",[1,1,4,3]),3706:()=>p("default","@lumino/widgets",[1,1,19,0]),5335:()=>p("default","@jupyter-widgets/base",[,[1,4,0,0],[1,3],[1,2],1,1]),5384:()=>h("default","three",[2,0,91,0],(()=>w.e(212).then((()=>()=>w(2212))))),7398:()=>h("default","popper.js",[1,1,0,0],(()=>w.e(981).then((()=>()=>w(8981))))),8731:()=>h("default","underscore",[1,1,8,3],(()=>w.e(794).then((()=>()=>w(7794))))),9363:()=>h("default","topojson",[1,1,6,24],(()=>w.e(87).then((()=>()=>w(9087))))),6469:()=>h("default","d3-selection",[1,1,1,0],(()=>w.e(815).then((()=>()=>w(4815)))))},g={469:[6469],568:[366,2729,3211,3706,5335,5384,7398,8731,9363],668:[1668]},w.f.consumes=(e,r)=>{w.o(g,e)&&g[e].forEach((e=>{if(w.o(b,e))return r.push(b[e]);var t=r=>{b[e]=0,w.m[e]=t=>{delete w.c[e],t.exports=r()}},n=r=>{delete b[e],w.m[e]=t=>{throw delete w.c[e],r}};try{var a=v[e]();a.then?r.push(b[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))},(()=>{var e={632:0};w.f.j=(r,t)=>{var n=w.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(469|668)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=w.p+w.u(r),i=new Error;w.l(o,(t=>{if(w.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[o,i,l]=t,d=0;for(n in i)w.o(i,n)&&(w.m[n]=i[n]);for(l&&l(w),r&&r(t);d<o.length;d++)a=o[d],w.o(e,a)&&e[a]&&e[a][0](),e[o[d]]=0},t=self.webpackChunkbqplot=self.webpackChunkbqplot||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var S=w(8873);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB).bqplot=S})();