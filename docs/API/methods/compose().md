---
title: .compose()
sidebar_position: 5
---

# .compose(pureOptic): Optic

```ts
Optic<A>.compose: <B>(pureOptic: PureOptic<B, _, A>) => Optic<B>;
```

---

On an optic **focused on A**, the compose method takes a [pure optic](../../Guides/pure_optic) **focused on B from A** and returns a new optic **focused on B**.

### Example:

```ts twoslash
import { createState, Optic } from "@optics/react";

// ---cut---

type Person = {
  contact: {
    phone: string;
    address: {
      line1: string;
    };
  };
};

declare const stateOptic: Optic<{ buyer: Person; seller: Person }>;

const buyerOptic = stateOptic.buyer;
//    ^?
const sellerOptic = stateOptic.seller;
//    ^?
```

Here we have two optic focused on the same type (`Person`). We want to focus on the first line of the address for both optics.

Instead of repeating the same path two times let's create a pure optic from Person to the first line in the address, and compose it with our optics:

```ts twoslash
import { Optic, pureOptic } from "@optics/react";
type Person = {
  contact: {
    phone: string;
    address: {
      line1: string;
    };
  };
};
declare const buyerOptic: Optic<Person>;
declare const sellerOptic: Optic<Person>;

// ---cut---
const line1Optic = pureOptic<Person>().contact.address.line1;
//    ^?

const buyerLine1Optic = buyerOptic.compose(line1Optic);
//    ^?
const sellerLine1Optic = sellerOptic.compose(line1Optic);
//    ^?
```
