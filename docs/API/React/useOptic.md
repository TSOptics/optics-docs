---
sidebar_position: 2
title: useOptic
---

# useOptic(optic): [value, setValue]

```ts
function useOptic<T>(optic: Optic<T>): [T, Dispatch<SetStateAction<T>>];
```

---

This hook lets you read and modify the slice of store focused by an optic.  
Just like React `useState` it returns the value and a setter to update it.

The component re-renders each time the focused value changes.

### Example:

```tsx twoslash
import { useOptic, createState } from "@optics/react";

const countOptic = createState(42);

const MyCount = () => {
  const [count, setCount] = useOptic(countOptic);

  // set new count value
  setCount(100);

  // pass an updater function to change count based on the previous value
  setCount((prev) => prev + 1);

  return <div>count: {count}</div>;
};
```
