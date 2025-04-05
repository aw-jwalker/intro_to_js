let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
let index = 0;

while (index < names.length) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index++
}

console.log(upperNames);

upperNames = [];

for (let index = 0; index < names.length; index++) {
  if (names[index] === 'Naveed') {
    continue;
  }

  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames);

// user input setup
let rls = require('readline-sync');

function prompt(prompt) {
  return rls.question(prompt)
}

let answer;

do {
  answer = prompt("Do you want to do that again? (y): ");
} while (answer === 'y');
