const previousOperandElement = document.querySelector("[data-previous-operand]");
const currentOperandElement = document.querySelector("[data-current-operand]");

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const clearButton = document.querySelector("[data-clear-all]");

// Functions

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

// const divide = (num1, num2) => num1 / num2;

// const divide = function (a, b) {
//   return a / b;
// }

// Variables

let currentValue = 0;
const previousValue = 0;
let operator = "";

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}
