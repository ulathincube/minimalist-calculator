const calculator = document.querySelector('.calculator');
const operatorButtons = document.querySelectorAll('.operate');
const display = document.querySelector('.display');
const calculateButton = document.querySelector('.calculate');

const calculationsDisplay = display.querySelector('.calculations');
const resultsDisplay = display.querySelector('.results');

const operatorButtonsArr = Array.from(operatorButtons);

const clearButton = document.querySelector('.clear');

let operandA, operandB, operator, buttonValue, result;
let operands = [];

function add(operandA, operandB) {
  return operandA + operandB;
}

function subtract(operandA, operandB) {
  return operandA - operandB;
}

function multiply(operandA, operandB) {
  return operandA * operandB;
}

function divide(operandA, operandB) {
  return operandA / operandB;
}

function operate(operator, operandA, operandB) {
  switch (operator) {
    case 'add':
      result = add(operandA, operandB);
      break;

    case 'subtract':
      result = subtract(operandA, operandB);
      break;

    case 'multiply':
      result = multiply(operandA, operandB);
      break;

    case 'divide':
      result = divide(operandA, operandB);
      break;

    default:
      return 'What is this operation?';
  }

  return result;
}

calculator.addEventListener('click', event => {
  buttonValue = event.target.dataset.value;

  if (!buttonValue) return;

  populateDisplay(buttonValue);

  if (operatorButtonsArr.includes(event.target)) {
    operator = event.target.dataset.operate;
  }
});

function populateDisplay(digit) {
  calculationsDisplay.textContent += digit;
}

calculateButton.addEventListener('click', event => {
  const fullString = calculationsDisplay.textContent;

  console.log(fullString);

  switch (operator) {
    case 'add':
      operands = fullString.split('+');
      break;

    case 'subtract':
      operands = fullString.split('-');
      break;

    case 'multiply':
      operands = fullString.split('x');
      break;

    case 'divide':
      operands = fullString.split('/');
      break;
  }

  if (operands.length !== 2) {
    console.log(operands[2]);
    result = operate(operator, operands[0], operands[1]);
    operands.splice(0, 2);
    console.log(operands);

    operands.unshift(result);
    console.log(operands, operator);
    result = operate(operator, operands[0], operands[1]);
  } else {
    [operandA, operandB] = operands.map(item => Number(item));
    result = operate(operator, operandA, operandB);
  }

  resultsDisplay.textContent = result;

  operands = [result];
});
