import { useState } from "react";

let count = 0;

export const Counter1 = () => {
  const [_, setState] = useState(count);
  return (
    <div className="counter">
      <h1>{count}</h1>
      <div className="buttonGroup">
        <button
          onClick={() => {
            count -= 1;
            setState(count);
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            count += 1;
            setState(count);
          }}
        >
          +1
        </button>
      </div>
    </div>
  );
};

export const Counter2 = () => {
  const [_, setState] = useState(count);
  return (
    <div className="counter">
      <h1>{count}</h1>
      <div className="buttonGroup">
        <button
          onClick={() => {
            count -= 1;
            setState(count);
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            count += 1;
            setState(count);
          }}
        >
          +1
        </button>
      </div>
    </div>
  );
};
