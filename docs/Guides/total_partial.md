---
title: Total/Partial
sidebar_position: 1
---

# Total and partial optics

An optic can either be `total` which means it's focused on **one value**, or `partial` that is focused on **zero or one value**.

`createState` returns a total optic, it will never fail to focus on the root state:

```ts
const onUser = createState({ name: "Vincent" });
// onName: Optic<{ name: string }, total>
//                                 ^^^^^

const name = onUser.name.get();
// name: string = 'Vincent'
```

:::info total is the default
When you declare an optic without specifying the second type parameter then it defaults to `total`:  
`Optic<string>` === `Optic<string, total>`
:::

## Partial optics

A partial optic focuses on a value that might not exist.

As an example let's create users with an optional `contact` property:

```ts
const initialUsers = [
  { name: "Vincent", contact: { phone: "999-999-999" } },
  { name: "Gabin" },
];
// initialUsers: { name: string; contact?: { phone: string } }[]

const onUsers = createState(initialUsers);
```

Here the `contact` property is inferred as optional because it's not present for all users.  
After that every optic we derive from `contact` will be partial because the value it is focused on might not exist:

```ts
const onFirstUserPhone = onUsers[0].contact.phone;
// onFirstUserPhone: Optic<string, partial>
//                                 ^^^^^^^

const onSecondUserPhone = onUsers[1].contact.phone;
// onSecondUserPhone: Optic<string, partial>
//                                  ^^^^^^^
```

If an optic can't find the focused value it returns `undefined`, that means in our case the value returned by `get` is typed as `string | undefined`:

```ts
const vincentsPhone = onFirstUserPhone.get();
// vincentsPhone: string | undefined === '999-999-999'

const gabinsPhone = onSecondUserPhone.get();
// gabinsPhone: string | undefined === undefined
```

When trying to update a value that a partial fails to reach then it will simply no-op:

```ts
onSecondUserPhone.set("888-888-888");
onSecondUserPhone.get(); // undefined
```

:::tip
On a plain javascript object, if you have to use the **optional chaining operator** `?.` on the path to a property,
then using the same path on the optic means that you'll get a partial optic (no need to use the `?.` operator though).

```ts
initialUsers[0].contact?.phone;
//                     ^^
// string | undefined

onUsers[0].contact.phone;
// Optic<string, partial>
```

:::

Deriving optics from properties of optional objects is not the only way to get partial optics.  
For exemple with an optic focused on an array, the `findFirst` method returns a partial optic because no element of the array might match the predicate.  
Or again the `if` method returns a partial optic because the condition might not be met by the focused value:

```ts
const onNumber = createState(42);
// onNumber: Optic<number>

const onEvenNumber = onNumber.if((n) => n % 2 === 0);
// onEvenNumber: Optic<number, partial>

onEvenNumber.get(); // 42

onEvenNumber.set((n) => n + 1);

onNumber.get(); // 43
onEvenNumber.get(); // undefined
```

### Type relations

`total` is a subtype of `partial`, meaning we can assign a total optic to a partial one (widening the type):

```ts
const onNumber = createState(42);
// onNumber: Optic<number, total>
//                         ^^^^^
const onNumberPartial: Optic<number, partial> = onNumber; // ✅ allowed
```

However the reverse is not true, assigning a partial optic to a total one (narrowing the type) fails to compile:

```ts
const onEvenNumber = createState(42).if((n) => n % 2 === 0);
// onEvenNumber: Optic<number, partial>

const onNumberTotal: Optic<number, total> = onEvenNumber; // ❌ type error
```

<br/>

You can do that in a safe way by using the `default` method.  
It will fallback to the default value you provided if the partial optic doesn't return a value:

```ts
const onEvenNumberTotal = onEvenNumber.default(0);
// onEvenNumberTotal: Optic<number, total>

onNumber.set(42);
onEvenNumberTotal.get(); // 42

onNumber.set(43);
onEvenNumberTotal.get(); // 0
```
