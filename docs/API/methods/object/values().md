---
title: .values()
sidebar_position: 10
---

# .values(): Optic

```ts
Optic<A extends Record<string, infer Value>>.values: () => Optic<Value[]>;
```

---

Analogous to [Object.values](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/values), this method returns an optic focused on the object's values.

### Example:

```ts twoslash
import { createState } from "@optics/react";
// ---cut---

const capitalsOptic = createState<Record<string, string>>({
  France: "paris",
  Italy: "roma",
  Australia: "canberra",
});

const valuesOptic = capitalsOptic.values();
//    ^?

valuesOptic.get(); // ['paris', 'roma', 'canberra'];

valuesOptic.map().set((prev) => prev[0].toUpperCase() + prev.slice(1));

capitalsOptic.get(); // { France: "Paris", Italy: "Roma", Australia: "Canberra" }
```
