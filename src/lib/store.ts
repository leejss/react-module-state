import { useEffect, useState } from "react";

type Store<T> = {
  getState: () => T;
  setState: (nextState: T | ((prev: T) => T)) => void;
  subscribe: (cb: () => void) => () => void;
};

type SetFn<T> = (nextState: T | ((prev: T) => T)) => void;

export const createStore = <T extends unknown>(initialState: T): Store<T> => {
  let state = initialState;
  const callbacks = new Set<() => void>();
  return {
    getState: () => state,
    setState: (nextState) => {
      state =
        typeof nextState === "function"
          ? (nextState as (prev: T) => T)(state)
          : nextState;

      callbacks.forEach((cb) => cb());
    },
    subscribe: (cb) => {
      callbacks.add(cb);
      return () => {
        callbacks.delete(cb);
      };
    },
  };
};

export const countStore = createStore({ count: 0 });

export const useStore = <T>(
  store: Store<T>
): [T, (nextState: T | ((prev: T) => T)) => void] => {
  const [state, setState] = useState<T>(store.getState());

  useEffect(() => {
    // add subscription
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    setState(store.getState());
    return unsubscribe;
  }, [store]);

  return [state, store.setState];
};

export const useStoreSelector = <T, S>(
  store: Store<T>,
  selector: (state: T) => S
): S => {
  const [state, setState] = useState<S>(selector(store.getState())); // part of the object
  useEffect(() => {
    // register
    const unsubscribe = store.subscribe(() => {
      setState(selector(store.getState()));
    });
    setState(selector(store.getState()));
    return unsubscribe;
  }, [store, selector]);

  return state;
};
