---
title: Partial Optics
sidebar_position: 1
---

# Partial optics

By default an optic will always be able to retrieve the value it's focused on, we say that's it's **total**.

But an optic can also be **partial**, meaning it focuses on a value that might not exist.  
When you read a value focused by a partial optic you might get `undefined` if the value is not present.

When you derive new optics from an optional or nullable property, the resulting optics end up `partial`.  
As an example let's create users with an optional `contact` property:

```twoslash include main
import { createState } from "@optics/react";
const initialUsers: { name: string; contact?: { phone: string } }[] = [
  { name: "Vincent", contact: { phone: "999-999-999" } },
  { name: "Gabin" },
];
const userOptics = createState(initialUsers);
```

```ts twoslash
import { createState } from "@optics/react";
// ---cut---

const initialUsers: { name: string; contact?: { phone: string } }[] = [
  { name: "Vincent", contact: { phone: "999-999-999" } },
  { name: "Gabin" },
];

const userOptics = createState(initialUsers);
```

Here some users might not have any contact information, so the `contact` field is optional.

Every optic we derive from `contact` ends up partial:

```ts twoslash
// @include: main
// ---cut---

const firstUserPhoneOptic = userOptics[0].contact.phone;
//    ^?

const secondUserPhoneOptic = userOptics[1].contact.phone;
//    ^?
```

A partial optic returns `undefined` if one of the value in the path is not present (in our case `contact`), that's why the return type of `get` is <code>T&nbsp;|&nbsp;undefined</code>:

```ts twoslash
// @include: main
const firstUserPhoneOptic = userOptics[0].contact.phone;
const secondUserPhoneOptic = userOptics[1].contact.phone;
// ---cut---

const vincentsPhone = firstUserPhoneOptic.get();
//    ^?

const gabinsPhone = secondUserPhoneOptic.get();
//    ^?

// vincentsPhone = "999-999-999"
// gabinsPhone = undefined
```

When trying to update a value with a partial that is not focused on a value, the update is ignored:

```ts twoslash
// @include: main
const firstUserPhoneOptic = userOptics[0].contact.phone;
const secondUserPhoneOptic = userOptics[1].contact.phone;
// ---cut---
secondUserPhoneOptic.set("888-888-888");

secondUserPhoneOptic.get(); // undefined
```

:::tip
On a plain JS object if you have to use the **optional chaining operator** `?.` on the path to a property,
then it means using the same path on the optic will get you a partial optic (no need to use `?.` on optics though).

```ts twoslash
// @include: main
// ---cut---
initialUsers[0].contact?.phone;
//                       ^?

userOptics[0].contact.phone;
//                    ^?
```

:::

Another way you can end up with partial optics is with some combinators.  
For exemple with an optic focused on an array, the [`find`](../API/combinators/find.md) combinator returns a partial optic because no element of the array might satisfy the predicate.

```ts twoslash
import { createState } from "@optics/react";
// ---cut---
import { find } from "@optics/react/combinators";

const numbersOptic = createState([1, 2, 3, 4]);

const greaterThanThreeOptic = numbersOptic.derive(find((n) => n > 3));
//    ^?

greaterThanThreeOptic.get(); // 4

numbersOptic[3].set(0);
greaterThanThreeOptic.get(); // undefined
```

## Narrowing

We can assign a total optic to a partial one (widening the type):

```ts twoslash
import { createState, Optic, partial } from "@optics/react";
// ---cut---

const numberOptic = createState(42);

const numberPartialOptic: Optic<number, partial> = numberOptic; // ✅ allowed
```

However the reverse is not true, you can't narrow from partial to a total as it isn't type-safe:

```ts twoslash
// @errors: 2322
import { createState, Optic } from "@optics/react";
import { find } from "@optics/react/combinators";
// ---cut---

const evenNumberOptic = createState([1, 2, 3]).derive(find((n) => n % 2 === 0));
//    ^?

const numberTotalOptic: Optic<number> = evenNumberOptic;
```

You can cast a `partial` optic to a total one with the [`whenFocused`](../API/React/useOptic.mdx#--whenfocused) function returned by `useOptic`:

```tsx twoslash
import { createState, Optic, partial, useOptic } from "@optics/react";

declare const evenNumberOptic: Optic<number, partial>;
// ---cut---

const [, { whenFocused }] = useOptic(evenNumberOptic);
//                                    ^?
whenFocused((evenNumberTotalOptic) => {
  //          ^?
});
```

The callback will only run when the optic is focused on a value, so that it's safe to cast the optic to total inside it.

In most cases your components should only expect total optics in their props.
Use `whenFocused` to narrow the eventual `partial` optics before passing them to components.
