console.log();
console.log('1. greet 1');

function greet(greeting = 'Hello', recipient = 'world') {
  console.log(greeting + ' ' + recipient);
}

greet('Salutations'); // logs: Salutations, world!
greet('Good morning', 'Launch School');
greet();              // logs: undefined, world!
                      // should log: Hello, world!

console.log();
console.log('2. greet 2');
function greet(greeting = 'Hello', recipient = 'world') {
  console.log(greeting + ' ' + recipient);
}

greet('Salutations');
greet('Good morning', 'Launch School');
greet();

console.log();
console.log('3. greet 3');
function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet() {
  console.log(greeting() + ' ' + recipient());
}

console.log();
console.log('4. calculate bmi');
function calculateBMI(heightInCentimeters, weightInKilograms) {
  let heightInMeters = heightInCentimeters / 100;
  let bmi = weightInKilograms / heightInMeters**2;

  return bmi.toFixed(2);
}

console.log(calculateBMI(180, 80));

console.log();
console.log('5. calculate cat age');
function catAge(humanAge) {
  let catYears = 0;
  if (humanAge >= 1) { catYears += 15; }
  if (humanAge >= 2) { catYears += 9; }
  if (humanAge > 2) { catYears = catYears + (4 * (humanAge - 2)); }
  return catYears;
}

console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32

console.log();
console.log('6. remove last char');
function removeLastChar(string) {
  return string.substring(0, string.length - 1);
}

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'

console.log();
console.log('7. arrow fns 1');
const template = 'I VERB NOUN.';
let sentence = (verb, noun) => template.replace('VERB', verb).replace('NOUN', noun);
console.log(sentence('like', 'birds'));

console.log();
console.log('8. arrow fns 2');
let initGame1 = function () {
  return {
    level: 1,
    score: 0
  }
};

let initGame = () => ({level: 1, score: 0});

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);

