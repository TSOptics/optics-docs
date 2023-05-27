"use strict";(self.webpackChunkoptics_docs=self.webpackChunkoptics_docs||[]).push([[2583],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8668:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"Map/Reduce",sidebar_position:2},i="Map/Reduce",s={unversionedId:"Guides/map_reduce",id:"Guides/map_reduce",title:"Map/Reduce",description:"Map",source:"@site/docs/Guides/map_reduce.mdx",sourceDirName:"Guides",slug:"/Guides/map_reduce",permalink:"/optics-docs/docs/Guides/map_reduce",draft:!1,editUrl:"https://github.com/TSOptics/optics-docs/edit/master/docs/Guides/map_reduce.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Map/Reduce",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Total/Partial",permalink:"/optics-docs/docs/Guides/total_partial"},next:{title:"Comparisons",permalink:"/optics-docs/docs/Guides/comparisons"}},l={},p=[{value:"Map",id:"map",level:2},{value:"Multi level",id:"multi-level",level:4},{value:"Reduce",id:"reduce",level:2},{value:"Back to one (or none)",id:"back-to-one-or-none",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mapreduce"},"Map/Reduce"),(0,r.kt)("h2",{id:"map"},"Map"),(0,r.kt)("p",null,"While a total optic is focused on ",(0,r.kt)("strong",{parentName:"p"},"one")," value and a partial optic is focused on ",(0,r.kt)("strong",{parentName:"p"},"zero or one")," value, a ",(0,r.kt)("strong",{parentName:"p"},"mapped")," optic is focused on ",(0,r.kt)("strong",{parentName:"p"},"multiple values"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Such optic can read these values and update them simultaneously."),(0,r.kt)("p",null,"To illustrate that let's create a new state holding US national parks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const onState = createState([\n  {\n    name: "Zion",\n    visitors: 5_039_835,\n    attractions: ["angels landing", "great white throne"],\n  },\n  {\n    name: "Yosemite",\n    visitors: 3_287_595,\n    attractions: ["half dome", "el capitan", "mariposa grove"],\n  },\n  {\n    name: "Yellowstone",\n    visitors: 4_860_242,\n    attractions: ["old faithful", "grand prismatic"],\n  },\n]);\n// onState: Optic<{ name: string; visitors: number; attractions: string[] }[]>\n')),(0,r.kt)("p",null,"The initial state is an array so we can call ",(0,r.kt)("inlineCode",{parentName:"p"},".map()")," to get a mapped optic, an optic that ",(0,r.kt)("strong",{parentName:"p"},"maps over")," the values of the array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const onNationalParks = onState.map();\n// onNationalParks: Optic<{ name: string; visitors: number; attractions: string[] }, mapped>\n")),(0,r.kt)("p",null,"From there we can get the name of every national park ..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const onNames = onNationalParks.name;\n// onNames: Optic<string, mapped>\n\nonNames.get(); // ['Zion', 'Yosemite', 'Yellowstone']\n")),(0,r.kt)("p",null,"... or update them all at once:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"onNames.set((prev) => `${prev} National Park`);\n\nonNames.get(); // ['Zion National Park', 'Yosemite National Park', 'Yellowstone National Park']\n")),(0,r.kt)("p",null,"Same thing but for the annual number of visitors:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const onVisitors = onNationalParks.visitors;\n// onVisitors: Optic<number, mapped>\n\nonVisitors.get(); // [5_039_835, 3_287_595, 4_860_242]\n\nonVisitors.set((prev) => prev + 1_000_000);\nonVisitors.get(); // [6_039_835, 4_287_595, 5_860_242]\n")),(0,r.kt)("p",null,"The update function is applied to every focused value, which is convenient to update or reset a large number of values all at once."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The new optics you derive from a mapped optic are themselves mapped optics !")),(0,r.kt)("h4",{id:"multi-level"},"Multi level"),(0,r.kt)("p",null,"You can call ",(0,r.kt)("inlineCode",{parentName:"p"},".map()")," every time the focused value is an array, even if the optic is ",(0,r.kt)("strong",{parentName:"p"},"already a mapped one"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const onAttractions = onNationalParks.attractions.map();\n// onAttractions: Optic<string, mapped>\n")),(0,r.kt)("p",null,"Here ",(0,r.kt)("inlineCode",{parentName:"p"},"onAttractions")," is a mapped optic focused on every attraction from every national park."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"onAttractions.get(); // ['angels landing', 'great white throne', 'half dome', 'el capitan', 'mariposa grove', 'old faithful', 'grand prismatic']\n\nonAttractions.set(capitalize);\nonAttractions.get(); // ['Angels Landing', 'Great White Throne', 'Half Dome', 'El Capitan', 'Mariposa Grove', 'Old Faithful', 'Grand Prismatic']\n")),(0,r.kt)("p",null,"Calling ",(0,r.kt)("inlineCode",{parentName:"p"},".get()")," returns a flat representation of all attractions, even though in the state they are nested in their respective national parks."),(0,r.kt)("p",null,"Updating them with ",(0,r.kt)("inlineCode",{parentName:"p"},".set()")," preserves the state's original structure.",(0,r.kt)("br",{parentName:"p"}),"\n","We can see that if we look at our state, now that we've applied all these transformations thanks to mapped optics:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// onNationalParks.get();\n[\n  {\n    name: "Zion National Park",\n    visitors: 6_039_835,\n    attractions: ["Angels Landing", "Great White Throne"],\n  },\n  {\n    name: "Yosemite National Park",\n    visitors: 4_287_595,\n    attractions: ["Half Dome", "El Capitan", "Mariposa Grove"],\n  },\n  {\n    name: "Yellowstone National Park",\n    visitors: 5_860_242,\n    attractions: ["Old Faithful", "Grand Prismatic"],\n  },\n];\n')),(0,r.kt)("admonition",{title:"cardinality recap",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"total: 1..1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"partial: 0..1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mapped: 0..n")))),(0,r.kt)("h2",{id:"reduce"},"Reduce"),(0,r.kt)("p",null,"Mapped optics have special methods called ",(0,r.kt)("strong",{parentName:"p"},"reduce")," methods.",(0,r.kt)("br",{parentName:"p"}),"\n","They yield new optics, either mapped or partial, that ",(0,r.kt)("strong",{parentName:"p"},"reduce")," the mapped values to focus on some of them or back to a single one."),(0,r.kt)("p",null,"For example to focus on all attractions sorted by name...:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const onSortedAttractions = onAttractions.reduceSort((a, b) =>\n  a.localeCompare(b)\n);\n// onSortedAttractions: Optic<string, mapped>\n\nonSortedAttractions.get(); // ['Angels Landing', 'El Capitan', 'Grand Prismatic', 'Great White Throne', 'Half Dome', 'Mariposa Grove', 'Old Faithful']\n")),(0,r.kt)("p",null,"... and then to focus on the first three:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const onFirstThree = onSortedAttractions.reduceSlice(0, 3);\n// onFirstThree: Optic<string, mapped>\n\nonFirstThree.get(); // ['Angels Landing', 'El Capitan', 'Grand Prismatic']\nonFirstThree.set((prev) => prev.toUpperCase());\n\nonAttractions.get(); // ['ANGELS LANDING', 'Great White Throne', 'Half Dome', 'EL CAPITAN', 'Old Faithful', 'Mariposa Grove', 'GRAND PRISMATIC']\n")),(0,r.kt)("h3",{id:"back-to-one-or-none"},"Back to one (or none)"),(0,r.kt)("p",null,"The above examples return new mapped optics but some reduce methods can also give us a partial optic by ",(0,r.kt)("strong",{parentName:"p"},"reducing back to a single value"),"."),(0,r.kt)("p",null,"For example to focus on the first attraction starting with the letter G:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const onFirstStartingWithG = onAttractions.reduceFindFirst((attraction) =>\n  attraction.startsWith(\"G\")\n);\n// onFirstStartingWithG: Optic<string, partial>\n\nonFirstStartingWithG.get(); // 'Great White Throne'\n")),(0,r.kt)("p",null,"Or to focus on the attraction with the shortest name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const onShortestName = onAttractions.reduceMin((name) => name.length);\n// onShortestName: Optic<string, partial>\n\nonShortestName.get(); // 'Half Dome'\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We get a ",(0,r.kt)("strong",{parentName:"p"},"partial optic")," instead of a total one because the mapped optic might yield no value at all, in case the arrays we mapped over are empty.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Reduce methods vs Array methods"),(0,r.kt)("p",null,"You might have noticed that the reduce methods look a lot like the methods\navailable to optics focused on arrays (e.g.\n",(0,r.kt)("inlineCode",{parentName:"p"},"reduceFindFirst")," vs ",(0,r.kt)("inlineCode",{parentName:"p"},"findFirst"),").",(0,r.kt)("br",{parentName:"p"}),"\n","The difference is that array methods operate on the array that's currently focused by the optic,\nwhile reduce methods operate on the whole mapping."),(0,r.kt)("p",null,"It means that ..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"onNationalParks.attractions.max((attraction) => attraction.length);\n// Optic<string, mapped>\n\n// ['Great White Throne', 'Mariposa Grove', 'Grand Prismatic']\n")),(0,r.kt)("p",null,"... is different from:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"onNationalParks.attractions.reduceMax((attractions) => attractions.length);\n// Optic<string[], partial>\n\n// ['Half Dome', 'El Capitan', 'Mariposa Grove']\n")),(0,r.kt)("p",null,"With the first example we focus on the attraction with the longest name for each national park,\nwhile with the second example we focus on the attractions of the national park that has the most attractions (Yosemite).")))}u.isMDXComponent=!0}}]);