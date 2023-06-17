---
title: Total/Partial
sidebar_position: 1
---

# Total and partial optics

An optic can either be `total` which means it's focused on **one value**, or `partial`: focused on **zero or one value**.

`createState` returns a total optic, it will never fail to focus on the root state:

```ts twoslash
import { createState } from "@optics/react";
// ---cut---

const onUser = createState({ name: "Vincent" });
//    ^?
const name = onUser.name.get();
//    ^?
```

:::info total is the default
When you declare an optic without specifying the second type parameter then it defaults to `total`:  
`Optic<string>` === `Optic<string, total>`
:::

## Partial optics

A partial optic focuses on a value that might not exist.

As an example let's create users with an optional `contact` property:

```twoslash include main
import { createState } from "@optics/react";
const initialUsers: { name: string; contact?: { phone: string } }[] = [
  { name: "Vincent", contact: { phone: "999-999-999" } },
  { name: "Gabin" },
];
const onUsers = createState(initialUsers);
```

```ts twoslash
import { createState } from "@optics/react";
// ---cut---

const initialUsers: { name: string; contact?: { phone: string } }[] = [
  { name: "Vincent", contact: { phone: "999-999-999" } },
  { name: "Gabin" },
];

const onUsers = createState(initialUsers);
```

Here some users might not have any contact information, so the `contact` field is optional (hence the question mark).  
When you have an optic focused on an optional (or nullable) property, then the new optics derived from it will be partial.

In our case it means every optics we derive from `contact` ends up partial:

```ts twoslash
// @include: main
// ---cut---

const onFirstUserPhone = onUsers[0].contact.phone;
//    ^?

const onSecondUserPhone = onUsers[1].contact.phone;
//    ^?
```

An object being nullable doesn't mean we shouldn't be able to focus values inside it.  
But we should still be made aware of the fact that getting the value could yield `undefined`, and that's what `partial` is for.  
A partial optic returns `undefined` if one of the value in the path is not present (in our case `contact`), that's why the return type of `get` is <code>T&nbsp;|&nbsp;undefined</code>:

```ts twoslash
// @include: main
const onFirstUserPhone = onUsers[0].contact.phone;
const onSecondUserPhone = onUsers[1].contact.phone;
// ---cut---

const vincentsPhone = onFirstUserPhone.get();
//    ^?

const gabinsPhone = onSecondUserPhone.get();
//    ^?

// vincentsPhone = "999-999-999"
// gabinsPhone = undefined
```

When trying to update a value that a partial fails to reach then it simply no-op:

```ts twoslash
// @include: main
const onFirstUserPhone = onUsers[0].contact.phone;
const onSecondUserPhone = onUsers[1].contact.phone;
// ---cut---
onSecondUserPhone.set("888-888-888");

onSecondUserPhone.get(); // undefined
```

:::tip
On a plain javascript object if you have to use the **optional chaining operator** `?.` on the path to a property,
then using the same path on the optic will get you a partial optic (no need to use `?.` on optics though).

```ts twoslash
// @include: main
// ---cut---
initialUsers[0].contact?.phone;
//                       ^?

onUsers[0].contact.phone;
//                 ^?
```

:::

Deriving optics from properties of optional objects is not the only way to get partial optics.  
For exemple with an optic focused on an array, the [`findFirst`](<../API/methods/array/findFirst()>) method returns a partial optic because no element of the array might match the predicate.  
Or again the [`if`](<../API/methods/if()>) method returns a partial optic because the condition might not be met by the focused value:

```ts twoslash
import { createState } from "@optics/react";
// ---cut---
const onNumber = createState(42);

const onEvenNumber = onNumber.if((n) => n % 2 === 0);
//    ^?

onEvenNumber.get(); // 42

onEvenNumber.set((n) => n + 1);

onNumber.get(); // 43
onEvenNumber.get(); // undefined
```

### Type relations

`total` is a subtype of `partial`, meaning we can assign a total optic to a partial one (widening the type):

```ts twoslash
import { createState, Optic, partial } from "@optics/react";
// ---cut---

const onNumber = createState(42);

const onNumberPartial: Optic<number, partial> = onNumber; // ✅ allowed
```

However the reverse is not true, assigning a partial optic to a total one (narrowing the type) fails to compile:

```ts twoslash
// @errors: 2322
import { createState, Optic, total } from "@optics/react";
// ---cut---

const onEvenNumber = createState(42).if((n) => n % 2 === 0);
//    ^?

const onNumberTotal: Optic<number, total> = onEvenNumber;
```
