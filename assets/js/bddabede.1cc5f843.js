"use strict";(self.webpackChunkoptics_docs=self.webpackChunkoptics_docs||[]).push([[3315],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),l=s(r),d=a,f=l["".concat(i,".").concat(d)]||l[d]||u[d]||o;return r?n.createElement(f,p(p({ref:t},m),{},{components:r})):n.createElement(f,p({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[l]="string"==typeof e?e:a,p[1]=c;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1988:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:".map()",sidebar_position:8},p=".map(): Optic",c={unversionedId:"API/methods/array/map()",id:"API/methods/array/map()",title:".map()",description:"---",source:"@site/docs/API/methods/array/map().md",sourceDirName:"API/methods/array",slug:"/API/methods/array/map()",permalink:"/optics-docs/docs/API/methods/array/map()",draft:!1,editUrl:"https://github.com/TSOptics/optics-docs/edit/master/docs/API/methods/array/map().md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:".map()",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:".set()",permalink:"/optics-docs/docs/API/methods/set()"},next:{title:".findFirst()",permalink:"/optics-docs/docs/API/methods/array/findFirst()"}},i={},s=[{value:"Example:",id:"example",level:3}],m={toc:s},l="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"map-optic"},".map(): Optic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"Optic<A extends any[]>.map: () => Optic<A[number], mapped>;\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"This method returns a new ",(0,a.kt)("a",{parentName:"p",href:"../../guides/mapped%20optics()"},"mapped optic")," from an optic focused on an array."),(0,a.kt)("h3",{id:"example"},"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const onArray = createState([1, 2, 3, 4, 5]);\n\nconst onNumbers = onArray.map();\n// onNumbers: Optic<number, mapped>\n\nconst [numbers, setNumber] = useOptic(onNumbers);\nsetNumber((prev) => prev * 2);\n// numbers = [2, 4, 6, 8, 10]\n")))}u.isMDXComponent=!0}}]);