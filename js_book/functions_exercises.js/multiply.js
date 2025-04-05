
function getNumber(prompt) {
  let rls = require('readline-sync');
  number = parseFloat(rls.question(prompt));
  return number
}

function multiply(firstNumber, secondNumber) {
  let product = firstNumber * secondNumber;
  return product
}

let firstNumber = getNumber('Enter the first number: ');
let secondNumber = getNumber('Enter the second number: ');  
console.log(firstNumber + ' * ' + secondNumber + ' = ' + multiply(firstNumber, secondNumber));

