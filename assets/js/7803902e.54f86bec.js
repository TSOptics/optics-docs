"use strict";(self.webpackChunkreact_optics_docs=self.webpackChunkreact_optics_docs||[]).push([[614],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8273:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={title:"Core Concepts",sidebar_position:3},p="Core Concepts",l={unversionedId:"Introduction/core-concepts",id:"Introduction/core-concepts",title:"Core Concepts",description:"Optics",source:"@site/docs/Introduction/core-concepts.mdx",sourceDirName:"Introduction",slug:"/Introduction/core-concepts",permalink:"/react-optics-docs/docs/Introduction/core-concepts",draft:!1,editUrl:"https://github.com/TSOptics/react-optics-docs/edit/master/docs/Introduction/core-concepts.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Core Concepts",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/react-optics-docs/docs/Introduction/getting-started"}},c={},m=[{value:"Optics",id:"optics",level:2},{value:"UI and state: connecting trees",id:"ui-and-state-connecting-trees",level:2},{value:"When UI mirrors the state",id:"when-ui-mirrors-the-state",level:3},{value:"When UI diverges from the state",id:"when-ui-diverges-from-the-state",level:3},{value:"Testability and reusability",id:"testability-and-reusability",level:3}],d={toc:m};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"core-concepts"},"Core Concepts"),(0,r.kt)("h2",{id:"optics"},"Optics"),(0,r.kt)("p",null,"An optic is a composable pair of getter and setter to access and ",(0,r.kt)("strong",{parentName:"p"},"transform immutable data"),"."),(0,r.kt)("p",null,"Consider the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const planets = {\n    earth: {\n        Europe: {\n            France: {\n                Paris: {\n                    arrondissements: [\n                        { inhabitants: 17_100 },\n                        { inhabitants: 22_390 },\n                        { inhabitants: 35_991 },\n                        { inhabitants: 27_769 },\n                        { inhabitants: 60_179 }\n                    ]\n                }\n            }\n        }\n    }\n};\n")),(0,r.kt)("p",null,"Increasing by one the number of inhabitant of the third arrondissement of Paris is trivial in a mutable context:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"planets.earth.Europe.France.Paris.arrondissements[2].inhabitants += 1;\n")),(0,r.kt)("p",null,"However in React we need to make an ",(0,r.kt)("strong",{parentName:"p"},"immutable update")," and create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"planets")," object, otherwise React will not trigger a rerender since the reference didn't change."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const updatedPlanets = {\n    ...planets,\n    earth: {\n        ...planets.earth,\n        Europe: {\n            ...planets.earth.Europe,\n            France: {\n                ...planets.earth.Europe.France,\n                Paris: {\n                    ...planets.earth.Europe.France.Paris,\n                    arrondissements:\n                        // highlight-start\n                        planets.earth.Europe.France.Paris.arrondissements.map(\n                            // highlight-end\n                            (arrondissement, index) => {\n                                // highlight-next-line\n                                return index === 2\n                                    ? {\n                                          ...arrondissement,\n                                          // highlight-start\n                                          inhabitants:\n                                              arrondissement.inhabitants + 1\n                                          // highlight-end\n                                      }\n                                    : arrondissement;\n                            }\n                        )\n                }\n            }\n        }\n    }\n};\n")),(0,r.kt)("p",null,"Here the highlighted lines is the information, the rest is just noise.",(0,r.kt)("br",{parentName:"p"}),"\n","Such code is extremely verbose and error prone and it only gets worse the deeper we go.",(0,r.kt)("br",{parentName:"p"}),"\n","With an optic it becomes trivial again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// planetStore.ts\nimport { createStore, useOptic } from 'react-optics';\n\nconst onPlanets = createStore(planets);\n\nconst on3rdArrInhabitants = onPlanets\n    .focus('earth.Europe.France.Paris.arrondissements')\n    .focus(2)\n    .focus('inhabitants');\n\n// Paris3rd.tsx\nconst [inhabitants, setInhabitants] = useOptic(on3rdArrInhabitants);\n\nsetInhabitants((prev) => prev + 1);\n")),(0,r.kt)("p",null,"Optics have some other useful properties.",(0,r.kt)("br",{parentName:"p"}),"\n","They are ..."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h3",{parentName:"li",id:"type-safe"},"Type-safe:"),(0,r.kt)("p",{parentName:"li"},"You can only pass a valid path to ",(0,r.kt)("inlineCode",{parentName:"p"},"focus")," or you'll get a compile error.",(0,r.kt)("br",{parentName:"p"}),"\n","Your editor's code completion will show you all possible paths.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h3",{parentName:"li",id:"null-safe"},"Null-safe:"),(0,r.kt)("p",{parentName:"li"},"If an element is possibly null or undefined then the ",(0,r.kt)("strong",{parentName:"p"},"optional chaining operator")," (",(0,r.kt)("inlineCode",{parentName:"p"},"?."),") will be used."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{6,12,16}","{6,12,16}":!0},'// store.ts\ntype User = {\n  name: string;\n  age: number;\n  contact?: {\n      phone: number;\n  };\n};\n\nconst onUser = createStore<User>({ name: "Vincent", age: 28, contact: { phone: "999-999-999" } });\n\nconst onPhone = onUser.focus("contact?.phone");\n\n// Dialer.tsx\n...\nconst [phoneNumber] = useOptic(onPhone);\n...\n')),(0,r.kt)("p",{parentName:"li"},"Here the type of phoneNumber is ",(0,r.kt)("inlineCode",{parentName:"p"},"number | undefined"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h3",{parentName:"li",id:"composable"},"Composable:"),(0,r.kt)("p",{parentName:"li"},"If you have an optic from ",(0,r.kt)("strong",{parentName:"p"},"A to B")," and another one from ",(0,r.kt)("strong",{parentName:"p"},"B to C")," you can compose them to create a new optic from ",(0,r.kt)("strong",{parentName:"p"},"A to C"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const initialPlayerState = {\n    id: 1,\n    hp: 20,\n    inventory: {\n        primaryWeapon: {\n            durability: 10,\n            damageTo: {\n                monsters: 3,\n                humans: 5,\n                spirits: 0\n            }\n        }\n    }\n};\n\nconst onPlayers = createStore({\n    playerA: { ...initialPlayerState, id: 1 },\n    playerB: { ...initialPlayerState, id: 2 }\n});\n\nconst onPayerA = onPlayers.focus('playerA');\nconst onPayerB = onPlayers.focus('playerB');\n\n// Headless optic\nconst onDamageToMonsters = optic<typeof initialPlayerState>().focus(\n    'inventory.primaryWeapon.damageTo.monsters'\n);\n\n// focuses on the damage to monsters from playerA's primary\nonPlayerA.compose(onDamageToMonsters);\n\n// focuses on the damage to monsters from playerB's primary\nonPlayerB.compose(onDamageToMonsters);\n")),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Headless optic")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A headless optic doesn't originate from ",(0,r.kt)("inlineCode",{parentName:"p"},"createStore")," but is instead created with ",(0,r.kt)("inlineCode",{parentName:"p"},"optic()"),".",(0,r.kt)("br",{parentName:"p"}),"\n","They are useful when composed with stateful optics as shown above."))))),(0,r.kt)("h2",{id:"ui-and-state-connecting-trees"},"UI and state: connecting trees"),(0,r.kt)("h3",{id:"when-ui-mirrors-the-state"},"When UI mirrors the state"),(0,r.kt)("p",null,"Often times in React the structure of our UI will mirror the structure of our state.",(0,r.kt)("br",{parentName:"p"}),"\n","To illustrate this let's create a simple game menu.",(0,r.kt)("br",{parentName:"p"}),"\n","Our game state consists of two players each with its own inventory containing two weapons with their own stats:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const gameState = {\n    playerList: [\n        {\n            id: 1,\n            name: 'playerA',\n            hp: 20,\n            inventory: [\n                {\n                    id: 1,\n                    name: 'rusty sword',\n                    durability: 3,\n                    damageTo: { monsters: 4, humans: 3, spirits: 0 }\n                },\n                {\n                    id: 2,\n                    name: 'silver dagger',\n                    durability: 7,\n                    damageTo: { monsters: 8, humans: 2, spirits: 0 }\n                }\n            ]\n        },\n        {\n            id: 2,\n            name: 'playerB',\n            hp: 17,\n            inventory: [\n                {\n                    id: 3,\n                    name: 'magical staff',\n                    durability: 10,\n                    damageTo: { monsters: 2, humans: 1, spirits: 10 }\n                },\n                {\n                    id: 4,\n                    name: 'wooden stick',\n                    durability: 2,\n                    damageTo: { monsters: 1, humans: 1, spirits: 0 }\n                }\n            ]\n        }\n    ]\n};\n")),(0,r.kt)("p",null,"Our React components would look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const Game = () => {\n    return gameState.playerList.map((player) => <Player player={player} />);\n};\n\nconst Player = ({ player }) => {\n    return player.inventory.map((weapon) => <Weapon weapon={weapon} />);\n};\n\nconst Weapon = ({ weapon }) => {\n    return (\n        <div>\n            <div>name: {weapon.name}</div>\n            <div>durability: {weapon.durability}</div>\n            <WeaponDamage stats={weapon.damageTo} />\n        </div>\n    );\n};\n\nconst WeaponStats = ({ damageTo }) => {};\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Game")," component calls ",(0,r.kt)("inlineCode",{parentName:"p"},"Player")," components which call ",(0,r.kt)("inlineCode",{parentName:"p"},"Weapon")," components wich in turn call a ",(0,r.kt)("inlineCode",{parentName:"p"},"WeaponDamage")," component.",(0,r.kt)("br",{parentName:"p"}),"\n","The structure is the same as in our state where the ",(0,r.kt)("strong",{parentName:"p"},"game")," has ",(0,r.kt)("strong",{parentName:"p"},"players")," which have ",(0,r.kt)("strong",{parentName:"p"},"weapons")," which in turn have ",(0,r.kt)("strong",{parentName:"p"},"damage stats"),".\nSince both UI and state are represented as tree data structure in React here we can say the UI tree matches the state tree, it branches at the same place and has leaves at the same place."),(0,r.kt)("p",null,"In this configuration, using optics to allow our components to modify their slice of game state is trivial.",(0,r.kt)("br",{parentName:"p"}),"\n","Just pass an ",(0,r.kt)("strong",{parentName:"p"},"optic focusing on the slice")," to your component, instead of passing the slice itself !"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const onGameState = createStore(gameState);\nconst onPlayerList = onGameState.focus('playerList');\n\nconst Game = () => {\n    const [playerList, setPLayerList] = useOptic(onPlayerList);\n\n    return playerList.map((_, index) => (\n        <Player onPlayer={onPlayerList.focus(index)} />\n    ));\n};\n\nconst Player = ({ onPlayer }) => {\n    const [player, setPlayer] = useOptic(onPlayer);\n\n    return player.inventory.map((_, index) => (\n        <Weapon onWeapon={onPlayer.focus('inventory').focus(index)} />\n    ));\n};\n\nconst Weapon = ({ onWeapon }) => {\n    const [weapon, setWeapon] = useOptic(onWeapon);\n\n    return (\n        <div>\n            <div>name: {weapon.name}</div>\n            <div>durability: {weapon.durability}</div>\n            <WeaponDamage onDamageTo={onWeapon.focus('damageTo')} />\n        </div>\n    );\n};\n\nconst WeaponStats = ({ onDamageTo }) => {\n    const [damageTo, setDamageTo] = useOptic(onDamageTo);\n};\n")),(0,r.kt)("p",null,"Now at each level we have a setter allowing the component to modify its piece of the game state.",(0,r.kt)("br",{parentName:"p"}),"\n","We did this while keeping the ",(0,r.kt)("strong",{parentName:"p"},"data flow")," the same, it's just that instead of passing a narrower piece of state we pass ",(0,r.kt)("strong",{parentName:"p"},"an optic focusing on")," a narrower piece of state."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"performance")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When creating optics in components it's always a good idea to wrap them in ",(0,r.kt)("inlineCode",{parentName:"p"},"useMemo"),".",(0,r.kt)("br",{parentName:"p"}),"\n","See more in the performance section."))),(0,r.kt)("h3",{id:"when-ui-diverges-from-the-state"},"When UI diverges from the state"),(0,r.kt)("p",null,"Now that we saw that optics are ideal to connect your UI tree to your state tree when they are similar, what about when they are dissimilar ?",(0,r.kt)("br",{parentName:"p"}),"\n","For example what if we want to display at the top of our UI the weapon with the lowest durability in the whole game ?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{6}","{6}":!0},"const Game = () => {\n    const [playerList, setPLayerList] = useOptic(onPlayerList);\n\n    return (\n        <>\n            <AboutToBreak />\n            {playerList.map((_, index) => (\n                <Player onPlayer={onPlayerList.focus(index)} />\n            ))}\n        </>\n    );\n};\n")),(0,r.kt)("p",null,"Here we have a case of discrepancy between our trees: The UI has a component (",(0,r.kt)("inlineCode",{parentName:"p"},"AboutToBreak"),") at the ",(0,r.kt)("strong",{parentName:"p"},"top")," of the tree that depends on data at the ",(0,r.kt)("strong",{parentName:"p"},"bottom")," of the state tree (weapons in the inventories).",(0,r.kt)("br",{parentName:"p"}),"\n","We can bridge the gap with optics:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const onLowestDurability = onPlayerList\n    .map()\n    .focus('inventory')\n    .map()\n    .minBy((weapon) => weapon.durability)\n    .toTotal();\n\nconst AboutToBreak = () => {\n    return (\n        <>\n            Most damaged weapon:\n            <Weapon onWeapon={onLowestDurability} />\n        </>\n    );\n};\n")),(0,r.kt)("p",null,"Here the ",(0,r.kt)("inlineCode",{parentName:"p"},"onLowestDurability")," optic first focuses on all players (first call to ",(0,r.kt)("inlineCode",{parentName:"p"},"map"),") then on their inventory then on all their weapons (second call to ",(0,r.kt)("inlineCode",{parentName:"p"},"map"),") then finally focuses on the weapon with the lowest durability with ",(0,r.kt)("inlineCode",{parentName:"p"},"minBy"),".",(0,r.kt)("br",{parentName:"p"}),"\n","The combination of the ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," method with other methods like ",(0,r.kt)("inlineCode",{parentName:"p"},"minBy")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"findFirst")," allows us to focus on very specific elements like the most damaged weapon, or the first weapon that deals more than 10 damage to humans or again the player with the most HPs."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The final call to ",(0,r.kt)("inlineCode",{parentName:"p"},"toTotal")," is to tell the type system: yes I'm aware that both inventories are arrays that can theoretically be empty but here I know that they are not so I know that my optic will not return undefined."))),(0,r.kt)("p",null,"It's the ability to express such optics that allows us to connect our UI tree to our state tree and plug the gap between them where they diverge."),(0,r.kt)("p",null,"You can learn more about ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," and methods like ",(0,r.kt)("inlineCode",{parentName:"p"},"minBy")," in the ",(0,r.kt)("strong",{parentName:"p"},"map reduce")," section."),(0,r.kt)("h3",{id:"testability-and-reusability"},"Testability and reusability"),(0,r.kt)("p",null,"The other observation we can make is that we have an optic on weapon but ",(0,r.kt)("inlineCode",{parentName:"p"},"Weapon")," also expects an optic on weapon so we're able to reuse the component !",(0,r.kt)("br",{parentName:"p"}),"\n","We have broken the ",(0,r.kt)("strong",{parentName:"p"},"hard dependency between components and global state"),": here the component only cares that it gets an optic on a weapon, it doesn't care which weapon and nor where does it come from."),(0,r.kt)("p",null,"It makes components that depends on the global state ",(0,r.kt)("strong",{parentName:"p"},"more composable and reusable")," but it also makes them ",(0,r.kt)("strong",{parentName:"p"},"more testable"),". We just have to create a store with our mock data and pass the resulting optic to the component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const onMockWeapon = createStore(mockWeapon);\n...\n<Weapon onWeapon={onMockWeapon} />;\n")),(0,r.kt)("p",null,"You can learn more in the ",(0,r.kt)("strong",{parentName:"p"},"testing")," section."))}u.isMDXComponent=!0}}]);