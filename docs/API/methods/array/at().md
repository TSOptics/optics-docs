---
title: .at()
sidebar_position: 12
---

# .at(index): Optic

```ts
Optic<T[]>.at: (index: number) => Optic<T>;
```

---

This method returns an optic focused on the element at the provided index in the focused array.

```ts
const onNumberArrays = createState([
  [78, 90, 4, 7],
  [10, 7],
  [9],
  [789, 42, 90],
]);

const onNumbers = onNumberArrays.map().map();
// onNumbers: Optic<number, mapped>
// onNumbers.get() = [78, 90, 4, 7, 10, 7, 9, 789, 42, 90]

const on5th = onNumbers.at(4);
// on5th: Optic<number, partial>;
// on5th.get() = 10
```
