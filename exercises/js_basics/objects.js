console.log();
console.log('get a value 1:');
let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};
console.log(student.courses);

console.log();
console.log('get a value 2:');
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
};
console.log(jane.location.country);

console.log();
console.log('add property:');
let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

// Add property 'age'.
// Add property 'favorite food'.
fido.age = 2;
fido['favorite food'] = 'pizza';

console.log();
console.log('from jane:');
jane.greet = function(name) {
  console.log(`Hey ${name}!`);
}
jane.greet('Bobby');

console.log();
console.log('dot vs bracket:');


console.log();
console.log('true?:');
let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

console.log();
console.log('car keys:');
let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};
console.log(Object.keys(vehicle));

console.log();
console.log('object to array:');
console.log(Object.entries(vehicle));

console.log();
console.log('array to object:');
let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
let person = {};
for (let i = 0; i < nestedArray.length; i++) {
  let pair = nestedArray[i];
  person[pair[0]] = pair[1];
}

console.log(person);

console.log();
console.log('clone a person:');
function clone(obj) {
  return(Object.assign({}, obj));
}

let person2 = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person2);
person2.age = 34;

console.log(person2.age);       // 34
console.log(clonedPerson.age); // 33

person2.name.isStageName = false;
console.log(person2.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false


