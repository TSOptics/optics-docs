"use strict";(self.webpackChunkreact_optics_docs=self.webpackChunkreact_optics_docs||[]).push([[9882],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1842:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Total vs partial",sidebar_position:1},s="total vs partial optics",p={unversionedId:"Guides/total_partial",id:"Guides/total_partial",title:"Total vs partial",description:"Optics can either be total or partial:",source:"@site/docs/Guides/total_partial.md",sourceDirName:"Guides",slug:"/Guides/total_partial",permalink:"/docs/Guides/total_partial",draft:!1,editUrl:"https://github.com/TSOptics/react-optics-docs/edit/master/docs/Guides/total_partial.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Total vs partial",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Core Concepts",permalink:"/docs/Introduction/core-concepts"},next:{title:"Mapped optics",permalink:"/docs/Guides/mapped_optics"}},c={},u=[{value:"Type relations",id:"type-relations",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"total-vs-partial-optics"},"total vs partial optics"),(0,o.kt)("p",null,"Optics can either be total or partial:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Total is the default type for an optic, it means that the focused value exists and reading and/or updating it will always succeed.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const onName = createStore({ name: 'Vincent' }).focus('name');\n// onName: Optic<string, total>\n\n// onName.getState() = 'Vincent'\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"total is the default")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When the optic's type isn't specified it defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"total"),":",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"Optic<string>")," is equivalent to ",(0,o.kt)("inlineCode",{parentName:"p"},"Optic<string, total>")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Partial means that the focused value might not exist.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const onUsers = createStore([\n    { name: 'Vincent', contact: { phone: '999-999-999' } },\n    { name: 'Gabin' }\n]);\n// onUsers: Optic<{ name: string; contact?: { phone: string } }[]>\n\nconst onFirstUserPhone = onUsers.focus(0).focus('contact?.phone');\n// onFirstUserPhone: Optic<string, partial>\n\nconst onSecondUserPhone = onUsers.focus(1).focus('contact?.phone');\n// onSecondUserPhone: Optic<string, partial>\n")),(0,o.kt)("p",null,"Here both optics are ",(0,o.kt)("strong",{parentName:"p"},"partial")," because some users might not have a contact field with a phone number in it, as denoted by the ",(0,o.kt)("inlineCode",{parentName:"p"},"?.")," operator used in the path."),(0,o.kt)("p",null,"The type of the retrieved value in both cases will be ",(0,o.kt)("inlineCode",{parentName:"p"},"string | undefined"),". If an optic can't find the focused value it will return ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const vincentsPhone = onFirstUserPhone.getState();\n// vincentsPhone: string | undefined\n// vincentsPhone = '999-999-999'\n\nconst gabinsPhone = onSecondUserPhone.getState();\n// gabinsPhone: string | undefined\n// gabinsPhone = undefined\n")),(0,o.kt)("p",null,"When trying to set a new value with a partial optic that fails to focus on a value it will simply noop:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"onSecondUserPhone.setState('888-888-888');\nonSecondUserPhone.getState(); // undefined\n")),(0,o.kt)("p",null,"Some methods like ",(0,o.kt)("inlineCode",{parentName:"p"},".findFirst()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".if()")," also return partial optics:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const onNumber = createStore(42);\nconst onEvenNumber = onNumber.if((n) => n % 2 === 0);\n// onEvenNumber: Optic<number, partial>\n\nonEvenNumber.getState(); // 42\n\nonEvenNumber.setState((n) => n + 1);\n\nonNumber.getState(); // 43\nonEvenNumber.getState(); // undefined\n")),(0,o.kt)("p",null,"Here ",(0,o.kt)("inlineCode",{parentName:"p"},"onEvenNumber")," is partial because it will fail to focus on a value if the predicate returns false."),(0,o.kt)("h3",{id:"type-relations"},"Type relations"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"total")," is a subtype of ",(0,o.kt)("inlineCode",{parentName:"p"},"partial"),", meaning we can assign a total optic to a partial one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const onNumber = createStore(42);\nconst onNumberPartial: Optic<number, partial> = onNumber; // \u2705 allowed\n")),(0,o.kt)("p",null,"However the reverse is not true:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const onEvenNumber = createStore(42).if((n) => n % 2 === 0); // Optic<number, partial>\nconst onNumberTotal: Optic<number, total> = onEvenNumber; // \u274c not allowed\n")),(0,o.kt)("p",null,"In the event you have a partial optic but you're really sure it will never fail to focus a value, then it's ok to use the unsafe ",(0,o.kt)("inlineCode",{parentName:"p"},"as")," to downcast the partial optic to a total one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const onMinNumber = createStore([9, 6, 4, 0, 3]).map().min(); // Optic<number, partial>\n\nconst onNumberTotal = onMinNumber as Optic<number, total>;\n// \u2705 unsafe, but ok as long as you don't empty the array\n")))}m.isMDXComponent=!0}}]);