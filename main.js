// Global Variables
let currentValue = "";
let previousValue = "";
let operator = "";
result = "";

document.addEventListener("DOMContentLoaded", function () {
  // Grab all HTML elements
  const topDisplay = document.querySelector("[data-top-display]");
  const bottomDisplay = document.querySelector("[data-bottom-display]");

  const numberButtons = document.querySelectorAll("[data-number]");
  const operatorButtons = document.querySelectorAll("[data-operator]");

  const decimalButton = document.querySelector("[data-decimal]");
  const equalsButton = document.querySelector("[data-equals]");
  const deleteButton = document.querySelector("[data-delete]");
  const clearButton = document.querySelector("[data-clear-all]");

  // Add event listener for each number button
  numberButtons.forEach((number) =>
    number.addEventListener("click", function (e) {
      handleDataNumber(e.target.textContent);
      bottomDisplay.textContent = currentValue;
    })
  );
  // Add event listener for each operator button
  operatorButtons.forEach((opButton) =>
    opButton.addEventListener("click", function (e) {
      handleDataOperator(e.target.textContent);
      topDisplay.textContent = `${previousValue} ${operator}`;
      bottomDisplay.textContent = currentValue;
    })
  );

  // Add event listener for clear button. Once clicked, return all values to ""
  clearButton.addEventListener("click", function () {
    currentValue = ""; // Clear the current value
    previousValue = "";
    operator = "";
    topDisplay.textContent = ""; // Update the display
    bottomDisplay.textContent = "";
  });

  // Add event listener to delete last number from bottom display
  deleteButton.addEventListener("click", () => deleteLastNumber(bottomDisplay)); // Pass function the bottom display to work with

  // Add event listener to perform calculations when equals button is pressed
  equalsButton.addEventListener("click", () => {
    evaluate();
    topDisplay.textContent = "";
    bottomDisplay.textContent = result;
    // previousValue = "";
    currentValue = result;
    console.log(previousValue);
    console.log(result);
  });
});

function handleDataNumber(number) {
  if (currentValue.length < 12) {
    currentValue += number;
  }
}

function handleDataOperator(clickedOperator) {
  if (currentValue === "") return; // Check if bottom display has a value, and if not, return and do not display the operator
  operator = clickedOperator;
  previousValue = currentValue;
  currentValue = "";
}

function deleteLastNumber(display) {
  // Use slice to remove the last character from currentValue
  currentValue = currentValue.slice(0, -1);
  // Update the bottomDisplay with the updated currentValue
  display.textContent = currentValue;
}

function evaluate() {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  currentValue = Number(currentValue);
  previousValue = Number(previousValue);

  switch (operator) {
    case "+":
      result = add(currentValue, previousValue);
      break;
    case "-":
      result = subtract(previousValue, currentValue);
      break;
    case "x":
      result = multiply(currentValue, previousValue);
      break;
    case "÷":
      result = divide(previousValue, currentValue);
      break;
    default:
      "";
  }

  // Alternative
  // if (operator === "") return;
  // if (operator === "+") result = add(currentValue, previousValue);
  // if (operator === "-") result = subtract(previousValue, currentValue);
  // if (operator === "x") result = multiply(currentValue, previousValue);
  // if (operator === "÷") result = divide(previousValue, currentValue);

  // Use this function to round the result to 5 decimal places.
  function roundNumber(value) {
    return Number(value.toFixed(5));
  }

  result = roundNumber(result);

  // Convert the result to a string to ensure currentValue remains a string
  currentValue = currentValue.toString();
  previousValue = previousValue.toString();
}

// Calc Functions

// function add(a, b) {
//   return a + b;
// }
// const add = (a, b) => a + b;

// const add = function (a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }
// const subtract = (a, b) => a - b;

// const subtract = function (a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }
// const multiply = (a, b) => a * b;

// const multiply = function (a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   return a / b;
// }

// const divide = function (a, b) {
//   return a / b;
// }

// const divide = (a, b) => a / b;
