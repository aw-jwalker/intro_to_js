/*
let rls = require('readline-sync');

function prompt(prompt) {
  return rls.question(prompt)
}

let a = prompt('Enter a number: ');

if (a === '3') {
  console.log('a is 3');
} else if (a === '4') {
  console.log('a is 4');
} else {
  console.log('a is not 3 and not 4');
}

console.log('a equals: ' + a);
*/

function evenOrOdd(num) {
  let oddNumbers = [1, 3, 5, 7, 9];
  lastDigit = num % 10;
  inOddList = oddNumbers.indexOf(lastDigit);
  if (oddNumbers.indexOf(lastDigit) !== -1) {
    console.log("The number is odd");
  } else {
    console.log("The number is even");
  }
}

function evenOrOdd2(num) {
  let result;
  (num % 2) === 0 ? result = 'even' : result = 'odd';
  console.log(result);
}



// user input setup
let rls = require('readline-sync');

function prompt(prompt) {
  return rls.question(prompt)
}

// welcome and get number
console.log('Welcome to the even or odd computer!');
let a = prompt('Enter a number: ');

// evenOrOdd(parseInt(a));
Number.isInteger(a) ? evenOrOdd2(a) : console.log("input an integer");
// evenOrOdd2(parseInt(a));
