"use strict";(self.webpackChunkoptics_docs=self.webpackChunkoptics_docs||[]).push([[8382],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>N});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),i=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(a),v=n,N=d["".concat(p,".").concat(v)]||d[v]||m[v]||o;return a?r.createElement(N,s(s({ref:t},c),{},{components:a})):r.createElement(N,s({ref:t},c))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=v;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,s[1]=l;for(var i=2;i<o;i++)s[i]=a[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}v.displayName="MDXCreateElement"},875:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=a(7462),n=(a(7294),a(3905));const o={title:".filter()",sidebar_position:13},s=".filter(predicate): Optic",l={unversionedId:"API/methods/reduce/filter()",id:"API/methods/reduce/filter()",title:".filter()",description:"Analogous to Array.filter, this method returns a mapped optic focused on the elements of the original mapped optic that satisfy the predicate.",source:"@site/docs/API/methods/reduce/filter().md",sourceDirName:"API/methods/reduce",slug:"/API/methods/reduce/filter()",permalink:"/optics-docs/docs/API/methods/reduce/filter()",draft:!1,editUrl:"https://github.com/TSOptics/optics-docs/edit/master/docs/API/methods/reduce/filter().md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:".filter()",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:".values()",permalink:"/optics-docs/docs/API/methods/object/values()"}},p={},i=[{value:"Example:",id:"example",level:3}],c={toc:i},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"filterpredicate-optic"},".filter(predicate): Optic"),(0,n.kt)("pre",{className:"shiki solarized-dark",style:{backgroundColor:"#002B36",color:"#839496"}},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"Optic"),(0,n.kt)("span",{parentName:"div",style:{color:"#859900"}},"<"),(0,n.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"A"),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}},", "),(0,n.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"mapped"),(0,n.kt)("span",{parentName:"div",style:{color:"#859900"}},">"),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}},"."),(0,n.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"filter"),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}},": ("),(0,n.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"predicate"),(0,n.kt)("span",{parentName:"div",style:{color:"#859900"}},":"),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}}," (a"),(0,n.kt)("span",{parentName:"div",style:{color:"#859900"}},":"),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#CB4B16"}},"A"),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}},") "),(0,n.kt)("span",{parentName:"div",style:{color:"#93A1A1"}},"=>"),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#859900"}},"boolean"),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}},") "),(0,n.kt)("span",{parentName:"div",style:{color:"#93A1A1"}},"=>"),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"Optic"),(0,n.kt)("span",{parentName:"div",style:{color:"#859900"}},"<"),(0,n.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"A"),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}},", "),(0,n.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"mapped"),(0,n.kt)("span",{parentName:"div",style:{color:"#859900"}},">"),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}},";"))))),(0,n.kt)("p",null,"Analogous to ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"},"Array.filter"),", this method returns a mapped optic focused on the elements of the original mapped optic that satisfy the predicate."),(0,n.kt)("h3",{id:"example"},"Example:"),(0,n.kt)("pre",{className:"shiki solarized-dark",style:{backgroundColor:"#002B36",color:"#839496"}},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#93A1A1"}},"const"),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"onCountries"),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#859900"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"createState"),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}},"([")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}},"  { name: "),(0,n.kt)("span",{parentName:"div",style:{color:"#2AA198"}},'"Spain"'),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}},", continent: "),(0,n.kt)("span",{parentName:"div",style:{color:"#2AA198"}},'"Europe"'),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}}," },")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}},"  { name: "),(0,n.kt)("span",{parentName:"div",style:{color:"#2AA198"}},'"S\xe9n\xe9gal"'),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}},", continent: "),(0,n.kt)("span",{parentName:"div",style:{color:"#2AA198"}},'"Africa"'),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}}," },")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}},"  { name: "),(0,n.kt)("span",{parentName:"div",style:{color:"#2AA198"}},'"Columbia"'),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}},", continent: "),(0,n.kt)("span",{parentName:"div",style:{color:"#2AA198"}},'"South America"'),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}}," },")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}},"  { name: "),(0,n.kt)("span",{parentName:"div",style:{color:"#2AA198"}},'"Gabon"'),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}},", continent: "),(0,n.kt)("span",{parentName:"div",style:{color:"#2AA198"}},'"Africa"'),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}}," },")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}},"]);")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#586E75"}},"// onCountries: Optic<{ name: string; continent: string }>;")),(0,n.kt)("div",{parentName:"code",className:"line"}),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#93A1A1"}},"const"),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"onAfricanCountries"),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#859900"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"onCountries")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}},"  ."),(0,n.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"map"),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}},"()")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}},"  ."),(0,n.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"filter"),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}},"((country) "),(0,n.kt)("span",{parentName:"div",style:{color:"#93A1A1"}},"=>"),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"country"),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}},"."),(0,n.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"continent"),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#859900"}},"==="),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#2AA198"}},'"Africa"'),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}},");")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#586E75"}},"// onAfricanCountries: Optic<{ name: string; continent: string }, mapped>")),(0,n.kt)("div",{parentName:"code",className:"line"}),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#93A1A1"}},"const"),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}}," ["),(0,n.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"africanCountries"),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}},", "),(0,n.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"setAfricanCountries"),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}},"] "),(0,n.kt)("span",{parentName:"div",style:{color:"#859900"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"useOptic"),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}},"("),(0,n.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"onAfricanCountries"),(0,n.kt)("span",{parentName:"div",style:{color:"#839496"}},");")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#586E75"}},"// africanCountries = [")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#586E75"}},"//    { name: 'S\xe9n\xe9gal', continent: 'Africa' },")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#586E75"}},"//    { name: 'Gabon', continent: 'Africa' }")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#586E75"}},"// ];"))))))}m.isMDXComponent=!0}}]);