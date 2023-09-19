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

  // Add event listener for clear button. Once clicked, return all values to "".
  clearButton.addEventListener("click", function () {
    currentValue = ""; // Clear the current value
    previousValue = "";
    operator = "";
    topDisplay.textContent = ""; // Update the display
    bottomDisplay.textContent = "";
  });
});

// Global Variables

let currentValue = "";
let previousValue = "";
let operator = "";
let result = "";

// Create a new function calculate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

function handleDataNumber(number) {
  if (currentValue.length < 12) {
    currentValue += number;
  }
}

function handleDataOperator() {}

function deleteLastNumber() {
  //slice(0, -1)
}

function calculate() {
  if (operator === "") {
    return;
  } else {
    switch (operator) {
      case "+":
        result = add(num1, num2);
      case "-":
        result = subtract(num1, num2);
      case "*":
        result = multiply(num1, num2);
      case "/":
        result = divide(num1, num2);
    }
  }
}

// Calc Functions

function add(num1, num2) {
  return num1 + num2;
}
// const add = (num1, num2) => num1 + num2;

// const add = function (a, b) {
//   return a + b;
// }

function subtract(num1, num2) {
  return num1 - num2;
}
// const subtract = (num1, num2) => num1 - num2;

// const subtract = function (a, b) {
//   return a - b;
// }

function multiply(num1, num2) {
  return num1 * num2;
}
// const multiply = (num1, num2) => num1 * num2;

// const multiply = function (a, b) {
//   return a * b;
// }

function divide(num1, num2) {
  return num1 / num2;
}

// const divide = function (a, b) {
//   return a / b;
// }

// const divide = (num1, num2) => num1 / num2;
