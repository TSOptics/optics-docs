---
title: values
sidebar_position: 10
---

# values(): Lens

```ts
values: <A>() => Lens<A[], Record<string, A>>;
```

---

This combinator, when passed to `derive`, returns an optic focused on the values of the focused record.
It is useful to map over a the values of a record.

### Example:

```ts twoslash
import { createState } from "@optics/react";
// ---cut---
import { values } from "@optics/react/combinators";

const capitalsOptic = createState<Record<string, string>>({
  France: "paris",
  Italy: "roma",
  Australia: "canberra",
});

const valuesOptic = capitalsOptic.derive(values());
//    ^?

valuesOptic.get(); // ['paris', 'roma', 'canberra'];

valuesOptic.map().set((prev) => prev[0].toUpperCase() + prev.slice(1));

capitalsOptic.get(); // { France: "Paris", Italy: "Roma", Australia: "Canberra" }
```
