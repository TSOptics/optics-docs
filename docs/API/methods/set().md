---
title: .set()
sidebar_position: 17
---

# .set(newValue)

```ts
Optic<A>.set: (a: A | ((prev: A) => A)) => void;
```

---

This method allows you to update the value focused by the optic.  
You either pass it a value to replace the previous one, or an **updater function** that takes the previous value as argument and returns the next value.

### Example:

```ts twoslash
import { createState } from "@optics/react";
// ---cut---

const onStates = createState([
  { name: "Virginia", capital: "Richmond", inhabitants: 8_535_519 },
  { name: "Illinois", capital: "Chicago", inhabitants: 12_812_508 },
]);

onStates[1].capital.set("Springfield");

onStates[0].name.set((prev) => prev.toUpperCase());

onStates.get();
// [
//   { name: 'VIRGINIA', capital: 'Richmond', inhabitants: 8_535_519 },
//   { name: 'Illinois', capital: 'Springfield', inhabitants: 12_812_508 }
// ];
```
