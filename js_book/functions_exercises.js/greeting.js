/*function greetPeople(greetingMessage) {
  console.log(greetingMessage);
}

greetPeople("good morning");

let rlSync = require('readline-sync');
let firstName = () => rlSync.question('What is your first name? ');
let lastName = () => rlSync.question('What is your last name? ');
let fullName = (firstName, lastName) => firstName() + " " + lastName();
let greeting = (fullName) => console.log(`Hello ${fullName}, good day`);

greeting(fullName(firstName,lastName));
*/
let rlSync = require('readline-sync');

let greeting2 = function() {
  let firstName = () => rlSync.question('What is your first name? ');
  let lastName = () => rlSync.question('What is your last name? ');
  function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
  }
  fullName = getFullName(firstName, lastName);
  console.log(`Hello ${fullName}, good day`);
  return
}

greeting2();



function getName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);
