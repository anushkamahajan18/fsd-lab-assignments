import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="content">

      <div className="aim-box">
        <h3>Aim</h3>

        <p>
          Create a counter application using
          the React useState Hook with increment,
          decrement and reset buttons.
        </p>
      </div>

      <div className="counter">

        <p className="card-label">
          CURRENT COUNT
        </p>

        <div className="count">
          {count}
        </div>

        <div className="button-group center">

          <button
            className="primary-button"
            onClick={increment}
          >
            Increment
          </button>

          <button
            className="secondary-button"
            onClick={decrement}
          >
            Decrement
          </button>

          <button
            className="secondary-button"
            onClick={reset}
          >
            Reset
          </button>

        </div>

      </div>

    </div>
  );
}

export default Counter;