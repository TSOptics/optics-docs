---
sidebar_position: 1
---

```ts
function createState<T>(initialValue: T, key?: string): Optic<T, total, T>;
```

Creates a global state initialized to the value passed as argument.  
Takes a key as an optional string argument. It can be useful when debugging to distinguish this state from others.

Returns an optic focused on this value. It's the root optic from which we can create more specialized optics.

:::tip multiple global state
You can create as many states as you want.
:::
