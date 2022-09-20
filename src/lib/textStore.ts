import { useEffect, useState } from "react";

type Store<T> = {
  getState: () => T;
  setState: (nextState: T | ((prev: T) => T)) => void;
  subscribe: (cb: () => void) => () => void;
};

export const createStore = <T extends unknown>(initialState: T): Store<T> => {
  let state = initialState;
  const callbacks = new Set<() => void>();
  return {
    getState: () => state,
    subscribe: (cb: () => void) => {
      callbacks.add(cb);
      return () => {
        callbacks.delete(cb);
      };
    },
    setState: (nextState: T | ((prev: T) => T)) => {
      state =
        typeof nextState === "function"
          ? (nextState as (prev: T) => T)(state)
          : nextState;
      callbacks.forEach((cb) => cb());
    },
  };
};

// Store hook

export const useStore = <T>(
  store: Store<T>
): [T, (nextState: T | ((prev: T) => T)) => void] => {
  const [state, setState] = useState<T>(store.getState());
  // subscription
  useEffect(() => {
    const unsub = store.subscribe(() => {
      setState(store.getState());
      console.log(store.getState());
    });
    setState(store.getState());
    return unsub;
  }, [store]);

  return [state, store.setState];
};

// Selector
export const useStoreSelector = <T, S>(
  store: Store<T>,
  selector: (store: T) => S
) => {
  const [state, setState] = useState<S>(selector(store.getState()));
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(selector(store.getState()));
    });
    setState(selector(store.getState()));
    return unsubscribe;
  }, [store, selector]);

  return state;
};
