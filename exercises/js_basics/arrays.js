console.log();
console.log('1. first element');
function first(arr) {
  return arr[0];
}

let arr1 = ['Earth', 'Moon', 'Mars'];
console.log(first(arr1));

console.log();
console.log('2. last element');
function last(arr) {
  return arr[arr.length - 1];
}

console.log(last(arr1));

console.log();
console.log('3. add/delete');
let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
energy.splice(0, 1);
energy.push('geothermal');
console.log(energy);

console.log();
console.log('4. alphabet');
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
alphabet = alphabet.split('');
console.log(alphabet);

console.log();
console.log('5. filter');
let scores = [96, 47, 113, 89, 100, 102];
let counter = 0;
scores.forEach(n => {
  if (n >= 100) {
    counter++
  }
})
console.log(counter);

console.log();
console.log('6. vocabulary');
let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

function logSubArrays(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr[i].length - 1; j++) {
      console.log(arr[i][j]);
    }
  }
}

logSubArrays(vocabulary);

console.log();
console.log('7. equality');
let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);
// these are not equal because they point to different locations in memory

console.log();
console.log('8. type');
function filter(input) {
  // Is input an array?
  console.log(Array.isArray(input));
}

filter(array1);

console.log();
console.log('9. travel');
let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(str, arr) {
  let presence = arr.indexOf(str);
  if (presence === -1) {
    console.log('the array does not contain: ' + str);
  } else {
    console.log(str + ' is at index ' + presence + ' of the array');
  }
}

contains('Barcelona', destinations); // true
contains('Nashville', destinations); // false

console.log();
console.log('10. passcode');
let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

let passcodeStr = passcode.join('-');
console.log(passcodeStr);

console.log();
console.log('11. grocery list');
let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

while (groceryList.length > 0) {
  console.log(groceryList.pop());
}
// using shift instead of pop will remove elements in the opposite order

