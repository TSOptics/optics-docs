"use strict";(self.webpackChunkoptics_docs=self.webpackChunkoptics_docs||[]).push([[9167],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={title:".convert()",sidebar_position:4},a=".convert(to, from): Optic",s={unversionedId:"API/methods/convert()",id:"API/methods/convert()",title:".convert()",description:"---",source:"@site/docs/API/methods/convert().md",sourceDirName:"API/methods",slug:"/API/methods/convert()",permalink:"/docs/API/methods/convert()",draft:!1,editUrl:"https://github.com/TSOptics/optics-docs/edit/master/docs/API/methods/convert().md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:".convert()",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"useKeyedOptics()",permalink:"/docs/API/React/useKeyedOptics()"},next:{title:".compose()",permalink:"/docs/API/methods/compose()"}},c={},l=[{value:"Example:",id:"example",level:3}],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"convertto-from-optic"},".convert(to, from): Optic"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Optic<A>.convert: <B>(to: (a: A) => B, from: (b: B) => A) => Optic<B>;\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"This method takes a ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," function that converts the focused value to another value, and a ",(0,o.kt)("inlineCode",{parentName:"p"},"from")," that does the reverse conversion.\nIt returns an optic focused on this converted representation."),(0,o.kt)("h3",{id:"example"},"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const onState = createState({ milliseconds: 78450000 });\n\nconst onMilliseconds = onState.milliseconds;\nconst onMinutes = onMilliseconds.convert(\n  (ms) => ms / 60000,\n  (minutes) => minutes * 60000\n);\n")),(0,o.kt)("p",null,"Here our ",(0,o.kt)("inlineCode",{parentName:"p"},"onMinutes")," optic allows us to read and manipulate our time measurement in minutes even though it is represented in milliseconds in our store."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const [minutes, setMinutes] = useOptic(onMinutes);\n// minutes = 1307.5\n\nsetMinutes((prev) => prev + 120);\n// minutes = 1427.5\n// in our store: milliseconds = 85650000\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The conversion should be lossless, it means that this laws must be respected:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"from(to(a)) = a")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"to(from(b)) = b")))))}m.isMDXComponent=!0}}]);