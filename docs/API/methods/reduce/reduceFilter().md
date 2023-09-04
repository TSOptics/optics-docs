---
title: .reduceFilter()
sidebar_position: 13
---

# .reduceFilter(predicate): Optic

```ts
Optic<A, mapped>.reduceFilter: (predicate: (a: A) => boolean) => Optic<A, mapped>;
```

Analogous to [Array.filter](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), this method returns a mapped optic focused on the elements of the original mapped optic that satisfy the predicate.

### Example:

```ts twoslash
import { createState } from "@optics/react";
// ---cut---

const countriesOptic = createState([
  { name: "Spain", continent: "Europe" },
  { name: "Sénégal", continent: "Africa" },
  { name: "Columbia", continent: "South America" },
  { name: "Gabon", continent: "Africa" },
]);

const africanCountriesOptic = countriesOptic
  .map()
  .reduceFilter((country) => country.continent === "Africa");

africanCountriesOptic.name.get(); // ['Sénégal', 'Gabon']
```
