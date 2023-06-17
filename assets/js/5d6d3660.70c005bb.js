"use strict";(self.webpackChunkoptics_docs=self.webpackChunkoptics_docs||[]).push([[8244],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=a.createContext({}),l=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=l(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,p=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=l(n),d=o,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,i(i({ref:e},c),{},{components:n})):a.createElement(h,i({ref:e},c))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[u]="string"==typeof t?t:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5196:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:1},i="Motivation",s={unversionedId:"Introduction/motivation",id:"Introduction/motivation",title:"Motivation",description:"Treating application state as immutable has become a mainstay in web and mobile application developpment,",source:"@site/docs/Introduction/motivation.mdx",sourceDirName:"Introduction",slug:"/Introduction/motivation",permalink:"/optics-docs/docs/Introduction/motivation",draft:!1,editUrl:"https://github.com/TSOptics/optics-docs/edit/master/docs/Introduction/motivation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/optics-docs/docs/Introduction/getting-started"}},p={},l=[],c={toc:l},u="wrapper";function m(t){let{components:e,...n}=t;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"Treating application state as ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Immutable_object"},(0,o.kt)("strong",{parentName:"a"},"immutable"))," has become a mainstay in web and mobile application developpment,\nin part because immutability makes it easy to ",(0,o.kt)("strong",{parentName:"p"},"historicize"),", ",(0,o.kt)("strong",{parentName:"p"},"rollback")," the state and most importantly ",(0,o.kt)("strong",{parentName:"p"},"compare")," versions of it,\nwhich is the secret sauce behind the reactivity of UI frameworks like React and why they forbid mutations.",(0,o.kt)("br",{parentName:"p"}),"\n","Even beyond application state, immutability makes our code more predictable, composable, testable and ",(0,o.kt)("strong",{parentName:"p"},"easier to reason about")," when compared to uncontrolled mutability."),(0,o.kt)("p",null,"Unfortunately JavaScript wasn\u2019t built around it, making the ergonomics of immutability often significantly worse than using a mutative approach to state:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First, updating immutable state is hard, and it gets worse as our state grows over time.\nWe have to make a shallow copy of every level up to the part we want to update. It drowns the signal in noise and makes it easy to introduce accidental mutations in the process, causing particularly hard-to-track bugs."),(0,o.kt)("li",{parentName:"ul"},"Representing relations with plain JavaScript objects is easy, just reference an object from another and you have a graph.\nMutate an object and you'll see the change when using other objects referencing it.",(0,o.kt)("br",{parentName:"li"}),"When it comes to reactive immutable state it's unfortunately not that simple. You have to ",(0,o.kt)("strong",{parentName:"li"},"normalize the state"),", represent relations with ids and ",(0,o.kt)("strong",{parentName:"li"},"manually denormalize")," (or join) the state when consuming it.",(0,o.kt)("br",{parentName:"li"}),"The process is tedious, error prone, type-unsafe and doesn't scale well."),(0,o.kt)("li",{parentName:"ul"},"Finally an issue creeping into most apps dependent on global immutable state is that the components, even deep in the tree, end up ",(0,o.kt)("strong",{parentName:"li"},"tightly coupled")," to it.",(0,o.kt)("br",{parentName:"li"}),"Since it's hard to decompose global state and declare dependencies to it in the props you end up ",(0,o.kt)("strong",{parentName:"li"},"explicitly subscribing")," to the context/store in the component, introducing accidental coupling in the process.\nThat means you can't reuse the component elsewhere as is, you'd have to split it in two to isolate the subscription from the reusable part.\nAlso you can't easily test it in isolation without having to mock at least a part of the global state it depends on.")),(0,o.kt)("p",null,"It turns out that functional programming, where everything is immutable, has found a solution to some of these issues a long time ago in the form of ",(0,o.kt)("strong",{parentName:"p"},"optics"),".",(0,o.kt)("br",{parentName:"p"}),"\n","An optic is a ",(0,o.kt)("strong",{parentName:"p"},"composable reference"),", allowing you to focus anywhere in an immutable data structure to read and update it."),(0,o.kt)("p",null,"Turning optics into observables that can be subscribed to makes them an ",(0,o.kt)("strong",{parentName:"p"},"exceptionally good fit")," for application state management.",(0,o.kt)("br",{parentName:"p"}),"\n","It also helps that optics are surprisingly easy to represent in TypeScript;\nthanks to the language type-level capabilities and ES6 Proxies they are easier to use than even in the languages they originated from."),(0,o.kt)("p",null,"They help bridge the ergonomics gap with mutable state by making it easy to ",(0,o.kt)("strong",{parentName:"p"},"update deeply nested values"),",\nto represent ",(0,o.kt)("strong",{parentName:"p"},"relations between entities")," as part of a graph,\nor again to decompose the state allowing our components to ",(0,o.kt)("strong",{parentName:"p"},"independently read and update its parts"),".",(0,o.kt)("br",{parentName:"p"}),"\n","All of this while preserving the props of immutability."))}m.isMDXComponent=!0}}]);