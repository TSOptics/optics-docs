---
title: .reduce()
---

# .reduce(reducer): Optic

```ts
Optic<T, mapped>.reduce(reducer: (values: ReduceValue<T>[]) => ReduceValue<T>[]): Optic<T, mapped>;
Optic<T, mapped>.reduce(reducer: (values: ReduceValue<T>[]) => ReduceValue<T> | undefined): Optic<T, partial>;
```

---

The `reduce` method is available on `mapped` optics and lets you derive a new optic focused on one of the values of the mapped optic, or several of them.

It effectively lets you sort, filter, or slice the values you mapped over and get an optic focused on the result.

More informations here: [Map/Reduce](../../../Guides/map_reduce#reduce)

### Example:

```tsx twoslash
import { createState } from "@optics/react";

const todosOptic = createState([
  { name: "Handle promises", done: false },
  { name: "Fix type error", done: true },
  { name: "Finish docs", done: false },
  { name: "Add tests", done: true },
]);

// focused on every ongoing todo
const ongoingTodosOptic = todosOptic
  .map()
  .reduce((todos) => todos.filter((todo) => !todo.value.done));

ongoingTodosOptic.get();
// [{ name: "Handle promises", done: false }, { name: "Finish docs", done: false }]

// sort by done status, then by name
const sortedTodosOptic = todosOptic.map().reduce((todos) =>
  [...todos].sort((a, b) => {
    const boolOrder = Number(a.value.done) - Number(b.value.done);
    return boolOrder === 0
      ? a.value.name.localeCompare(b.value.name)
      : boolOrder;
  })
);

sortedTodosOptic.get();
// [
//   { name: "Handle promises", done: false },
//   { name: "Finish docs", done: false },
//   { name: "Add tests", done: true },
//   { name: "Fix type error", done: true },
// ]

ongoingTodosOptic.name.set((prev) => prev.toUpperCase());

sortedTodosOptic.get();
// [
//   { name: "FINISH DOCS", done: false },
//   { name: "HANDLE PROMISES", done: false },
//   { name: "Add tests", done: true }
//   { name: "Fix type error", done: true },
// ]
```

You can also focus back on a single value, which will yield a partial optic.

```tsx twoslash
import { createState } from "@optics/react";

const todosOptic = createState([
  { name: "Handle promises", done: false },
  { name: "Fix type error", done: true },
  { name: "Finish docs", done: false },
  { name: "Add tests", done: true },
]);

// ---cut---
const firstDoneTodoOptic = todosOptic
  .map()
  .reduce((todos) => todos.find((todo) => todo.value.done));

firstDoneTodoOptic.get();
// { name: "Fix type error", done: true }
```
