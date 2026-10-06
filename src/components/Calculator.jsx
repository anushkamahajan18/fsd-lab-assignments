import { useState } from "react";

function Calculator() {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  function calculate() {

    setError("");

    if (num1 === "" || num2 === "") {
      setError("Please enter both numbers.");
      return;
    }

    const a = Number(num1);
    const b = Number(num2);

    let answer;

    // Switch statement for arithmetic operations
    switch (operator) {

      case "+":
        answer = a + b;
        break;

      case "-":
        answer = a - b;
        break;

      case "*":
        answer = a * b;
        break;

      case "/":

        if (b === 0) {
          setError("Cannot divide by zero.");
          return;
        }

        answer = a / b;
        break;

      default:
        setError("Invalid operator.");
        return;
    }

    setResult(answer);
  }

  function resetCalculator() {

    setNum1("");
    setNum2("");
    setOperator("+");
    setResult("");
    setError("");
  }

  return (
    <div className="content">

      <div className="aim-box">

        <h3>Aim</h3>

        <p>
          Create a calculator using JavaScript functions to perform
          addition, subtraction, multiplication and division.
          A switch statement is used to select the operation.
        </p>

      </div>

      <div className="calculator">

        <label>
          First Number

          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
          />

        </label>

        <label>
          Operation

          <select
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
          >

            <option value="+">Addition (+)</option>
            <option value="-">Subtraction (-)</option>
            <option value="*">Multiplication (*)</option>
            <option value="/">Division (/)</option>

          </select>

        </label>

        <label>
          Second Number

          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second number"
          />

        </label>

        <div className="button-group">

          <button
            className="primary-button"
            onClick={calculate}
          >
            Calculate
          </button>

          <button
            className="secondary-button"
            onClick={resetCalculator}
          >
            Reset
          </button>

        </div>

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        {result !== "" && (
          <div className="result">

            <p>Result</p>

            <strong>{result}</strong>

          </div>
        )}

      </div>

    </div>
  );
}

export default Calculator;