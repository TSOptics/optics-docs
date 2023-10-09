---
title: entries
sidebar_position: 9
---

# entries(): Lens

```ts
entries: <A>() => TotalLens<[string, A][], Record<string, A>>;
```

---

This combinator, when passed to `derive`, returns an optic focused on the entries of the focused record.
It is useful to map over a record, allowing you to change both keys and values.

### Example:

```ts twoslash
import { createState } from "@optics/react";
// ---cut---
import { entries } from "@optics/react/combinators";

const olympicCitiesOptic = createState<Record<string, number>>({
  paris: 2,
  london: 3,
  losAngeles: 2,
  tokyo: 2,
});

const entriesOptic = olympicCitiesOptic.derive(entries());
//    ^?

entriesOptic.get(); // [["paris", 2], ["london", 3], ["losAngeles", 2], ["tokyo", 2]];

entriesOptic
  .map()
  .set(([city, olympiads]) => [
    city.toUpperCase(),
    ["paris", "losAngeles"].includes(city) ? olympiads + 1 : olympiads,
  ]);

olympicCitiesOptic.get(); // { PARIS: 3, LONDON: 3, LOSANGELES: 3, TOKYO: 2 };
```
