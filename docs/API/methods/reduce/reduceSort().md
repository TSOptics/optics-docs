---
title: .reduceSort()
sidebar_position: 15
---

# .reduceSort(compareFn): Optic

```ts
Optic<A, mapped>.reduceSort: (compareFn?: (a: A, b: A) => number) => Optic<A, mapped>;
```

---

This method returns a new mapped optic focused on the elements of the original mapped optic but sorted according to a comparison function.  
The comparison function works the same way as in [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort): it is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.

### Examples:

- Default sort:

```ts twoslash
import { createState } from "@optics/react";
// ---cut---

const onLänder = createState([
  "Hamburg",
  "Bayern",
  "Sachsen",
  "Brandenburg",
  "Saarland",
]);

const onSortedLänder = onLänder.map().reduceSort();
//    ^?

onSortedLänder.get(); // ['Bayern', 'Brandenburg', 'Hamburg', 'Saarland', 'Sachsen']
```

- Custom comparison function:

```ts twoslash
import { createState } from "@optics/react";
// ---cut---

const onNumbers = createState([90, 76, 456, 2, 39, -15, 1, -65]);

const onSortedNumbers = onNumbers.map().reduceSort((a, b) => a - b);
//    ^?

onSortedNumbers.get(); // [-65, -15, 1, 2, 39, 76, 90, 456]
```
