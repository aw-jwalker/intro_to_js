/*
// user input setup
let rls = require('readline-sync');

function prompt(prompt) {
  return rls.question(prompt)
}

// let input = prompt('Give me some input: ');


let array = [1, 2, 3];
console.log(array);

array[1] = 4;
console.log(array);

array[array.length] = 10;
console.log(array);

// object freeze makes array immutable
const myArray = Object.freeze([1, 2, 3, Object.freeze([1, 3, 5]), 4]);
console.log(myArray);

// add elements with push
array.push('a', 'xyz', null);
console.log(array);

array.concat('con', 'cat');
console.log(array);

array.pop();
console.log(array);

array.splice(3, 2); // delete two elements, starting at index 3 (aka position 4)
console.log(array);
// splice can also be used to add and insert elements

// a callback function is a function that you pass as an argument to another function. The subsequent function
// forEach requires a function as an argument, so forEach "calls back to" the arg function. 
// its read like, "execute this function for each element of the array"

array.forEach(function(n) {
  console.log('with function expression: ' + n);
});

// use an arrow function to make it more readable
array.forEach(n => console.log('with arrow function: ' + n));

//use array.map() to define a new array from an old one, rather than defining an empty array then populating it
let numbers = [1, 2, 3, 4]
let squares = numbers.map(n => n * n);
console.log('squares: ' + squares);

// use array.filter(), should be a logical operator, like n < 4 or something
let oddSquares = squares.filter(n => n % 2 !== 0);
console.log('odd squares: ' + oddSquares);

// array.reduce() is a the fundamental building block for map() and forEach() and other iterative array methods
// reduce takes a callback and an initializer for the "accumulator". Then the callback function takes the current accu. value and the current array element
let sumOfSquares = squares.reduce((accumulator, element) => accumulator + element, 0); // 0 is the initial value for the accumulator
console.log('summed squares: ' + sumOfSquares);

let productOfSquares = squares.reduce((acc, n) => acc * n, 1);
console.log('multiplied squares: ' + productOfSquares);

// reduce can also be used to combine and modify strings

let strings = ['m', 'a', 'i', 's', 'i', 'e'];
let concatStrings = strings.reduce((acc, e) => {
  return acc + e.toUpperCase()
}, '');
console.log('concatenated strings: ' + concatStrings);

typeof strings; // returns 'object'
Array.isArray(strings); // returns 'true', aka it is an array

// you can use array.length = x to change the length of an array, which can truncate or expand it, but can also lead to strange behavior
// also, if you add an element to an array with an atypical index, it will look like a key value pair

strings['key'] = 'value'; // adds "key: value" to the array, instead of just 'value' at some normal index
// key value pairs within arrays DO NOT count toward the length of the array

strings.includes('m'); // checks if 'm' is in strings, returns true


let mySecondArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];
console.log('Even values from myArray:');
let evenMySecondArray = mySecondArray.forEach(function(value) {
  value.forEach(function(n) {
    if (n % 2 === 0) {
      console.log(n);
    }
  })
})

let myThirdArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
console.log('before map: ' + myThirdArray);

let oddnessMyThirdArray = myThirdArray.map(function(n) {
  if (n % 2 === 0) {
    return 'even'
  } else { 
    return 'odd'
  }
});
console.log('after map: ' + oddnessMyThirdArray);
*/

// we have to build a find integers function that takes an array and returns it with only integers left
console.log('find integers: ');
function findIntegers(array) {
  return array.filter(function(n) {
    return Number.isInteger(n);
  })
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]

console.log('find odd string lengths:');
function oddLengths(arr) {
  let arrLengths = arr.map(n => n.length);
  let arrOddLengths = arrLengths.filter(n => n % 2 !== 0);
  return arrOddLengths
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log('Array of odd string lengths: ' + oddLengths(arr)); // => [1, 5, 3]

console.log('square and sum array elements:');
function sumOfSquares(arr) {
  let squares = arr.map(n => n * n);
  let sumSquares = squares.reduce((accumulator, element) => accumulator + element, 0); // 0 is the initial value for the accumulator
  return sumSquares
}

let array = [3, 5, 7];
console.log('the array is: ' + array);
let arraySumOfSquares = sumOfSquares(array);
console.log('the sum of its squares: ' + arraySumOfSquares); // => 83


// challenge exercise: Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method. Use an array as the accumulator. Ideally, you should be able to use the return value of reduce as the return value of the function.

function oddLengthsReduced(arr) {
  arr.reduce((acc, e) => 
}



let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengthsReduced(arr)); // => [1, 5, 3]
