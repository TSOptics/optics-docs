---
title: .map()
sidebar_position: 8
---

# .map(): Optic

```ts
Optic<A extends any[]>.map: () => Optic<A[number], mapped>;
```

---

This method returns a new [mapped optic](../../../Guides/map_reduce) from an optic focused on an array.

### Example:

```ts twoslash
import { createState } from "@optics/react";
// ---cut---

const numbersOptic = createState([1, 2, 3, 4, 5]);

const numbersMappedOptic = numbersOptic.map();
//    ^?

numbersMappedOptic.set((prev) => prev * 2);

numbersMappedOptic.get(); // [2, 4, 6, 8, 10]
```
