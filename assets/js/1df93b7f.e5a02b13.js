"use strict";(self.webpackChunkoptics_docs=self.webpackChunkoptics_docs||[]).push([[3237],{3623:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(r(2364)),s=r(8885),l=r(2570),a=r(428);class o extends i.default{constructor(e){return super(),this.lenses=e,(0,l.proxify)(this)}get(e){return(0,s.get)(e,this.lenses)}set(e,t){return(0,a.set)(e,t,this.lenses)}derive(e){return new o([...this.lenses,...e])}toString(){return this.lenses.map((e=>e.key.toString())).toString()}}t.default=o},2364:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=()=>{};t.default=class{refine(e){return this.derive([{get:t=>!1!==e(t)?t:void 0,set:(t,r)=>!1!==e(r)?t:r,key:"refine"}])}if(e){return this.derive([{get:t=>!0===e(t)?t:void 0,set:(t,r)=>!0===e(r)?t:r,key:"if"}])}convert(e,t){return this.derive([{get:e,set:t,key:"convert",type:"unstable"}])}compose(e){return this.derive([{get:e=>e,set:e=>e,key:"compose",type:"unstable"},...e.lenses])}map(){return this.derive([{get:e=>e,set:e=>e,key:"map",type:"map"}])}at(e){return this.derive([{get:t=>t[e<0?e+t.length:e],set:(t,r)=>{const n=e<0?e+r.length:e;return r.map(((e,r)=>r===n?t:e))},key:"at"}])}indexBy(e){return this.derive([{get:t=>t.reduce(((t,r)=>(t[e(r)]=r,t)),{}),set:(t,r)=>{const n=Object.assign({},t);return r.reduceRight(((t,r)=>{var i;const s=e(r);return t.unshift(null!==(i=n[s])&&void 0!==i?i:r),delete n[s],t}),[])},key:"indexBy",type:"unstable"}])}findFirst(e){return this.derive([{key:"findFirst",get:t=>t.find(e),set:(t,r)=>{const n=r.findIndex(e);return-1===n?r:r.map(((e,r)=>r===n?t:e))}}])}min(...e){const t=t=>{if(0===t.length)return;const r=e[0]?t.map(e[0]):t;return r.reduce(((e,t,n)=>t<r[e]?n:e),0)};return this.derive([{key:"min",get:e=>{const r=t(e);return void 0!==r?e[r]:void 0},set:(e,r)=>{const n=t(r);return r.map(((t,r)=>r===n?e:t))}}])}max(...e){const t=t=>{if(0===t.length)return;const r=e[0]?t.map(e[0]):t;return r.reduce(((e,t,n)=>t>r[e]?n:e),0)};return this.derive([{key:"max",get:e=>{const r=t(e);return void 0!==r?e[r]:void 0},set:(e,r)=>{const n=t(r);return r.map(((t,r)=>r===n?e:t))}}])}reverse(){return this.derive([{key:"reverse",type:"unstable",get:e=>[...e].reverse(),set:e=>[...e].reverse()}])}slice(e=0,t){return this.derive([{key:"slice",type:"unstable",get:r=>r.slice(e,t),set:(r,n)=>[...n.slice(0,e),...r,...n.slice(null!=t?t:n.length)]}])}values(){return this.derive([{get:e=>Object.values(e),set:(e,t)=>Object.keys(t).reduce(((t,r,n)=>(t[r]=e[n],t)),{}),key:"values",type:"unstable"}])}entries(){return this.derive([{get:e=>Object.entries(e),set:e=>Object.fromEntries(e),key:"entries",type:"unstable"}])}reduceFindFirst(e){return this.derive([{get:t=>t.findIndex(e),set:r,type:"fold",key:"findFirst"}])}reduceMax(...e){return this.derive([{get:t=>t.reduce((({maxValue:t,indexOfMax:r},n,i)=>{var s,l;const a=null!==(l=null===(s=e[0])||void 0===s?void 0:s.call(e,n))&&void 0!==l?l:n;return{maxValue:a>t?a:t,indexOfMax:a>t?i:r}}),{maxValue:Number.MIN_VALUE,indexOfMax:-1}).indexOfMax,set:r,type:"fold",key:"maxBy"}])}reduceMin(...e){return this.derive([{get:t=>t.reduce((({minValue:t,indexOfMin:r},n,i)=>{var s,l;const a=null!==(l=null===(s=e[0])||void 0===s?void 0:s.call(e,n))&&void 0!==l?l:n;return{minValue:a<t?a:t,indexOfMin:a<t?i:r}}),{minValue:Number.MAX_VALUE,indexOfMin:-1}).indexOfMin,set:r,type:"fold",key:"minBy"}])}reduceAt(e){return this.derive([{get:t=>e<0?e+t.length:e,set:r,type:"fold",key:"atIndex"}])}reduceFilter(e){return this.derive([{get:t=>t.reduce(((t,r,n)=>(e(r)&&t.push(n),t)),[]),set:r,type:"foldN",key:"filter"}])}reduceSlice(e=0,t){return this.derive([{get:r=>{const n=e<0?r.length+e:e,i=void 0===t?r.length:t<0?r.length+t:t;return n>=i?[]:Array(i-n).fill(void 0).map(((e,t)=>t+n))},set:r,type:"foldN",key:`slice from ${null!=e?e:0} to ${null!=t?t:"end"}`}])}reduceSort(e=((e,t)=>`${e}`<`${t}`?-1:1)){return this.derive([{get:t=>Object.entries(t).sort((([,t],[,r])=>e(t,r))).map((([e])=>e)),set:r,type:"foldN",key:"sort"}])}toPartial(){return this.derive([{get:e=>e,set:e=>e,key:"toPartial"}])}default(e){return this.derive([{key:"default",type:"nullable",get:t=>null==t?e():t,set:e=>e}])}}},3490:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getFoldTree=t.isFold=void 0;t.isFold=e=>e&&("fold"===e.type||"foldN"===e.type);t.getFoldTree=(e,r)=>{const n=e.find(t.isFold);if(!n)return;const i=[],s=(e,r)=>{const[l,...a]=e;if(l===n){const e=i.length;return i.push(r),e}const o=l.get(r);return null!=o||(0,t.isFold)(a[0])?"map"===l.type?o.reduce(((e,t)=>{const r=s(a,t);return-1!==r&&e.push(r),e}),[]):s(a,o):-1},l=s(e,r),a=n.get(i);return((e,t)=>{const r=e=>{if("number"==typeof e)return t.has(e)?[]:void 0;let n=!0;const i=e.map((e=>{const t=r(e);return void 0!==t&&(n=!1),t}));return n?void 0:i},n=r(e);return null!=n?n:[]})(l,new Set(Array.isArray(a)?a:[a]))}},8885:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.get=void 0;const i=r(3490),s=n(r(6003));t.get=(e,t,r)=>{const n=(e,t,s=!1)=>{const[l,...a]=t;if(!l||null==e&&"nullable"!==l.type)return e;const o=null==r?void 0:r(e,l);if(void 0!==o)return o;if("map"===l.type){const t=l.get(e),r=s?t.flat():t,o=a[0]&&!(0,i.isFold)(a[0])?r.filter((e=>null!=e)):r;return o.length>0?n(o,a,!0):void 0}if("fold"===l.type){const t=l.get(e);if(-1===t)return;return n(e[t],a,!1)}if("foldN"===l.type){const t=l.get(e);if(0===t.length)return[];const r=Array(t.length).fill(void 0).map(((r,n)=>e[t[n]]));return n(r,a,!0)}if(s){const t=e.map(l.get),r=(0,i.isFold)(a[0])?t:t.filter((e=>null!=e));return r.length>0?n(r,a,s):void 0}const c=l.get(e);return n(c,a,s)},l=n(e,t);return null==l&&(0,s.default)(t)?[]:l}},2221:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.proxify=t.set=t.get=t.CombinatorsImpl=t.pureOptic=void 0;var i=r(3976);Object.defineProperty(t,"pureOptic",{enumerable:!0,get:function(){return i.pureOptic}});var s=r(2364);Object.defineProperty(t,"CombinatorsImpl",{enumerable:!0,get:function(){return n(s).default}});var l=r(8885);Object.defineProperty(t,"get",{enumerable:!0,get:function(){return l.get}});var a=r(428);Object.defineProperty(t,"set",{enumerable:!0,get:function(){return a.set}});var o=r(2570);Object.defineProperty(t,"proxify",{enumerable:!0,get:function(){return o.proxify}})},6003:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=e=>e.reduce(((e,t)=>"fold"!==t.type&&(e||"map"===t.type||"foldN"===t.type)),!1)},2570:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.proxify=void 0;t.proxify=e=>new Proxy(e,{get:(e,t)=>void 0!==e[t]?e[t]:"symbol"!=typeof t?e.derive([{key:"focus "+t,get:e=>e[t],set:(e,r)=>Array.isArray(r)?[...r.slice(0,t),e,...r.slice(t+1)]:Object.assign(Object.assign({},r),{[t]:e})}]):void 0})},3976:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.pureOptic=void 0;const i=n(r(3623));t.pureOptic=function(e,t,r){return"function"==typeof e?new i.default([{get:e,set:t,key:null!=r?r:"custom optic"}]):new i.default([{get:e=>e,set:e=>e,key:e||"custom optic"}])}},428:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.set=void 0;const n=r(3490);t.set=(e,r,i,s=(0,n.getFoldTree)(i,r))=>{const[l,...a]=i;if(!l)return"function"==typeof e?e(r):e;if((0,n.isFold)(l))return(0,t.set)(e,r,a);const o=l.get(r);if(null==o&&a.length>0&&"nullable"!==a[0].type)return r;if("map"===l.type){const n=s?o.map(((r,n)=>s[n]?(0,t.set)(e,r,a,s[n]):r)):o.map((r=>a.length>0&&null==r?r:(0,t.set)(e,r,a,s)));return o.some(((e,t)=>e!==n[t]))?l.set(n,r):r}const c=(0,t.set)(e,o,a,s);return o===c?r:l.set(c,r)}},6795:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=r(2221),i=r(3221),s=r(8840);class l extends n.CombinatorsImpl{get dependencies(){var e;return void 0===this._dependencies&&(this._dependencies=null!==(e=this.getDependencies((0,n.get)(this.getStore().state,this.lenses)))&&void 0!==e?e:null),this._dependencies}constructor(e,t,r){return super(),this.initialValue=t,this.listenersDenormalized=new Set,this.cacheByLenses=new Map,this.cache={},this.getDependencies=e=>{if(e instanceof l){return{optic:e,unsubscribe:e.subscribe((()=>{this.listenersDenormalized.forEach((e=>e()))})),[i.leafSymbol]:"leaf"}}let t=!0;if(Array.isArray(e)){const r=e.map((e=>{const r=this.getDependencies(e);return void 0!==r&&(t=!1),r}));return t?void 0:r}if("object"==typeof e&&null!==e&&!(e instanceof Date)){const r=Object.entries(e).reduce(((e,[r,n])=>{const i=this.getDependencies(n);return void 0!==i&&(t=!1,e[r]=i),e}),{});return t?void 0:r}},this.denormalizeState=(e,t)=>{if(a(t))return t.state;if(Array.isArray(t)){const r=e;return t.map(((e,t)=>void 0===e?r[t]:this.denormalizeState(r[t],e)))}return Object.entries(t).reduce(((e,[t,r])=>(e[t]=this.denormalizeState(e[t],r),e)),Object.assign({},e))},this.updateDependenciesSubscriptions=()=>{const e=(t,r)=>{if(a(t)){if(t.optic===r)return;t.optic=r,t.unsubscribe(),t.unsubscribe=t.optic.subscribe((()=>{this.listenersDenormalized.forEach((e=>e()))}))}else Array.isArray(t)?t.forEach(((t,n)=>{void 0!==t&&e(t,r[n])})):Object.entries(t).forEach((([t,n])=>{e(n,r[t])}))};this.dependencies&&e(this.dependencies,this.get({denormalize:!1}))},this.updateDependenciesStates=(e,t)=>{let r=!1;const n=(e,t)=>{if(a(e)){const n=t.get({denormalize:!0});n!==e.state&&(r=!0),e.state=n}else Array.isArray(e)?e.forEach(((e,r)=>{void 0!==e&&n(e,t[r])})):Object.entries(e).forEach((([e,r])=>{n(r,t[e])}))};return n(e,t),r},this.lenses=e,this.storeId=null!=r?r:this,(0,n.proxify)(this)}get(e){const t=!1!==(null==e?void 0:e.denormalize)&&!!this.dependencies,r=this.getStore(),i=(0,n.get)(r.state,this.lenses,((e,t)=>{if("unstable"===t.type||"map"===t.type){if(this.cacheByLenses.get(t)===e&&void 0!==this.cache.a)return this.cache.a;this.cacheByLenses.set(t,e)}}));if(!t||!this.dependencies)return this.cache.a=i,i;if(!this.updateDependenciesStates(this.dependencies,i)&&this.cache.normalized===i&&void 0!==this.cache.denormalized)return this.cache.denormalized;const s=this.denormalizeState(i,this.dependencies);return this.cache={normalized:i,denormalized:s},s}set(e){const t=this.getStore();t.state=(0,n.set)(e,t.state,this.lenses),t.listeners.forEach((e=>e(t.state)))}reset(){this.set((0,n.get)(this.initialValue,this.lenses))}subscribe(e,t){const r=!1!==(null==t?void 0:t.denormalize)&&!!this.dependencies,n=this.getStore();let i=this.get({denormalize:r});const s=()=>{const t=this.get({denormalize:r});t!==i&&(i=t,e(t))},l=()=>this.updateDependenciesSubscriptions();return r&&(0===this.listenersDenormalized.size&&(l(),n.listeners.add(l)),this.listenersDenormalized.add(s)),n.listeners.add(s),()=>{n.listeners.delete(s),r&&(this.listenersDenormalized.delete(s),0===this.listenersDenormalized.size&&n.listeners.delete(l))}}derive(e){return new l([...this.lenses,...e],this.initialValue,this.storeId)}getStore(){const e=s.stores.get(this.storeId);if(!e){const e={state:this.initialValue,listeners:new Set};return s.stores.set(this.storeId,e),e}return e}}const a=e=>e.hasOwnProperty(i.leafSymbol);t.default=l},3221:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.leafSymbol=t.tag=void 0,t.tag=Symbol("tag"),t.leafSymbol=Symbol("dependency")},3832:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.createState=void 0;const i=n(r(6795));t.createState=function(e,t){return new i.default([{key:null!=t?t:"store",get:e=>e,set:e=>e}],e)}},702:(e,t,r)=>{t.eK=t.o0=void 0;var n=r(2221);Object.defineProperty(t,"o0",{enumerable:!0,get:function(){return n.pureOptic}});var i=r(3832);Object.defineProperty(t,"eK",{enumerable:!0,get:function(){return i.createState}})},8840:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.stores=void 0,t.stores=new WeakMap},7346:(e,t,r)=>{r.d(t,{Z:()=>l});var n,i=r(7294);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}const l=e=>{let{title:t,titleId:r,...l}=e;return i.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:130,height:490,viewBox:"0 0 490 490","aria-labelledby":r},l),t?i.createElement("title",{id:r},t):null,n||(n=i.createElement("path",{fill:"none",stroke:"#FFF",strokeWidth:36,strokeLinecap:"round",d:"M280 278a153 153 0 1 0-2 2l170 170m-91-117 110 110-26 26-110-110"})))}},4933:(e,t,r)=>{r.d(t,{Z:()=>l});var n,i=r(7294);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}const l=e=>{let{title:t,titleId:r,...l}=e;return i.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:130,height:490,viewBox:"0 0 490 490","aria-labelledby":r},l),t?i.createElement("title",{id:r},t):null,n||(n=i.createElement("path",{fill:"none",stroke:"#000",strokeWidth:36,strokeLinecap:"round",d:"M280 278a153 153 0 1 0-2 2l170 170m-91-117 110 110-26 26-110-110"})))}},985:(e,t,r)=>{r.d(t,{Z:()=>l});var n,i=r(7294);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}const l=e=>{let{title:t,titleId:r,...l}=e;return i.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:490,height:490,viewBox:"0 17 490 460",style:{enableBackground:"new 0 0 489.264 489.264",fill:"#fff"},xmlSpace:"preserve",preserveAspectRatio:"none","aria-labelledby":r},l),t?i.createElement("title",{id:r},t):null,n||(n=i.createElement("path",{d:"M423.658 234.356c-12.438-.003-24.01 3.457-33.869 9.468-3.709 2.262-8.354 2.345-12.141.216s-6.121-6.137-6.121-10.482V155.4c0-12.027-10.109-21.7-22.139-21.7H253.64a12.019 12.019 0 0 1-10.521-17.826c5.22-9.429 8.19-20.296 8.19-31.821 0-36.233-29.374-65.627-65.617-65.627-36.232 0-65.601 29.404-65.601 65.638 0 11.523 2.97 22.385 8.187 31.811a12.014 12.014 0 0 1-.163 11.923 12.015 12.015 0 0 1-10.356 5.902H22.014C9.982 133.7.001 143.373.001 155.4v76.237c0 4.231 2.226 8.15 5.859 10.318a12.009 12.009 0 0 0 11.864.257c9.267-5.012 19.876-7.858 31.151-7.855 36.239-.005 65.612 29.377 65.612 65.612 0 36.238-29.373 65.616-65.612 65.606-11.276 0-21.885-2.847-31.152-7.857a12.014 12.014 0 0 0-11.871.25A12.018 12.018 0 0 0 0 368.294v80.76c0 12.033 9.98 21.784 22.013 21.784h327.375c12.027 0 22.139-9.751 22.139-21.784v-82.681c0-4.342 2.344-8.346 6.127-10.475a12.013 12.013 0 0 1 12.135.207c9.857 6.011 21.432 9.47 33.867 9.47 36.24.01 65.607-29.368 65.607-65.606.001-36.235-29.367-65.618-65.605-65.613z"})))}},5885:(e,t,r)=>{r.d(t,{Z:()=>l});var n,i=r(7294);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}const l=e=>{let{title:t,titleId:r,...l}=e;return i.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:490,height:490,viewBox:"0 17 490 460",style:{enableBackground:"new 0 0 489.264 489.264"},xmlSpace:"preserve",preserveAspectRatio:"none","aria-labelledby":r},l),t?i.createElement("title",{id:r},t):null,n||(n=i.createElement("path",{d:"M423.658 234.356c-12.438-.003-24.01 3.457-33.869 9.468-3.709 2.262-8.354 2.345-12.141.216s-6.121-6.137-6.121-10.482V155.4c0-12.027-10.109-21.7-22.139-21.7H253.64a12.019 12.019 0 0 1-10.521-17.826c5.22-9.429 8.19-20.296 8.19-31.821 0-36.233-29.374-65.627-65.617-65.627-36.232 0-65.601 29.404-65.601 65.638 0 11.523 2.97 22.385 8.187 31.811a12.014 12.014 0 0 1-.163 11.923 12.015 12.015 0 0 1-10.356 5.902H22.014C9.982 133.7.001 143.373.001 155.4v76.237c0 4.231 2.226 8.15 5.859 10.318a12.009 12.009 0 0 0 11.864.257c9.267-5.012 19.876-7.858 31.151-7.855 36.239-.005 65.612 29.377 65.612 65.612 0 36.238-29.373 65.616-65.612 65.606-11.276 0-21.885-2.847-31.152-7.857a12.014 12.014 0 0 0-11.871.25A12.018 12.018 0 0 0 0 368.294v80.76c0 12.033 9.98 21.784 22.013 21.784h327.375c12.027 0 22.139-9.751 22.139-21.784v-82.681c0-4.342 2.344-8.346 6.127-10.475a12.013 12.013 0 0 1 12.135.207c9.857 6.011 21.432 9.47 33.867 9.47 36.24.01 65.607-29.368 65.607-65.606.001-36.235-29.367-65.618-65.605-65.613z"})))}},8014:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}const s=e=>{let{title:t,titleId:r,...s}=e;return n.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 400 400",width:750,height:750,"aria-labelledby":r},s),t?n.createElement("title",{id:r},t):null,n.createElement("path",{d:"M0 200V0h400v400H0",style:{fill:"#fff"}}),n.createElement("path",{d:"M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z",style:{fill:"#000"}}))}},6432:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}const s=e=>{let{title:t,titleId:r,...s}=e;return n.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 400 400",width:2500,height:2500,"aria-labelledby":r},s),t?n.createElement("title",{id:r},t):null,n.createElement("path",{d:"M0 200V0h400v400H0",style:{fill:"#000"}}),n.createElement("path",{d:"M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z",style:{fill:"#fff"}}))}},7432:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var n=r(7294),i=r(7961),s=r(2263),l=r(7462);const a={features:"features_f64c",featureSvg:"featureSvg_fkTp"};var o=r(2949),c=r(702);const u=[{title:"Focus on your state",Svg:r(4933).Z,DarkSvg:r(7346).Z,description:n.createElement(n.Fragment,null,"Focus on slices of your state, read and update them easily even if deeply nested.")},{title:"Composable",Svg:r(5885).Z,DarkSvg:r(985).Z,description:n.createElement(n.Fragment,null,"Derive new state access from previous ones and pass them down your component hierarchy.")},{title:"Typesafe",Svg:r(6432).Z,DarkSvg:r(8014).Z,description:n.createElement(n.Fragment,null,"Typesafe and nullsafe paths with full auto-completion.")}];function d(e){let{Svg:t,title:r,description:i}=e;return n.createElement("div",{className:"col"},n.createElement("div",{className:"text--center"},n.createElement(t,{className:a.featureSvg,alt:r})),n.createElement("div",{className:"text--center padding-horiz--md"},n.createElement("h3",null,r),n.createElement("p",null,i)))}function p(){const{colorMode:e}=(0,o.I)();return n.createElement("section",{className:a.features},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},u.map(((t,r)=>{let{Svg:i,DarkSvg:s,...a}=t;return n.createElement(d,(0,l.Z)({key:r,Svg:"dark"===e?s:i},a))})))))}const h=(0,c.eK)({a:{b:{c:42}}});(0,c.o0)();console.log(h.a.b.c.get());var f=r(6010),v=r(9960);const m={heroBanner:"heroBanner_Nt96",buttons:"buttons_FOv_",emphasis:"emphasis_kfM2"};function g(){const{siteConfig:e}=(0,s.Z)();return n.createElement("header",{className:(0,f.Z)("hero hero--primary",m.heroBanner)},n.createElement("div",{className:"container"},n.createElement("h1",{className:"hero__title"},e.title),n.createElement("p",{className:"hero__subtitle"},"Scalable state management for TypeScript applications"),n.createElement("div",{className:m.buttons},n.createElement(v.Z,{className:"button button--secondary button--lg",to:"/docs/Introduction/getting-started"},"Get Started"))))}function y(){const{siteConfig:e}=(0,s.Z)();return n.createElement(i.Z,{title:"Optics",description:"Description will go into a meta tag in <head />"},n.createElement(g,null),n.createElement("main",null,n.createElement(p,null)))}}}]);