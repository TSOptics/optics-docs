"use strict";(self.webpackChunkoptics_docs=self.webpackChunkoptics_docs||[]).push([[4811],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>k});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},i=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},N=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=c(a),N=o,k=d["".concat(p,".").concat(N)]||d[N]||m[N]||n;return a?r.createElement(k,s(s({ref:t},i),{},{components:a})):r.createElement(k,s({ref:t},i))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=N;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<n;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}N.displayName="MDXCreateElement"},3467:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=a(7462),o=(a(7294),a(3905));const n={title:".compose()",sidebar_position:5},s=".compose(pureOptic): Optic",l={unversionedId:"API/methods/compose()",id:"API/methods/compose()",title:".compose()",description:"---",source:"@site/docs/API/methods/compose().md",sourceDirName:"API/methods",slug:"/API/methods/compose()",permalink:"/optics-docs/docs/API/methods/compose()",draft:!1,editUrl:"https://github.com/TSOptics/optics-docs/edit/master/docs/API/methods/compose().md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:".compose()",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:".convert()",permalink:"/optics-docs/docs/API/methods/convert()"},next:{title:".refine()",permalink:"/optics-docs/docs/API/methods/refine()"}},p={},c=[{value:"Example:",id:"example",level:3}],i={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"composepureoptic-optic"},".compose(pureOptic): Optic"),(0,o.kt)("pre",{className:"shiki solarized-dark",style:{backgroundColor:"#002B36",color:"#839496"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"Optic"),(0,o.kt)("span",{parentName:"div",style:{color:"#859900"}},"<"),(0,o.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"B"),(0,o.kt)("span",{parentName:"div",style:{color:"#859900"}},">"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},"."),(0,o.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"compose"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},": <"),(0,o.kt)("span",{parentName:"div",style:{color:"#CB4B16"}},"C"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},">(pureOptic"),(0,o.kt)("span",{parentName:"div",style:{color:"#859900"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#CB4B16"}},"PureOptic"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},"<"),(0,o.kt)("span",{parentName:"div",style:{color:"#CB4B16"}},"C"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},", "),(0,o.kt)("span",{parentName:"div",style:{color:"#859900"}},"_"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},", "),(0,o.kt)("span",{parentName:"div",style:{color:"#CB4B16"}},"B"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},">) "),(0,o.kt)("span",{parentName:"div",style:{color:"#93A1A1"}},"=>"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"Optic"),(0,o.kt)("span",{parentName:"div",style:{color:"#859900"}},"<"),(0,o.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"C"),(0,o.kt)("span",{parentName:"div",style:{color:"#859900"}},">"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},";"))))),(0,o.kt)("hr",null),(0,o.kt)("p",null,"On an optic on B, the compose method takes a pure optic on C from B and returns a new optic on C."),(0,o.kt)("h3",{id:"example"},"Example:"),(0,o.kt)("pre",{className:"shiki solarized-dark",style:{backgroundColor:"#002B36",color:"#839496"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#93A1A1"}},"type"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#CB4B16"}},"Person"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#859900"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},"  contact"),(0,o.kt)("span",{parentName:"div",style:{color:"#859900"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},"    phone"),(0,o.kt)("span",{parentName:"div",style:{color:"#859900"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#859900"}},"string"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},"    address"),(0,o.kt)("span",{parentName:"div",style:{color:"#859900"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},"      line1"),(0,o.kt)("span",{parentName:"div",style:{color:"#859900"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#859900"}},"string"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},"    };")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},"  };")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},"};")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#93A1A1"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"onState"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#859900"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"createState"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},"<{ buyer"),(0,o.kt)("span",{parentName:"div",style:{color:"#859900"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#CB4B16"}},"Person"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},"; seller"),(0,o.kt)("span",{parentName:"div",style:{color:"#859900"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#CB4B16"}},"Person"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," }>();")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#93A1A1"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"onBuyer"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#859900"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"onState"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},"."),(0,o.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"buyer"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#93A1A1"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"onSeller"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#859900"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"onState"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},"."),(0,o.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"seller"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},";"))))),(0,o.kt)("p",null,"Here we want an optic to focus on the first line of the buyer's address and an other that does the same for the seller."),(0,o.kt)("pre",{className:"shiki solarized-dark",style:{backgroundColor:"#002B36",color:"#839496"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#93A1A1"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"onLine1"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#859900"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"optic"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},"<"),(0,o.kt)("span",{parentName:"div",style:{color:"#CB4B16"}},"Person"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},">()."),(0,o.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"contact"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},"."),(0,o.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"address"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},"."),(0,o.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"line1"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},"; "),(0,o.kt)("span",{parentName:"div",style:{color:"#586E75"}},"// PureOptic")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#93A1A1"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"onBuyerLine1"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#859900"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"onBuyer"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},"."),(0,o.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"compose"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"onLine1"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},");")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#93A1A1"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"onSellerLine1"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#859900"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"onSeller"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},"."),(0,o.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"compose"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"onLine1"),(0,o.kt)("span",{parentName:"div",style:{color:"#839496"}},");"))))))}m.isMDXComponent=!0}}]);