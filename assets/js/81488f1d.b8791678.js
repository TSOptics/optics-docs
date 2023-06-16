"use strict";(self.webpackChunkoptics_docs=self.webpackChunkoptics_docs||[]).push([[3570],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>v});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=c(a),N=r,v=d["".concat(l,".").concat(N)]||d[N]||m[N]||s;return a?n.createElement(v,o(o({ref:t},i),{},{components:a})):n.createElement(v,o({ref:t},i))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=N;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:r,o[1]=p;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},5900:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_position:3,title:"useOpticReducer()"},o="useOpticReducer(optic, reducer): [value, dispatch]",p={unversionedId:"API/React/useOpticReducer()",id:"API/React/useOpticReducer()",title:"useOpticReducer()",description:"---",source:"@site/docs/API/React/useOpticReducer().md",sourceDirName:"API/React",slug:"/API/React/useOpticReducer()",permalink:"/optics-docs/docs/API/React/useOpticReducer()",draft:!1,editUrl:"https://github.com/TSOptics/optics-docs/edit/master/docs/API/React/useOpticReducer().md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"useOpticReducer()"},sidebar:"tutorialSidebar",previous:{title:"useOptic()",permalink:"/optics-docs/docs/API/React/useOptic()"},next:{title:".convert()",permalink:"/optics-docs/docs/API/methods/convert()"}},l={},c=[{value:"Example:",id:"example",level:3}],i={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"useopticreduceroptic-reducer-value-dispatch"},"useOpticReducer(optic, reducer): ","[value, dispatch]"),(0,r.kt)("pre",{className:"shiki solarized-dark",style:{backgroundColor:"#002B36",color:"#839496"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#93A1A1"}},"function"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"useOpticReducer"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"<"),(0,r.kt)("span",{parentName:"div",style:{color:"#CB4B16"}},"T"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},", "),(0,r.kt)("span",{parentName:"div",style:{color:"#CB4B16"}},"TOpticType"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},", "),(0,r.kt)("span",{parentName:"div",style:{color:"#CB4B16"}},"Action"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},">(")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"  onState"),(0,r.kt)("span",{parentName:"div",style:{color:"#859900"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#CB4B16"}},"Optic"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"<"),(0,r.kt)("span",{parentName:"div",style:{color:"#CB4B16"}},"T"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},", "),(0,r.kt)("span",{parentName:"div",style:{color:"#CB4B16"}},"TOpticType"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},">,")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"reducer"),(0,r.kt)("span",{parentName:"div",style:{color:"#859900"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," (state"),(0,r.kt)("span",{parentName:"div",style:{color:"#859900"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#CB4B16"}},"T"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},", action"),(0,r.kt)("span",{parentName:"div",style:{color:"#859900"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#CB4B16"}},"Action"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},", onState"),(0,r.kt)("span",{parentName:"div",style:{color:"#859900"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#CB4B16"}},"Optic"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"<"),(0,r.kt)("span",{parentName:"div",style:{color:"#CB4B16"}},"T"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},", "),(0,r.kt)("span",{parentName:"div",style:{color:"#CB4B16"}},"total"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},", "),(0,r.kt)("span",{parentName:"div",style:{color:"#CB4B16"}},"T"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},">) "),(0,r.kt)("span",{parentName:"div",style:{color:"#93A1A1"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#CB4B16"}},"T")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},")"),(0,r.kt)("span",{parentName:"div",style:{color:"#859900"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," ["),(0,r.kt)("span",{parentName:"div",style:{color:"#CB4B16"}},"T"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},", "),(0,r.kt)("span",{parentName:"div",style:{color:"#CB4B16"}},"Dispatch"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"<"),(0,r.kt)("span",{parentName:"div",style:{color:"#CB4B16"}},"Action"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},">];"))))),(0,r.kt)("hr",null),(0,r.kt)("p",null,"This hook allows you to manage the slice of store focused on by the optic with a reducer.\nAs arguments it takes an optic and a reducer function while it returns the focused value as well as a dispatch function."),(0,r.kt)("p",null,"It works pretty much just like React ",(0,r.kt)("inlineCode",{parentName:"p"},"useReducer"),", you use the dispatch function to send actions that the reducer will use to compute the next state.",(0,r.kt)("br",{parentName:"p"}),"\n","The only difference is that you can use a reducer that takes a pure optic as third argument. With it you can derive new optics to handle immutable updates inside of the reducer with the ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," methods."),(0,r.kt)("h3",{id:"example"},"Example:"),(0,r.kt)("pre",{className:"shiki solarized-dark",style:{backgroundColor:"#002B36",color:"#839496"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#859900"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," { "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"createState"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},", "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"useReducer"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," } "),(0,r.kt)("span",{parentName:"div",style:{color:"#859900"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#2AA198"}},'"@optics/react"'),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#93A1A1"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"initialCounter"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#859900"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," { value: "),(0,r.kt)("span",{parentName:"div",style:{color:"#D33682"}},"0"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},", step: "),(0,r.kt)("span",{parentName:"div",style:{color:"#D33682"}},"1"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," };")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#93A1A1"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"onCounter"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#859900"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"createState"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"initialCounter"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},");")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#93A1A1"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"reducer"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#859900"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," (state, action, onState) "),(0,r.kt)("span",{parentName:"div",style:{color:"#93A1A1"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#93A1A1"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"onValue"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#859900"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"onState"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"."),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"value"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#93A1A1"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"onStep"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#859900"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"onState"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"."),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"step"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#859900"}},"switch"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," ("),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"action"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"."),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"type"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},") {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#859900"}},"case"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#2AA198"}},'"increment"'),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},":")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#586E75"}},"// equivalent to: return { ...state, value: state.value + state.step };")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#859900"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"onValue"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"."),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"set"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"((prev) "),(0,r.kt)("span",{parentName:"div",style:{color:"#93A1A1"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"prev"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#859900"}},"+"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"state"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"."),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"step"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},", "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"state"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},");")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#859900"}},"case"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#2AA198"}},'"decrement"'),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},":")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#859900"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"onValue"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"."),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"set"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"((prev) "),(0,r.kt)("span",{parentName:"div",style:{color:"#93A1A1"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"prev"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#859900"}},"-"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"state"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"."),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"step"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},", "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"state"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},");")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#859900"}},"case"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#2AA198"}},'"changeStep"'),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},":")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#859900"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"onStep"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"."),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"set"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"action"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"."),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"step"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},", "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"state"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},");")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#859900"}},"case"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#2AA198"}},'"reset"'),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},":")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#859900"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"initialCounter"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"  }")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"};")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#93A1A1"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"MyCounterComponent"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#859900"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," () "),(0,r.kt)("span",{parentName:"div",style:{color:"#93A1A1"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#93A1A1"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," ["),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"counter"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},", "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"dispatch"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"] "),(0,r.kt)("span",{parentName:"div",style:{color:"#859900"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"useOpticReducer"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"onCounter"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},", "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"reducer"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},");")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"useEffect"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"(() "),(0,r.kt)("span",{parentName:"div",style:{color:"#93A1A1"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"dispatch"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"({ type: "),(0,r.kt)("span",{parentName:"div",style:{color:"#2AA198"}},'"increment"'),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," });")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"dispatch"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"({ type: "),(0,r.kt)("span",{parentName:"div",style:{color:"#2AA198"}},'"changeStep"'),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},", step: "),(0,r.kt)("span",{parentName:"div",style:{color:"#D33682"}},"10"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," });")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"dispatch"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"({ type: "),(0,r.kt)("span",{parentName:"div",style:{color:"#2AA198"}},'"increment"'),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," });")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"dispatch"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"({ type: "),(0,r.kt)("span",{parentName:"div",style:{color:"#2AA198"}},'"changeStep"'),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},", step: "),(0,r.kt)("span",{parentName:"div",style:{color:"#D33682"}},"3"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," });")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"dispatch"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"({ type: "),(0,r.kt)("span",{parentName:"div",style:{color:"#2AA198"}},'"decrement"'),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}}," });")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#586E75"}},"// counter.value will be 8")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"  }, ["),(0,r.kt)("span",{parentName:"div",style:{color:"#268BD2"}},"dispatch"),(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"]);")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#586E75"}},"// ...")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#839496"}},"};"))))))}m.isMDXComponent=!0}}]);