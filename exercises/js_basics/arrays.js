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

console.log();
console.log('9. travel');

console.log();
console.log('10. passcode');

console.log();
console.log('11. grocery list');


