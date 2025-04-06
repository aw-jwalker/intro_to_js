console.log();
console.log('truth vs falsy:');
let falsyValues = ['false', 'null', 'undefined', 'NaN', '0', '-0', '0n (BigInt zero)', '""'];
console.log('falsy values: ' + falsyValues);

console.log();
console.log('yes no pt1:');
let randomNumber = Math.round(Math.random());

if (randomNumber == 0) {
  console.log('No.');
} else {
  console.log('Yes!');
}

console.log();
console.log('yes no pt2:');
(randomNumber == 0) ? console.log('No.') : console.log('Yes!');
// textbook solution:
console.log(randomNumber ? 'Yes!' : 'No.');

console.log();
console.log('check the weather, pt1:');

let rls = require('readline-sync');
let weather = rls.question('what is the weather like today? (sunny, rainy, other): ');

/*
if (weather === 'sunny') {
  console.log('its a beautiful day!');
} else if (weather === 'rainy') {
  console.log('grab your umbrella.')
} else {
  console.log('lets stay inside');
}
*/

console.log();
console.log('check the weather, pt2:');
let response = '';
switch (weather) {
  case 'sunny' :
    response = 'its a beatiful day';
    break
  case 'rainy' :
    response = 'grab your umbrella';
    break
  default :
    response = 'lets stay inside';
    break
}
console.log(response);

console.log();
console.log('are we moving:');

