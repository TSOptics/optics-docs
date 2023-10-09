---
title: toPartial
---

# toPartial(): PartialLens

```ts
toPartial: <A>() => PartialLens<NonNullable<A>, A>;
```

---

This combinator, when passed to composed with an optic focused on a nullable type, returns a new partial optic focused on the non-nullable type.

```ts twoslash
import { createState } from "@optics/react";
// ---cut---
import { toPartial } from "@optics/react/combinators";

const numberOptic = createState<number | null>(42);

const partialNumberOptic = numberOptic.derive(toPartial());
//    ^?
```
