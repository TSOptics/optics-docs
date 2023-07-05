---
title: .set()
sidebar_position: 17
---

# .set(newValue)

```ts
Optic<A, _, S>.set: (a: A | ((prev: A) => A)) => void;
```

---

This method allows you to update the value focused by the optic.  
It is equivalent to the setter function returned by [`useOptic`](<../React/useOptic()>) but unlike `useOptic` you can use it outside of React components and hooks.

### Example:

```ts
const onStates = createState([
  { name: "virginia", capital: "Richmond", inhabitants: 8_535_519 },
  { name: "Illinois", capital: "Chicago", inhabitants: 12_812_508 },
]);

onStates[1].capital.set("Springfield");

onStates[0].name.set(
  (prev) => prevName.charAt(0).toUpperCase() + prevName.slice(1)
);

// onStates.get() = [
//     { name: 'Virginia', capital: 'Richmond', inhabitants: 8_535_519 },
//     { name: 'Illinois', capital: 'Springfield', inhabitants: 12_812_508 }
// ];
```
