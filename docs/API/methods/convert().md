---
title: .convert()
sidebar_position: 4
---

# .convert(to, from): Optic

```ts
Optic<A>.convert: <B>(to: (a: A) => B, from: (b: B) => A) => Optic<B>;
```

---

This method takes a `to` function that converts the focused value to another value, and a `from` that does the reverse conversion.  
It returns an optic focused on the converted representation of the initial state.

### Example:

```ts twoslash
import { createState } from "@optics/react";
// ---cut---

const onMilliseconds = createState(78450000);

const onMinutes = onMilliseconds.convert(
  (ms) => ms / 60000,
  (minutes) => minutes * 60000
);
```

Here our `onMinutes` optic allows us to read and manipulate our time measurement in minutes even though it is represented in milliseconds in our store.

```ts twoslash
import { Optic } from "@optics/react";
declare const onMilliseconds: Optic<number>;
declare const onMinutes: Optic<number>;
// ---cut---

onMinutes.get(); // 1307.5

onMinutes.set((prev) => prev + 120); // 1427.5

// from the root optic
onMilliseconds.get(); // 85650000
```

The type of the conversion can be different from the original type:

```ts twoslash
import { createState } from "@optics/react";
// ---cut---
const onObject = createState({ firstName: "Aaron", lastName: "Schwartz" });

const onTuple = onObject.convert(
  ({ firstName, lastName }) => [firstName, lastName] as const,
  ([firstName, lastName]) => ({ firstName, lastName })
);
```

:::info
The conversion should be lossless, it means that this laws must be respected:

- `from(to(a)) = a`
- `to(from(b)) = b`

:::
