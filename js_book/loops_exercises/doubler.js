
// user input setup
let rls = require('readline-sync');

function prompt(prompt) {
  return rls.question(prompt)
}

function doubler(number) {
  console.log('The number doubled: ' + number);
  
  if (number <= 50) {
    doubler(number * 2);
  }
}

doubler(prompt('Enter a number: '));



