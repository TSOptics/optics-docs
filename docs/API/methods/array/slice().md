---
title: .slice()
sidebar_position: 14
---

# .slice(start?, end?): Optic

```ts
Optic<A extends any[]>.slice: (start?: number, end?: number) => Optic<A>;
```

---

Analogous to [Array.slice](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), this method returns an optic focused on a slice of the original optic's array.  
If `start` isn't specified the slice will begin at index 0, if `end` isn't specified the slice won't stop until the end of the array.

### Example:

```ts twoslash
import { createState } from "@optics/react";
// ---cut---

const onAegeanIslands = createState([
  "Crete",
  "Lesbos",
  "Mykonos",
  "Santorini",
  "Rhodos",
  "Kalokairi",
]);

const onRealAgeanIslands = onAegeanIslands.slice(0, 5);
//    ^?

onRealAgeanIslands.get(); // ['Crete', 'Lesbos', 'Mykonos', 'Santorini', 'Rhodos']
```
