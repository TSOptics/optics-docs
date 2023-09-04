---
sidebar_position: 3
title: useOpticReducer()
---

# useOpticReducer(optic, reducer): [value, dispatch]

```tsx
function useOpticReducer<T, TOpticType, Action>(
  stateOptic: Optic<T, TOpticType>,
  reducer: (state: T, action: Action, stateOptic: Optic<T, total, T>) => T
): [T, Dispatch<Action>];
```

---

This hook allows you to state focused on by the optic with a **reducer**.  
It takes as argument an optic and a reducer function, and it returns the focused value as well as a dispatch function.

It works pretty much just like React `useReducer`,
you dispatch an action and the reducer computes the next state from the action and the current state.  
The only difference is that you can use a reducer that takes a [pure optic](../../Guides/pure_optic) as third argument. With it you can derive new optics to handle immutable updates inside of the reducer with the `get` and `set` methods.

### Example:

```tsx twoslash
import { useEffect } from "react";
import { createState, useOpticReducer, PureOptic, total } from "@optics/react";

type State = {
  value: number;
  step: number;
};

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "changeStep"; step: number }
  | { type: "reset" };

const initialCounter = { value: 0, step: 1 };

const reducer = (
  state: State,
  action: Action,
  stateOptic: PureOptic<State, total, State>
) => {
  switch (action.type) {
    case "increment":
      // equivalent to: return { ...state, value: state.value + state.step };
      return stateOptic.value.set((prev) => prev + state.step, state);
    case "decrement":
      return stateOptic.value.set((prev) => prev - state.step, state);
    case "changeStep":
      return stateOptic.step.set(action.step, state);
    case "reset":
      return initialCounter;
  }
};

const counterOptic = createState(initialCounter);

const MyCounterComponent = () => {
  const [counter, dispatch] = useOpticReducer(counterOptic, reducer);

  useEffect(() => {
    dispatch({ type: "increment" });
    dispatch({ type: "changeStep", step: 10 });
    dispatch({ type: "increment" });
    dispatch({ type: "changeStep", step: 3 });
    dispatch({ type: "decrement" });
    // counter.value will be 8
  }, [dispatch]);

  return <div>{counter.value}</div>;
};
```
