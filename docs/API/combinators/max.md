---
title: max
---

# max(selector?): PartialLens

```ts
max: <A extends number>() => PartialLens<A, A[]>;
max: <A>(selector?: (a: A) => number) => PartialLens<A, A[]>;
```

---

This combinator, when passed to `derive`, returns an optic focused on the highest number from the focused array.

```ts twoslash
import { createState } from "@optics/react";
// ---cut---
import { max } from "@optics/react/combinators";

const maxOptic = createState([42, 16, 98, 123, 8]).derive(max());

maxOptic.get(); // 123

maxOptic.set(97);

maxOptic.get(); // 98
```

Here `123` is the max element, and when we set it to `97` then the element at index 2 (`98`) becomes the max element.

### Selector

If the elements in the focused array aren't numbers, then you must pass a selector to get a number from each element in the array:

```ts twoslash
import { createState } from "@optics/react";
// ---cut---
import { max } from "@optics/react/combinators";

const usersOptic = createState([
  { name: "Jack", age: 23 },
  { name: "Jeanne", age: 56 },
]);

const oldestUserOptic = usersOptic.derive(max((user) => user.age));

oldestUserOptic.get(); // { name: "Jeanne", age: 56 }

usersOptic[0].age.set(80);

oldestUserOptic.get(); // { name: "Jack", age: 80 }
```
