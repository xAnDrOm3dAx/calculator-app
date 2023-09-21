// Global Variables
let currentValue = "";
let previousValue = "";
let operator = "";

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
      bottomDisplay.textContent = "";
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
    bottomDisplay.textContent = currentValue;
    previousValue = "";
  });

  decimalButton.addEventListener("click", () => {
    addDecimal();
    bottomDisplay.textContent = currentValue;
  });
});

function handleDataNumber(number) {
  if (currentValue.length < 12) {
    currentValue += number;
  }
}

function handleDataOperator(clickedOperator) {
  if (currentValue === "") {
    return;
  } else if (previousValue !== "") {
    // If there's a previous value and an operator, evaluate the expression
    evaluate();
  }

  operator = clickedOperator;
  previousValue = currentValue;
  currentValue = ""; // Clear current value for the next input
}

function deleteLastNumber(display) {
  // Use slice to remove the last character from currentValue
  currentValue = currentValue.slice(0, -1);
  // Update the bottomDisplay with the updated currentValue
  display.textContent = currentValue;
}

function addDecimal() {
  if (!currentValue.includes(".")) {
    currentValue += ".";
  }
}

function evaluate() {
  let result;

  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  const current = Number(currentValue);
  const previous = Number(previousValue);

  // Check if there is a valid operator
  if (!operator) {
    currentValue = ""; // Clear the result if there's no operator
    return;
  }

  // Check if values are numbers before evaluating, if not, exit function.
  if (isNaN(previous) || isNaN(current)) {
    return;
  } else {
    switch (operator) {
      case "+":
        result = add(current, previous);
        break;
      case "-":
        result = subtract(previous, current);
        break;
      case "x":
        result = multiply(current, previous);
        break;
      case "÷":
        result = divide(previous, current);
        break;
      default:
        return;
    }
  }

  // Use this function to round the result to 5 decimal places.
  function roundNumber(value) {
    return Number(value.toFixed(5));
  }

  currentValue = roundNumber(result);
  operator = "";

  // Convert the result to a string to ensure currentValue remains a string
  currentValue = currentValue.toString();
  previousValue = previousValue.toString();
}

// function evaluate() {
//   const add = (a, b) => a + b;
//   const subtract = (a, b) => a - b;
//   const multiply = (a, b) => a * b;
//   const divide = (a, b) => a / b;

//   currentValue = Number(currentValue);
//   previousValue = Number(previousValue);

//   // Check if there is a valid operator
//   if (!operator) {
//     currentValue = ""; // Clear the result if there's no operator
//     return;
//   }

//   // Check if values are numbers before evaluating
//   if (isNaN(previousValue) || isNaN(currentValue)) {
//     return;
//   } else {
//     switch (operator) {
//       case "+":
//         currentValue = add(currentValue, previousValue);
//         break;
//       case "-":
//         currentValue = subtract(previousValue, currentValue);
//         break;
//       case "x":
//         currentValue = multiply(currentValue, previousValue);
//         break;
//       case "÷":
//         currentValue = divide(previousValue, currentValue);
//         break;
//       default:
//         "";
//     }
//   }

//   // Use this function to round the result to 5 decimal places.
//   function roundNumber(value) {
//     return Number(value.toFixed(5));
//   }

//   currentValue = roundNumber(currentValue);
//   operator = "";

//   // Convert the result to a string to ensure currentValue remains a string
//   currentValue = currentValue.toString();
//   previousValue = previousValue.toString();
// }
