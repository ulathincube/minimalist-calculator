const calculator = document.querySelector('.calculator');
const operandButtons = document.querySelectorAll('.operand');
const display = document.querySelector('.display');
const calculateButton = document.querySelector('.calculate');
const operatorButtons = document.querySelectorAll('.operate');

const clearButton = document.querySelector('.clear');

let operandA = '';
let operandB = '';
let operator = '';

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

function handleOperandClick(event) {
  if (!operator && !operandB) {
    reset();
  }

  if (!operator) {
    operandA += event.target.dataset.value;
    display.textContent = operandA;
  } else {
    operandB += event.target.dataset.value;
    display.textContent = operandB;
  }
}

function handleOperatorClick(event) {
  if (operandB && operandA && operator) {
    const result = operate(operator, Number(operandA), Number(operandB));
    operandA = result;
    operandB = '';
    operator = '';

    display.textContent = result;
    operandA = result;
  }

  operator = event.target.dataset.operate;
}

function handleCalculate() {
  if (operator && operandA && operandB) {
    const result = operate(operator, Number(operandA), Number(operandB));

    if (String(result).length > 8) {
      result.toFixed(2);
    }

    operandA = result;
    operandB = '';
    operator = '';

    display.textContent = result;
  } else return;
}

function reset() {
  display.textContent = '';
  operandA = '';
  operandB = '';
  operator = '';
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

operandButtons.forEach(operandButton =>
  operandButton.addEventListener('click', handleOperandClick)
);

operatorButtons.forEach(operatorButton =>
  operatorButton.addEventListener('click', handleOperatorClick)
);

calculateButton.addEventListener('click', handleCalculate);

clearButton.addEventListener('click', reset);
