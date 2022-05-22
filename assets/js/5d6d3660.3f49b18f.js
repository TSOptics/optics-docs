"use strict";(self.webpackChunkreact_optics_docs=self.webpackChunkreact_optics_docs||[]).push([[8244],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5196:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},c="Motivation",p={unversionedId:"Introduction/motivation",id:"Introduction/motivation",title:"Motivation",description:"In React centralizing the state in a global store outside of the component tree is a common practice as it makes it possible to read and update this state from anywhere in the app in a performant and predictable way.",source:"@site/docs/Introduction/motivation.mdx",sourceDirName:"Introduction",slug:"/Introduction/motivation",permalink:"/react-optics-docs/docs/Introduction/motivation",draft:!1,editUrl:"https://github.com/TSOptics/react-optics-docs/edit/master/docs/Introduction/motivation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/react-optics-docs/docs/Introduction/getting-started"}},l={},m=[],u={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"In React centralizing the state in a ",(0,r.kt)("strong",{parentName:"p"},"global store")," outside of the component tree is a common practice as it makes it possible to read and update this state from anywhere in the app in a performant and predictable way.",(0,r.kt)("br",{parentName:"p"}),"\n","However this extremely valuable pattern comes with two significant drawbacks that hurt our ability to scale."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"First thing is ",(0,r.kt)("strong",{parentName:"p"},"immutability"),": React relies on reference change to render so we cannot mutate our state but have to create a new version of it each time we make a change.",(0,r.kt)("br",{parentName:"p"}),"\n","However these immutable updates are notoriously verbose and error-prone in Javascript. In a non trivial app the global state will most likely be several level deep, making the update logic littered with the ",(0,r.kt)("strong",{parentName:"p"},"spread operator pyramid of doom"),".\nA workaround consists of getting rid of nested state by ",(0,r.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/choosing-the-state-structure#avoid-deeply-nested-state"},(0,r.kt)("strong",{parentName:"a"},"normalizing it"))," and using joins to make queries. However it feels more idiomatic to SQL than it is to Javascript and makes it easier to introduce bugs and performance issues to the state access/update logic.",(0,r.kt)("br",{parentName:"p"}),"\n","Another option is to use Immer as it allows us to deal with immutable updates while keeping the state structure untouched, but it introduces a kind of cognitive dissonance where we have to knowingly break the rules we have understood and applied for years, while trusting the library to unbreak them with Proxy magic.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The other issue, arguably the most problematic, is ",(0,r.kt)("strong",{parentName:"p"},"coupling"),": when a component subscribes to a store it creates a ",(0,r.kt)("strong",{parentName:"p"},"hard dependency")," between itself and the piece of global state returned by the selector.",(0,r.kt)("br",{parentName:"p"}),"\n","Normally a component receives external state via its props, that\u2019s what makes it composable and allows it to be easily reused and tested in isolation.",(0,r.kt)("br",{parentName:"p"}),"\n","All that\u2019s needed to adapt the component to a new context is to pass different props to it; it\u2019s this inherent composability that makes component based frameworks like React so powerful.",(0,r.kt)("br",{parentName:"p"}),"\n","But it all breaks down when subscribing to a store, now the component has a dependency to this external piece of state that is not parameterized via the props and consequently can\u2019t be changed;\nreusability and testability are thrown out the window.",(0,r.kt)("br",{parentName:"p"}),"\n","We have to resort to split the component into multiple ones with container components managing the state access and a presentational component receiving the data as props from the containers.",(0,r.kt)("br",{parentName:"p"}),"\n","Repeat the process for each component accessing the global state in the app and it all starts to feel like we\u2019re not properly using React anymore."))),(0,r.kt)("p",null,"Well it turns out we can have our cake and eat it, keeping our nested state without introducing coupling while making immutable updates as easy as mutating in-place.",(0,r.kt)("br",{parentName:"p"}),"\n","That\u2019s where ",(0,r.kt)("strong",{parentName:"p"},"Optics")," come in.\nAs a composable pair of getter and setter, an optic focuses on a part of the state and allows us to read and update just this part, without the pains of hand written immutable updates.",(0,r.kt)("br",{parentName:"p"}),"\n","We can then make our component take an optic as a prop and just like that we ",(0,r.kt)("strong",{parentName:"p"},"parameterized")," its global state access and solved our coupling problem !"),(0,r.kt)("p",null,"But Optics are much more than just the solution to our previously mentioned issues.",(0,r.kt)("br",{parentName:"p"}),"\n","While we can have relatively simple optics like just focusing on a specific field from a path, they are flexible enough to express complex data access with conditions or conversions, generalizing to multiple targets, filtering them and focusing back to a single value.",(0,r.kt)("br",{parentName:"p"}),"\n","In the end Optics are a bit like components in some ways: small composable units that can be flexibly arranged in many ways to express complex requirements. That's what makes them ideal for state management in React, we can compose them simultaneously with our components."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),(0,r.kt)("em",{parentName:"h5"},"it's all functions"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This adequacy of Optics with React is maybe not that surprising considering they both have their roots in functional programming !"))))}d.isMDXComponent=!0}}]);