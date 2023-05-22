"use strict";(self.webpackChunkoptics_docs=self.webpackChunkoptics_docs||[]).push([[664],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2884:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:".at()",sidebar_position:12},i=".at(index): Optic",c={unversionedId:"API/methods/array/at()",id:"API/methods/array/at()",title:".at()",description:"---",source:"@site/docs/API/methods/array/at().md",sourceDirName:"API/methods/array",slug:"/API/methods/array/at()",permalink:"/docs/API/methods/array/at()",draft:!1,editUrl:"https://github.com/TSOptics/optics-docs/edit/master/docs/API/methods/array/at().md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:".at()",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:".findFirst()",permalink:"/docs/API/methods/array/findFirst()"},next:{title:".slice()",permalink:"/docs/API/methods/array/slice()"}},s={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"atindex-optic"},".at(index): Optic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"Optic<T[]>.at: (index: number) => Optic<T>;\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"This method returns an optic focused on the element at the provided index in the focused array."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const onNumberArrays = createState([\n  [78, 90, 4, 7],\n  [10, 7],\n  [9],\n  [789, 42, 90],\n]);\n\nconst onNumbers = onNumberArrays.map().map();\n// onNumbers: Optic<number, mapped>\n// onNumbers.get() = [78, 90, 4, 7, 10, 7, 9, 789, 42, 90]\n\nconst on5th = onNumbers.at(4);\n// on5th: Optic<number, partial>;\n// on5th.get() = 10\n")))}d.isMDXComponent=!0}}]);