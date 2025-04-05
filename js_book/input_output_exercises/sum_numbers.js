let rlSync = require('readline-sync');

console.log('Lets add two numbers together!');
let number1 = Number(rlSync.question('What is the first number?: '));
let number2 = Number(rlSync.question('What is the second number?: '));
let sum = number1 + number2;

console.log(`The sum of the numbers ${number1} and ${number2} is: ${sum}`);
