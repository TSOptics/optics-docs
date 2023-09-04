---
title: .findFirst()
sidebar_position: 11
---

# .findFirst(predicate): Optic

```ts
Optic<A extends any[]>.findFirst: (predicate: (a: A) => boolean) => Optic<A, partial>;
```

---

Analogous to [Array.find](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/find), this method is available to optics focusing on an array and it returns a new partial optic focused on the first value satisfying the predicate.

```ts twoslash
import { createState } from "@optics/react";
// ---cut---

const numbersOptic = createState([42, 16, 98, 123, 8, 245]);

const greaterThan100Optic = numbersOptic.findFirst((n) => n > 100);
//    ^?

greaterThan100Optic.get(); // 123

greaterThan100Optic.set(99);

greaterThan100Optic.get(); // 245
```
