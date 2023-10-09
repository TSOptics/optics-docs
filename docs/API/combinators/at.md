---
title: at
sidebar_position: 12
---

# at(index): Lens

```ts
at: <A>(index: number) => Lens<A, A[]>;
```

---

This combinator takes an index and, when passed to `derive`, returns an optic focused on the element at the index in the focused array.  
Just like JavaScript's [Array.at](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at), a negative index counts back from the end of the array.

```ts twoslash
import { createState } from "@optics/react";
// ---cut---
import { at } from "@optics/react/combinators";

const numbersOptic = createState([78, 90, 4, 7, 10, 789, 42, 90]);

const fifthElementOptic = numbersOptic.derive(at(4));
//    ^?
fifthElementOptic.get(); // 10

numbersOptic.derive(at(-2)).get(); // 42
```
