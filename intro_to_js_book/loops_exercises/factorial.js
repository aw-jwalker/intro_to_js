function factorial(num) { 
  for (let i = (num - 1); i > 0; --i) {
    // console.log(num + ' * ' + i);
    num = num * i;
    // console.log('= ' + num);
  }
  return num
}

function factorial_recursive(num) {
  if (num === 1) {
    return 1;
  }

  return num * factorial_recursive(num - 1);

}

// user input setup
let rls = require('readline-sync');

function prompt(prompt) {
  return rls.question(prompt)
}

let keepGoing = 'y';

do {
  num = prompt('Return the factorial of: ');
  console.log(num + ' factorial is: ' + factorial_recursive(num));
  keepGoing = prompt('keep going? (y/n): ')
} while ( keepGoing === 'y')
  
