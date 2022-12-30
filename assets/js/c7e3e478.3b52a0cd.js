"use strict";(self.webpackChunkreact_optics_docs=self.webpackChunkreact_optics_docs||[]).push([[4851],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:".slice()",sidebar_position:14},s=".slice(start?, end?): Optic",i={unversionedId:"API/methods/slice()",id:"API/methods/slice()",title:".slice()",description:"---",source:"@site/docs/API/methods/slice().md",sourceDirName:"API/methods",slug:"/API/methods/slice()",permalink:"/docs/API/methods/slice()",draft:!1,editUrl:"https://github.com/TSOptics/react-optics-docs/edit/master/docs/API/methods/slice().md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:".slice()",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:".filter()",permalink:"/docs/API/methods/filter()"},next:{title:".sort()",permalink:"/docs/API/methods/sort()"}},c={},l=[{value:"Example:",id:"example",level:3}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"slicestart-end-optic"},".slice(start?, end?): Optic"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Optic<A, mapped>.slice: (start?: number, end?: number) => Optic<A, mapped>;\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Analogous to ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"},"Array.slice"),", this method returns a mapped optic focused on a slice of the original mapped optic elements.",(0,o.kt)("br",{parentName:"p"}),"\n","If ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," isn't specified the slice will begin at index 0, if ",(0,o.kt)("inlineCode",{parentName:"p"},"end")," isn't specified the slice won't stop until the end of the array."),(0,o.kt)("h3",{id:"example"},"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const onAegeanIslands = createStore([\n    'Crete',\n    'Lesbos',\n    'Mykonos',\n    'Santorini',\n    'Rhodos',\n    'Kalokairi'\n]);\n// onAegeanIslands: Optic<string[]>\n\nconst onRealAgeanIslands = onAegeanIslands.map().slice(0, 5);\n// onRealAgeanIslands: Optic<string, mapped>;\n\nconst [realAgeanIslands] = useOptic(onRealAgeanIslands);\n// realAgeanIslands = ['Crete', 'Lesbos', 'Mykonos', 'Santorini', 'Rhodos'];\n")))}d.isMDXComponent=!0}}]);