---
title: createState()
sidebar_position: 1
---

# createState(initialValue, key?)

```ts
function createState<T>(initialValue: T, key?: string): Optic<T, total>;
```

Creates a global state initialized to the value passed as argument.  
Takes a key as an optional string argument. It can be useful when debugging to distinguish between different states.

Returns an optic focused on this value. This optic is a **root** one; from which we derive new optics.
