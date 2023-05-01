---
title: Total vs partial
sidebar_position: 1
---

# Total vs partial optics

Optics can either be total or partial:

- Total is the default type for an optic, it means that the focused value exists and reading and/or updating it will always succeed.

```ts
const onName = createState({ name: "Vincent" }).name;
// onName: Optic<string, total>

// onName.get() = 'Vincent'
```

:::info total is the default
When the optic's type isn't specified it defaults to `total`:  
`Optic<string>` is equivalent to `Optic<string, total>`
:::

- Partial means that the focused value might not exist.

```ts
const onUsers = createState([
  { name: "Vincent", contact: { phone: "999-999-999" } },
  { name: "Gabin" },
]);
// onUsers: Optic<{ name: string; contact?: { phone: string } }[]>

const onFirstUserPhone = onUsers[0].contact.phone;
// onFirstUserPhone: Optic<string, partial>

const onSecondUserPhone = onUsers[1].contact.phone;
// onSecondUserPhone: Optic<string, partial>
```

Here both optics are **partial** because some users might not have a contact field with a phone number in it.

The type of the retrieved value in both cases will be `string | undefined`. If an optic can't find the focused value it will return `undefined`:

```ts
const vincentsPhone = onFirstUserPhone.get();
// vincentsPhone: string | undefined
// vincentsPhone = '999-999-999'

const gabinsPhone = onSecondUserPhone.get();
// gabinsPhone: string | undefined
// gabinsPhone = undefined
```

When trying to set a new value with a partial optic that fails to focus on a value it will simply noop:

```ts
onSecondUserPhone.set("888-888-888");
onSecondUserPhone.get(); // undefined
```

Some methods like `.findFirst()` or `.if()` also return partial optics:

```ts
const onNumber = createState(42);
const onEvenNumber = onNumber.if((n) => n % 2 === 0);
// onEvenNumber: Optic<number, partial>

onEvenNumber.get(); // 42

onEvenNumber.set((n) => n + 1);

onNumber.get(); // 43
onEvenNumber.get(); // undefined
```

Here `onEvenNumber` is partial because it will fail to focus on a value if the predicate returns false.

### Type relations

`total` is a subtype of `partial`, meaning we can assign a total optic to a partial one:

```ts
const onNumber = createState(42);
const onNumberPartial: Optic<number, partial> = onNumber; // ✅ allowed
```

However the reverse is not true:

```ts
const onEvenNumber = createState(42).if((n) => n % 2 === 0); // Optic<number, partial>
const onNumberTotal: Optic<number, total> = onEvenNumber; // ❌ not allowed
```

In the event you have a partial optic but you're really sure it will never fail to focus a value, then it's ok to use the unsafe `as` to downcast the partial optic to a total one:

```ts
const onMinNumber = createState([9, 6, 4, 0, 3]).map().min(); // Optic<number, partial>

const onNumberTotal = onMinNumber as Optic<number, total>;
// ✅ unsafe, but ok as long as you don't empty the array
```
