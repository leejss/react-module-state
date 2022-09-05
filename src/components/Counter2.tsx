import { useEffect, useState } from "react";

let count = 0;

const setStateFunctions = new Set<(count: number) => void>();

export const Counter1 = () => {
  const [_, setState] = useState(count);

  useEffect(() => {
    setStateFunctions.add(setState);
    return () => {
      setStateFunctions.delete(setState);
    };
  }, []);

  const increment = () => {
    count += 1;
    setStateFunctions.forEach((setState) => {
      setState(count);
    });
  };

  const decrement = () => {
    count -= 1;
    setStateFunctions.forEach((setState) => {
      setState(count);
    });
  };

  return (
    <div className="counter">
      <h1>{count}</h1>
      <div className="buttonGroup">
        <button onClick={decrement}>-1</button>
        <button onClick={increment}>+1</button>
      </div>
    </div>
  );
};

export const Counter2 = () => {
  const [_, setState] = useState(count);
  useEffect(() => {
    setStateFunctions.add(setState);
    return () => {
      setStateFunctions.delete(setState);
    };
  }, []);

  const increment = () => {
    count += 1;
    setStateFunctions.forEach((setState) => {
      setState(count);
    });
  };

  const decrement = () => {
    count -= 1;
    setStateFunctions.forEach((setState) => {
      setState(count);
    });
  };
  return (
    <div className="counter">
      <h1>{count}</h1>
      <div className="buttonGroup">
        <button onClick={decrement}>-1</button>
        <button onClick={increment}>+1</button>
      </div>
    </div>
  );
};
