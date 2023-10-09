---
title: min
---

# min(selector?): PartialLens

```ts
min: <A extends number>() => PartialLens<A, A[]>;
min: <A>(selector?: (a: A) => number) => PartialLens<A, A[]>;
```

---

This combinator, when passed to `derive`, returns an optic focused on the lowest number from the focused array.

```ts twoslash
import { createState } from "@optics/react";
// ---cut---
import { min } from "@optics/react/combinators";

const minOptic = createState([42, 16, 98, 123, 8]).derive(min());

minOptic.get(); // 8

minOptic.set(20);

minOptic.get(); // 16
```

Here `8` is the min element, and when we set it to `20` then the element at index 1 (`16`) becomes the min element.

### Selector

If the elements in the focused array aren't numbers, then you must provide a selector to get a number from each element in the array:

```ts twoslash
import { createState } from "@optics/react";
// ---cut---
import { min } from "@optics/react/combinators";

const usersOptic = createState([
  { name: "Jack", age: 23 },
  { name: "Jeanne", age: 56 },
]);

const youngestUserOptic = usersOptic.derive(min((user) => user.age));

youngestUserOptic.get(); // { name: "Jack", age: 23 }

usersOptic[1].age.set(18);

youngestUserOptic.get(); // { name: "Jeanne", age: 18 }
```
