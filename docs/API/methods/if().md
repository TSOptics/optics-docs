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

const onNumber = createState(42);

const onEvenNumber = onNumber.if((n) => n % 2 === 0);
//    ^?

onEvenNumber.get(); // 42

onEvenNumber.set((prev) => prev + 1);

onEvenNumber.get(); // undefined
onNumber.get(); // 43
```
