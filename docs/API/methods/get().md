---
title: .get()
sidebar_position: 16
---

# .get(): FocusedValue

```ts
Optic<A, total>.get: () => A;
Optic<A, partial>.get: () => A | undefined;
Optic<A, mapped>.get: () => A[];
```

---

This method returns the value focused by the optic.

### Example:

```ts twoslash
import { createState } from "@optics/react";
// ---cut---

const onStates = createState([
  { name: "Virginia", capital: "Richmond", inhabitants: 8_535_519 },
  { name: "Illinois", capital: "Springfield", inhabitants: 12_812_508 },
]);

onStates[1].capital.get(); // 'Springfield'

onStates[0].name.get(); // 'Virginia'

onStates.map().inhabitants.get(); // [8_535_519, 12_812_508]
```
