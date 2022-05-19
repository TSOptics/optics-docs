---
sidebar_position: 2
---

```ts
function useOptic<T, TOpticType extends OpticType>(
    optic: Optic<T, TOpticType, Store>
): [FocusedValue<T, TOpticType>, Dispatch<SetStateAction<T>>];
```

`useOptic` is a React hook that let's you read and modify the slice of store focused by an optic.  
Just like React `useState` it returns the value and a setter to change it.

The component will rerender each time the focused value changes.

### Example:

```tsx
import { useOptic } from 'react-optics';

const onCount = createStore(42);

const MyCount = () => {
    const [count, setCount] = useOptic(onCount);

    // set new count value
    setCount(100);

    // pass an updater function to change count based on the previous value
    setCount((prev) => prev + 1);

    return <div>count: {count}</div>;
};
```
