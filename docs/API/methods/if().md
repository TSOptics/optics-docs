---
title: .if()
sidebar_position: 7
---

# .if(predicate): Optic

```ts
Optic<A>.if: (predicate: (a: A) => boolean) => Optic<A, partial>;
```

---

This method takes a predicate and return a new partial optic focused either on the original value or undefined if the predicate returns false.

### Example:

```ts twoslash
import { createState } from "@optics/react";
// ---cut---

const numberOptic = createState(42);

const evenNumberOptic = numberOptic.if((n) => n % 2 === 0);
//    ^?

evenNumberOptic.get(); // 42

evenNumberOptic.set((prev) => prev + 1);

evenNumberOptic.get(); // undefined
numberOptic.get(); // 43
```
