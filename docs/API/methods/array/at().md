---
title: .at()
sidebar_position: 12
---

# .at(index): Optic

```ts
Optic<A extends any[]>.at: (index: number) => Optic<A[number]>;
```

---

This method returns an optic focused on the element at the provided index in the focused array.
Just like JavaScript's [Array.at](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at) a negative index counts back from the end of the array.

```ts twoslash
import { createState } from "@optics/react";
// ---cut---

const numbersOptic = createState([78, 90, 4, 7, 10, 789, 42, 90]);

const fifthElementOptic = numbersOptic.at(4);
//    ^?
fifthElementOptic.get(); // 10

numbersOptic.at(-2).get(); // 42
```
