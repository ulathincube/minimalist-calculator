let operandA, operandB, operator;

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
      add(operandA, operandB);
      break;

    case 'subtract':
      subtract(operandA, operandB);
      break;

    case 'multiply':
      multiply(operandA, operandB);
      break;

    case 'divide':
      divide(operandA, operandB);
      break;

    default:
      return 'What is this operation?';
  }
}
