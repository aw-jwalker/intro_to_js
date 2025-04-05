// function declaration
// can be called before its declared
function functionName(zeroOrMoreArguments...) {
  // function body
}

greetPeople();

function greetPeople() {
  console.log("Good Morning!");
}

//function expression
//declare a variable, let x =, then put the function expression in the variable definition
// anytime the word function is not at the very beginning of the expression 

let greetPeople = function() {
  console.log('Good morning!');
};

// this also applies to higher order functions:
function makeGreeter(name) {
  return greeter() {
    console.log(`Hello ${name}`);
  };
};

// There are also arrow functions
// I don't really get why they are useful, I guess implicit returns is nice

let greetPeople = () => console.log("Good morning!");
greetPeople();

// this only works in a browser
let add = (a, b) => a + b;
let getNumber = (text) => {
  let input = prompt(text);
  return Number(input);
};

let number1 = getNumber("Enter a number: ");
let number2 = getNumber("Enter another number: ");
console.log(add(number1, number2));


