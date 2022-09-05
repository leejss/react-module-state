import { useCallback } from "react";
import { createStore, useStoreSelector } from "../lib/store";

const multiCountStore = createStore({
  count1: 0,
  count2: 0,
});

export const Counter1 = () => {
  const state = useStoreSelector(
    multiCountStore,
    useCallback((store) => store.count1, [])
  );
  const decrement = () => {
    multiCountStore.setState((prev) => ({
      ...prev,
      count1: prev.count1 - 1,
    }));
  };

  const increment = () => {
    multiCountStore.setState((prev) => ({
      ...prev,
      count1: prev.count1 + 1,
    }));
  };

  return (
    <div className="counter">
      <h1>{state}</h1>
      <div className="buttonGroup">
        <button onClick={decrement}>-1</button>
        <button onClick={increment}>+1</button>
      </div>
    </div>
  );
};

export const Counter2 = () => {
  const state = useStoreSelector(
    multiCountStore,
    useCallback((store) => store.count2, [])
  );
  const decrement = () => {
    multiCountStore.setState((prev) => ({
      ...prev,
      count2: prev.count2 - 1,
    }));
  };

  const increment = () => {
    multiCountStore.setState((prev) => ({
      ...prev,
      count2: prev.count2 + 1,
    }));
  };
  return (
    <div className="counter">
      <h1>{state}</h1>
      <div className="buttonGroup">
        <button onClick={decrement}>-1</button>
        <button onClick={increment}>+1</button>
      </div>
    </div>
  );
};
