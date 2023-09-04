---
title: .derive()
sidebar_position: 4
---

# .derive(get, set): Optic

```ts
Optic<A>.derive: <B>(get: (a: A) => B) => ReadOptic<B>;
Optic<A>.derive: <B>(get: (a: A) => B, set: (b: B, a: A) => A) => Optic<B>;
```

---

The `derive` method allows you to **derive a new optic from the current one** with a custom get and set function.  
All the built-in methods in this library can be implemented using `derive`.

- The `get` function is a simple **selector**, returning a new value derived from what the current optic is focused on.
- The `set` function lets you to specify how to update the original value when the derived one is updated. It is optional, if you don't pass it the method returns a `ReadOptic`.

:::tip

The `get` function is memoized for you, it will only run when the original value changes.

:::

### Examples:

```ts twoslash
import { createState } from "@optics/react";
// ---cut---

const millisecondsOptic = createState(15_000);

const secondsOptic = millisecondsOptic.derive(
  (ms) => ms / 1000,
  (seconds) => seconds * 1000
);
```

Here our `secondsOptic` optic allows us to read and manipulate our time measurement in seconds even though it is represented in milliseconds in our state.

```ts twoslash
import { Optic } from "@optics/react";
declare const millisecondsOptic: Optic<number>;
declare const secondsOptic: Optic<number>;
// ---cut---

secondsOptic.get(); // 15

// make it on minute
secondsOptic.set(60);

millisecondsOptic.get(); // 60_000
```

If you don't pass a `set` function you get a `ReadOptic`, an optic that can't be updated:

```ts twoslash
import { createState } from "@optics/react";
const millisecondsOptic = createState(15_000);
// ---cut---
const secondsOptic = millisecondsOptic.derive((ms) => ms / 1000);
//    ^?
```

- The derived type can be different from the original type:

```ts twoslash
import { createState } from "@optics/react";
// ---cut---
const objectOptic = createState({ firstName: "Aaron", lastName: "Schwartz" });

const tupleOptic = objectOptic.derive(
  ({ firstName, lastName }) => [firstName, lastName] as const,
  ([firstName, lastName]) => ({ firstName, lastName })
);
// The original optic is focused on an object while the derived optic is focused on a tuple
```

- Here's how we would focus on an object's property with `derive`, if it wasn't already built-in:

```ts twoslash
import { createState } from "@optics/react";
// ---cut---
const personOptic = createState({ firstName: "Aaron", lastName: "Schwartz" });

const lastNameOptic = personOptic.derive(
  (person) => person.lastName,
  (lastName, person) => ({ ...person, lastName })
);
```

:::info

### Lawful optics

For your new optic to make sense the following laws must be respected.

Where `a` is the original value and `b` is the derived one:

- `get(set(b, a)) == b`  
  (Ensures that when you set a value, you always get the same value back)
- `set(get(a), a) == a`  
  (Ensures that when you get a value and set it back, the original value doesn't change)

:::
