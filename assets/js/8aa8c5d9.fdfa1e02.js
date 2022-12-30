"use strict";(self.webpackChunkreact_optics_docs=self.webpackChunkreact_optics_docs||[]).push([[3034],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(n),d=o,m=l["".concat(s,".").concat(d)]||l[d]||f[d]||a;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[l]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:".focusMany()",sidebar_position:3},c=".focusMany(props, prefix?): Optics",i={unversionedId:"API/methods/focusMany()",id:"API/methods/focusMany()",title:".focusMany()",description:"---",source:"@site/docs/API/methods/focusMany().md",sourceDirName:"API/methods",slug:"/API/methods/focusMany()",permalink:"/docs/API/methods/focusMany()",draft:!1,editUrl:"https://github.com/TSOptics/react-optics-docs/edit/master/docs/API/methods/focusMany().md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:".focusMany()",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:".focusWithDefault()",permalink:"/docs/API/methods/focusWithDefault()"},next:{title:".convert()",permalink:"/docs/API/methods/convert()"}},s={},p=[],u={toc:p};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"focusmanyprops-prefix-optics"},".focusMany(props, prefix?): Optics"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"This method allows you to derive optics for multiple properties of an object in a single expression."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const onState = createStore({ name: 'Leo', age: 32, married: false });\n\nconst { onName, onAge, onMarried } = onState.focusMany([\n    'name',\n    'age',\n    'married'\n]);\n// onName: Optic<string>\n// onAge: Optic<number>\n// onMarried: Optic<boolean>\n")),(0,o.kt)("p",null,"By default the name of each derived optics is prefixed by ",(0,o.kt)("inlineCode",{parentName:"p"},"on")," but you can change it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { focusedOnName, focusedOnAge, focusedOnMarried } = onState.focusMany(\n    ['name', 'age', 'married'],\n    'focusedOn'\n);\n")))}l.isMDXComponent=!0}}]);