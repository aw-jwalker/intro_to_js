let person = {
  name: 'Bob',
  occupation: 'web developer',
  hobbies: 'painting',
};

console.log('the name of the person is: ' + person.name);

// js coerces non-string key values into strings, observe:
let myObj = {}
myObj[true] = 'hello'
myObj['true'] = 'world'
console.log(myObj[true])
// outputs 'world'

console.log();
console.log('exercise 3:');
let myArray = {
  0: 'bread',
  1: 'apple',
  2: 'beef',
  3: 'carrot',
  4: 'milk',
  length: 5,
};
// adding `length: 5` to the end of the object is the same as `myArray.length = 5;`

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

console.log();
console.log('exercise 4:');
// create an array of the keys from obj, with the keys converted to uppercase

let objA = {
  b: 2,
  a: 1,
  c: 3,
};

function getUpperArrKeysObj (obj) {
  let arrKeysObj = Object.keys(obj);
  let upperArrKeysObj = arrKeysObj.map(n => n.toUpperCase());
  return upperArrKeysObj
}

let upperArrKeysObjA = getUpperArrKeysObj(objA);
console.log('here is the array of upper case keys: ');
console.log(upperArrKeysObjA);

console.log();
console.log('exercise 5:');
// create a new object that uses an object as its prototype

let myProtoObjA = {
  foo: 1,
  bar: 2,
};
let myObjA = Object.create(myProtoObjA);

console.log();
console.log('exercise 7:');
// add a qux property to myObjA

myObjA.qux = 3;

