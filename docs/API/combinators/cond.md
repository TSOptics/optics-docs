---
title: cond
sidebar_position: 1
---

# cond(predicate): PartialLens

```ts
cond: <A>(predicate: (a: A) => boolean) => PartialLens<A, A>;
```

---

This combinators takes a predicate and, when passed to `derive`, returns a new partial optic focused either on the original value or undefined if the predicate returns false.

### Example:

```ts twoslash
import { createState } from "@optics/react";
// ---cut---
import { cond } from "@optics/react/combinators";

const numberOptic = createState(42);

const evenNumberOptic = numberOptic.derive(cond((n) => n % 2 === 0));
//    ^?

evenNumberOptic.get(); // 42

evenNumberOptic.set((prev) => prev + 1);

evenNumberOptic.get(); // undefined
numberOptic.get(); // 43
```
