---
title: find
sidebar_position: 11
---

# .find(predicate): Optic

```ts
find: <A>(predicate: (a: A) => boolean) => PartialLens<A, A[]>;
```

---

This combinator takes a predicate and, when passed to `derive`, returns an optic focused on the first element in the focused array that matches the predicate.

```ts twoslash
import { createState } from "@optics/react";
// ---cut---
import { find } from "@optics/react/combinators";

const numbersOptic = createState([42, 16, 98, 123, 8, 245]);

const greaterThan100Optic = numbersOptic.derive(find((n) => n > 100));
//    ^?

greaterThan100Optic.get(); // 123

greaterThan100Optic.set(99);

greaterThan100Optic.get(); // 245
```
