// Functions

function add(num1, num2) {
  return num1 + num2;
}
// const add = (num1, num2) => num1 + num2;

function subtract(num1, num2) {
  return num1 - num2;
}
// const subtract = (num1, num2) => num1 - num2;

function multiply(num1, num2) {
  return num1 * num2;
}
// const multiply = (num1, num2) => num1 * num2;

function divide(num1, num2) {
  return num1 / num2;
}

console.log(divide(10, 2));
// const divide = (num1, num2) => num1 / num2;

// Variables

let firstNumber = 0;
let operator = "+";
const secondNumber = 0;

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

function operate(operator, num1, num2) {
  switch (operator) {
    case "+";
    return add(num1, num2)
    case "-";
    return subtract(num1, num2)
    case "*";
    return multiply(num1, num2)
    case "/";
    return divide(num1, num2)
  }
}
