---
title: .compose()
sidebar_position: 5
---

# .compose(pureOptic): Optic

```ts
Optic<B>.compose: <C>(pureOptic: PureOptic<C, _, B>) => Optic<C>;
```

---

On an optic **focused on B**, the compose method takes a [pure optic](../../Guides/pure_optic) **focused on C from B** and returns a new optic **focused on C**.

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

declare const onState: Optic<{ buyer: Person; seller: Person }>;

const onBuyer = onState.buyer;
//    ^?
const onSeller = onState.seller;
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
declare const onBuyer: Optic<Person>;
declare const onSeller: Optic<Person>;

// ---cut---
const onLine1 = pureOptic<Person>().contact.address.line1;
//    ^?

const onBuyerLine1 = onBuyer.compose(onLine1);
//    ^?
const onSellerLine1 = onSeller.compose(onLine1);
//    ^?
```
