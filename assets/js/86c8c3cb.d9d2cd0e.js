"use strict";(self.webpackChunkreact_optics_docs=self.webpackChunkreact_optics_docs||[]).push([[3911],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,u(u({ref:t},c),{},{components:n})):r.createElement(m,u({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,u[1]=l;for(var s=2;s<o;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function u(e){let{children:t,hidden:n,className:u}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,u),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(7462),a=n(7294),o=n(6010),u=n(2466),l=n(6550),i=n(1980),s=n(7392),c=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[u,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,s]=m({queryString:n,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=i??p;return f({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:u,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),b(e)}),[s,b,o]),tabValues:o}}var h=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,u.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==l&&(p(t),i(r))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:u}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:d},u,{className:(0,o.Z)("tabs__item",y.tabItem,u?.className,{"tabs__item--active":l===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(g,(0,r.Z)({},e,t)))}function k(e){const t=(0,h.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},2051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));n(4866),n(5162);const o={title:".refine()",sidebar_position:6},u=".refine(refiner): Optic",l={unversionedId:"API/methods/refine()",id:"API/methods/refine()",title:".refine()",description:"---",source:"@site/docs/API/methods/refine().mdx",sourceDirName:"API/methods",slug:"/API/methods/refine()",permalink:"/docs/API/methods/refine()",draft:!1,editUrl:"https://github.com/TSOptics/react-optics-docs/edit/master/docs/API/methods/refine().mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:".refine()",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:".compose()",permalink:"/docs/API/methods/compose()"},next:{title:".if()",permalink:"/docs/API/methods/if()"}},i={},s=[{value:"Examples:",id:"examples",level:2},{value:"- On the branch of a discriminated union",id:"--on-the-branch-of-a-discriminated-union",level:3},{value:"- On a javascript built-in type",id:"--on-a-javascript-built-in-type",level:3},{value:"- On a custom type with a type guard",id:"--on-a-custom-type-with-a-type-guard",level:3}],c={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"refinerefiner-optic"},".refine(refiner): Optic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"Optic<A>.refine = <B>(refiner: (a: A) => B | false) => Optic<B, partial | mapped>;\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"This method allows you to ",(0,a.kt)("em",{parentName:"p"},"narrow")," the type focused by the original optic.",(0,a.kt)("br",{parentName:"p"}),"\n","It returns a new partial optic focused on the original value in its narrowed type or undefined if the narrowing failed."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"refiner")," function must return the original value in its narrowed type or ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," if it can't be narrowed to this type."),(0,a.kt)("h2",{id:"examples"},"Examples:"),(0,a.kt)("h3",{id:"--on-the-branch-of-a-discriminated-union"},"- On the branch of a discriminated union"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'type Result<T> =\n  | { type: "success"; value: T }\n  | { type: "failure"; errorMessage: string };\n\nconst onResult = createState<Result<number>>({ type: "success", value: 42 });\n\nconst [, setResult] = useOptic(onResult);\n\n// highlight-start\nconst onSuccess = onResult.refine(\n  (result) => result.type === "success" && result\n);\n// onSuccess: Optic<{ type: \'success\'; value: number }, partial>\n// highlight-end\n\nconst [success] = useOptic(onSuccess);\n// success === { type: \'success\', value: 42 }\n\nsetResult({ type: "failure", errorMessage: "Catastrophic meltdown" });\n// success === undefined\n')),(0,a.kt)("h3",{id:"--on-a-javascript-built-in-type"},"- On a javascript built-in type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const onUnknownValue = createState<unknown>();\n\nconst onNumber = onUnknownValue.refine(\n  (unknownValue) => typeof unknownValue === "number" && unknownValue\n);\n// onNumber: Optic<number, partial>\n')),(0,a.kt)("h3",{id:"--on-a-custom-type-with-a-type-guard"},"- On a custom type with a type guard"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function isMyType(value: any): value is MyType;\n\nconst onMyType = onState.refine((value) => isMyType(value) && value);\n// onMyType: Optic<MyType, partial>\n")))}d.isMDXComponent=!0}}]);