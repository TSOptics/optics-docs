!function(){"use strict";var e,t,f,n,r,a={},c={};function o(e){var t=c[e];if(void 0!==t)return t.exports;var f=c[e]={id:e,loaded:!1,exports:{}};return a[e].call(f.exports,f,f.exports,o),f.loaded=!0,f.exports}o.m=a,o.c=c,e=[],o.O=function(t,f,n,r){if(!f){var a=1/0;for(u=0;u<e.length;u++){f=e[u][0],n=e[u][1],r=e[u][2];for(var c=!0,d=0;d<f.length;d++)(!1&r||a>=r)&&Object.keys(o.O).every((function(e){return o.O[e](f[d])}))?f.splice(d--,1):(c=!1,r<a&&(a=r));if(c){e.splice(u--,1);var i=n();void 0!==i&&(t=i)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[f,n,r]},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},f=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},o.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var r=Object.create(null);o.r(r);var a={};t=t||[null,f({}),f([]),f(f)];for(var c=2&n&&e;"object"==typeof c&&!~t.indexOf(c);c=f(c))Object.getOwnPropertyNames(c).forEach((function(t){a[t]=function(){return e[t]}}));return a.default=function(){return e},o.d(r,a),r},o.d=function(e,t){for(var f in t)o.o(t,f)&&!o.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:t[f]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,f){return o.f[f](e,t),t}),[]))},o.u=function(e){return"assets/js/"+({53:"935f2afb",439:"232e251e",975:"59cbd74c",1327:"5c367bb5",1445:"8f92857d",1449:"af172acd",2069:"b31d23ec",2241:"02b72721",2281:"c0896962",2535:"814f3328",2796:"bb198102",3085:"1f391b9e",3089:"a6aa9e1f",3237:"1df93b7f",3382:"a6badd8c",3513:"97bb1d3d",3585:"c7bf504a",3608:"9e4087bc",3672:"454f9160",3707:"3570154c",4013:"01a85c17",4035:"8e9f0a8a",4061:"2868cdab",4391:"5a6618fa",4466:"ff164189",4500:"aeb9005d",4694:"bdd709f1",4760:"a75fcf61",4811:"83f77de3",5882:"f229eb6a",6103:"ccc49370",6109:"3c43e1a1",6176:"d610846f",6900:"18f197f0",7253:"def02f3b",7414:"393be207",7435:"a014e558",7614:"7803902e",7850:"dcb468c0",7918:"17896441",8244:"5d6d3660",8610:"6875c492",8619:"ea6ac48d",8632:"e07e26d0",9095:"25c2275a",9167:"a2b7a928",9514:"1be78505"}[e]||e)+"."+{53:"d354a390",439:"b779bdd9",975:"e82d8499",1327:"c98afc7f",1445:"e530059a",1449:"bc182d65",1465:"15cdbd80",2069:"0833e07f",2241:"5d21c56a",2281:"8e22b7cd",2535:"4373d123",2796:"2c9752ba",3085:"b9c37976",3089:"42e5bbb8",3237:"247c0b81",3382:"6d015057",3513:"b5d6c585",3585:"a91d52a8",3608:"3f16677b",3672:"763fee23",3707:"752f2e14",4013:"812b7c85",4035:"c815376c",4061:"e0bb2997",4391:"03cf1fd7",4466:"7c9865f9",4500:"c5dbb5d1",4608:"cfb3d382",4694:"696475f2",4760:"ea3fe1e0",4811:"d66f7835",5290:"9d5cb5eb",5387:"06c92eab",5882:"e8fbf11d",6103:"e343e0ca",6109:"fc680d1d",6176:"f2f7109a",6900:"bb3cd34a",7253:"67abc17e",7414:"991cdc80",7435:"2ed0b375",7614:"f9d1472f",7850:"da5b2033",7918:"318ddeff",8244:"3f49b18f",8610:"c3c81243",8619:"8e12b4ed",8632:"d5f740a4",9095:"1330bac4",9167:"b66784f7",9514:"505488f7"}[e]+".js"},o.miniCssF=function(e){},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},r="react-optics-docs:",o.l=function(e,t,f,a){if(n[e])n[e].push(t);else{var c,d;if(void 0!==f)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var b=i[u];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==r+f){c=b;break}}c||(d=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",r+f),c.src=e),n[e]=[t];var l=function(t,f){c.onerror=c.onload=null,clearTimeout(s);var r=n[e];if(delete n[e],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(f)})),t)return t(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),d&&document.head.appendChild(c)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/react-optics-docs/",o.gca=function(e){return e={17896441:"7918","935f2afb":"53","232e251e":"439","59cbd74c":"975","5c367bb5":"1327","8f92857d":"1445",af172acd:"1449",b31d23ec:"2069","02b72721":"2241",c0896962:"2281","814f3328":"2535",bb198102:"2796","1f391b9e":"3085",a6aa9e1f:"3089","1df93b7f":"3237",a6badd8c:"3382","97bb1d3d":"3513",c7bf504a:"3585","9e4087bc":"3608","454f9160":"3672","3570154c":"3707","01a85c17":"4013","8e9f0a8a":"4035","2868cdab":"4061","5a6618fa":"4391",ff164189:"4466",aeb9005d:"4500",bdd709f1:"4694",a75fcf61:"4760","83f77de3":"4811",f229eb6a:"5882",ccc49370:"6103","3c43e1a1":"6109",d610846f:"6176","18f197f0":"6900",def02f3b:"7253","393be207":"7414",a014e558:"7435","7803902e":"7614",dcb468c0:"7850","5d6d3660":"8244","6875c492":"8610",ea6ac48d:"8619",e07e26d0:"8632","25c2275a":"9095",a2b7a928:"9167","1be78505":"9514"}[e]||e,o.p+o.u(e)},function(){var e={1303:0,532:0};o.f.j=function(t,f){var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)f.push(n[2]);else if(/^(1303|532)$/.test(t))e[t]=0;else{var r=new Promise((function(f,r){n=e[t]=[f,r]}));f.push(n[2]=r);var a=o.p+o.u(t),c=new Error;o.l(a,(function(f){if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=f&&("load"===f.type?"missing":f.type),a=f&&f.target&&f.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}}),"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,f){var n,r,a=f[0],c=f[1],d=f[2],i=0;if(a.some((function(t){return 0!==e[t]}))){for(n in c)o.o(c,n)&&(o.m[n]=c[n]);if(d)var u=d(o)}for(t&&t(f);i<a.length;i++)r=a[i],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(u)},f=self.webpackChunkreact_optics_docs=self.webpackChunkreact_optics_docs||[];f.forEach(t.bind(null,0)),f.push=t.bind(null,f.push.bind(f))}()}();