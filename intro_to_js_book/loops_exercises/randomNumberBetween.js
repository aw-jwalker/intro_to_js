/*
function factorial(num) { 
  for (let i = (num - 1); i > 0; --i) {
    // console.log(num + ' * ' + i);
    num = num * i;
    // console.log('= ' + num);
  }
  return num
}


// user input setup
let rls = require('readline-sync');

function prompt(prompt) {
  return rls.question(prompt)
}

let keepGoing = 'y';

do {
  num = prompt('Return the factorial of: ');
  console.log(num + ' factorial is: ' + factorial(num));
  keepGoing = prompt('keep going? (y/n): ')
} while ( keepGoing === 'y')
*/


function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;  

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2)

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');




