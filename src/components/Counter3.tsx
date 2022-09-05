import { countStore, useStore } from "../lib/store";

export const Counter1 = () => {
  const [countState, setCountState] = useStore<{ count: number }>(countStore);
  const decrement = () => {
    setCountState((prev) => ({
      count: prev.count - 1,
    }));
  };

  const increment = () => {
    setCountState((prev) => ({
      count: prev.count + 1,
    }));
  };
  return (
    <div className="counter">
      <h1>{countState.count}</h1>
      <div className="buttonGroup">
        <button onClick={decrement}>-1</button>
        <button onClick={increment}>+1</button>
      </div>
    </div>
  );
};

export const Counter2 = () => {
  const [countState, setCountState] = useStore<{ count: number }>(countStore);
  const decrement = () => {
    setCountState((prev) => ({
      count: prev.count - 1,
    }));
  };

  const increment = () => {
    setCountState((prev) => ({
      count: prev.count + 1,
    }));
  };
  return (
    <div className="counter">
      <h1>{countState.count}</h1>
      <div className="buttonGroup">
        <button onClick={decrement}>-1</button>
        <button onClick={increment}>+1</button>
      </div>
    </div>
  );
};
