---
title: slice
sidebar_position: 14
---

# slice(start?, end?): Lens

```ts
slice: <A>(start?: number, end?: number) => Lens<A[], A[]>;
```

---

This combinator takes a `start` and an `end` number to define the bounds and, when passed to `derive`, returns an optic focused on a slice of the focused array from `start` to `end`.  
Just like JavaScript's Array.slice, if `start` isn't specified the slice will begin at index 0 and if `end` isn't specified the slice won't stop until the end of the array.

### Example:

```ts twoslash
import { createState } from "@optics/react";
// ---cut---
import { slice } from "@optics/react/combinators";

const aegeanIslandsOptic = createState([
  "Crete",
  "Lesbos",
  "Mykonos",
  "Santorini",
  "Rhodos",
  "Kalokairi",
]);

const realAegeanIslandsOptic = aegeanIslandsOptic.derive(slice(0, 5));
//    ^?

realAegeanIslandsOptic.get(); // ['Crete', 'Lesbos', 'Mykonos', 'Santorini', 'Rhodos']
```
