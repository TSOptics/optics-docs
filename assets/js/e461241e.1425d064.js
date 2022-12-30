"use strict";(self.webpackChunkreact_optics_docs=self.webpackChunkreact_optics_docs||[]).push([[8258],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(a),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},527:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={title:"Mapped optics",sidebar_position:2},i=void 0,p={unversionedId:"Guides/mapped_optics",id:"Guides/mapped_optics",title:"Mapped optics",description:"Besides total and partial an optic can be of a third type: mapped.",source:"@site/docs/Guides/mapped_optics.md",sourceDirName:"Guides",slug:"/Guides/mapped_optics",permalink:"/docs/Guides/mapped_optics",draft:!1,editUrl:"https://github.com/TSOptics/react-optics-docs/edit/master/docs/Guides/mapped_optics.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Mapped optics",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Total vs partial",permalink:"/docs/Guides/total_partial"},next:{title:"BaseOptic",permalink:"/docs/Guides/base_optic"}},s={},l=[{value:"Derive from mapped optic",id:"derive-from-mapped-optic",level:2},{value:"Mapped optic specfic methods",id:"mapped-optic-specfic-methods",level:3},{value:"Chain mapped optics",id:"chain-mapped-optics",level:2}],c={toc:l};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Besides total and partial an optic can be of a third type: ",(0,r.kt)("strong",{parentName:"p"},"mapped"),".",(0,r.kt)("br",{parentName:"p"}),"\n","A mapped optic is focused on multiple elements. When you read from a mapped optic you get all focused elements, and when you set a new value it is applied to all elements."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const onNumbers = createStore([4, 8, 9, 3, 7]).map();\n// onNumbers: Optic<number, mapped>\n\nonNumbers.getState(); // [14, 28, 79, 34, 57]\n\nonNumbers.setState((n) => n + 1);\nonNumbers.getState(); // [15, 29, 80, 35, 58]\n\nonNumbers.setState(0);\nonNumbers.getState(); // [0, 0, 0, 0, 0]\n")),(0,r.kt)("p",null,"You can get a mapped optic from an optic focused on an array (by calling ",(0,r.kt)("inlineCode",{parentName:"p"},".map()"),"), or from an optic focused on a record (by calling ",(0,r.kt)("inlineCode",{parentName:"p"},".entries()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".values()"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const onClientValidation = createStore<Record<string, boolean>>({\n    Giuseppe: false,\n    GianLuigi: true,\n    Alessandra: false\n});\n\nconst onValidation = onClientValidation.values(); // Optic<boolean, mapped>\nonValidation.getState(); // [false, true, false]\n\nonValidation.setState(true);\nonClientValidation.getState(); // { Giuseppe: true, GianLuigi: true, Alessandra: true }\n")),(0,r.kt)("h2",{id:"derive-from-mapped-optic"},"Derive from mapped optic"),(0,r.kt)("p",null,"Once you have a mapped optic you can continue to focus further on the elements, which will get you a new mapped optic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const onNationalParks = createStore([\n    { name: 'Denali', squareKilometers: 19185.8 },\n    { name: 'Redwood', squareKilometers: 562.5 },\n    { name: 'Yellowstone', squareKilometers: 8983.2 }\n]).map(); // Optic<{ name: string; squareKilometers: number }, mapped>\n\nconst onAreas = onNationalParks.focus('squareKilometers'); // Optic<number, mapped>\n\nonAreas.getState(); // [19185.8, 562.5, 8983.2]\n")),(0,r.kt)("p",null,"Here ",(0,r.kt)("inlineCode",{parentName:"p"},"onAreas")," focuses on the squareKilometers property of each element focused by ",(0,r.kt)("inlineCode",{parentName:"p"},"onNationalParks"),"."),(0,r.kt)("h3",{id:"mapped-optic-specfic-methods"},"Mapped optic specfic methods"),(0,r.kt)("p",null,"Mapped optics also have additional methods not found on total or partial optics. They resemble those from Javascript's ",(0,r.kt)("inlineCode",{parentName:"p"},"Array")," type like ",(0,r.kt)("inlineCode",{parentName:"p"},"sort"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"slice"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"filter"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const onBigNationalParks = onNationalParks.filter(\n    (park) => park.squareKilometers > 10000\n);\n// onBigNationalParks: Optic<{ name: string; squareKilometers: number }, mapped>\n\nonBigNationalParks.getState(); // [{ name: 'Denali', squareKilometers: 19185.8 }]\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sort"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const onNationalParksByArea = onNationalParks.sort(\n    (a, b) => a.squareKilometers - b.squareKilometers\n);\n// onNationalParksByArea: Optic<{ name: string; squareKilometers: number }, mapped>\n\nconst nationalParksByArea = onNationalParksByArea.getState();\n// nationalParksByArea = [\n//     { name: 'Redwood', squareKilometers: 562.5 },\n//     { name: 'Yellowstone', squareKilometers: 8983.2 },\n//     { name: 'Denali', squareKilometers: 19185.8 }\n// ];\n")),(0,r.kt)("p",null,"They also have methods to focus back on a single element, giving you a partial optic."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"findFirst"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const onFirstBelow10000 = onNationalParks.findFirst(\n    (park) => park.squareKilometers < 10000\n); // Optic<{ name: string; squareKilometers: number }, partial>\n\nonFirstBelow10000.getState(); // { name: 'Redwood', squareKilometers: 562.5 }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"min")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"max"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const maxParkByArea = onNationalParks.max((park) => park.squareKilometers);\n// maxParkByArea: Optic<{ name: string; squareKilometers: number }, partial>\n\nconst minParkByArea = onNationalParks.min((park) => park.squareKilometers);\n// minParkByArea: Optic<{ name: string; squareKilometers: number }, partial>\n\nmaxParkByArea.getState(); // { name: 'Denali', squareKilometers: 19185.8 }\nminParkByArea.getState(); // { name: 'Redwood', squareKilometers: 562.5 }\n")),(0,r.kt)("h2",{id:"chain-mapped-optics"},"Chain mapped optics"),(0,r.kt)("p",null,"You can keep calling ",(0,r.kt)("inlineCode",{parentName:"p"},".map()")," as long the focused value is an array, or you can keep calling ",(0,r.kt)("inlineCode",{parentName:"p"},".values()"),"/",(0,r.kt)("inlineCode",{parentName:"p"},".entries()")," as long as the focused value is a record."),(0,r.kt)("p",null,"You will get a flattened representation of your data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const onArrayOfArray = createStore([[7, 98], [56, 4, 2], [300]]);\n// onArrayOfArray: Optic<number[][]>\n\nconst onNumbers = onArrayOfArray.map().map();\n// onNumbers: Optic<number, mapped>\n\nonNumbers.getState(); // [7, 98, 56, 4, 2, 300]\n\nonNumbers.setState(42);\nonArrayOfArray.getState(); // [[42, 42], [42, 42, 42], [42]]\n")))}m.isMDXComponent=!0}}]);