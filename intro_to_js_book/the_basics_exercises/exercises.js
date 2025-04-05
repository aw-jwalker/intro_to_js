console.log();
console.log("Exercise 1");
console.log("Jackson" + " " + "Walker");

console.log();
console.log("Exercise 2: Extract each individual digit of the number");
num = 4936;
console.log("the number is: " + num);
//extract the first digit
ones = (num % 10);
console.log("the first digit is: " + ones);
// extract the second digit
// num % 100 - ones / 10
tens = ((num % 100) - ones) / 10;
console.log("the second digit is: " + tens);
huns = ((num % 1000) - (10*tens) - ones) / 100;
console.log("the third digit is: " + huns);
thous = ((num % 10000) - (100*huns) - (10*tens) - ones)/ 1000;
console.log("the fourth digit is: " + thous);
console.log("put it back together!: " + thous + huns + tens + ones);

console.log();
console.log("Exercise 3");

console.log("Exercise 4: explain why this is 510 and not 15");
console.log("console.log\('5' + 10\)");
console.log("because 5 is a string and ten is an integer");
console.log();
console.log("Exercise 5: refactor so it shows 15");
num = Number('5') + 10;
console.log("refactored result: " + num);
console.log();
console.log("Exercise 6: use string interpolation")
console.log(`Number('5') + 10 = ${num}`);
console.log();
console.log("Exercise 7: What happens when you access arrays wrongly")
let foo = ['a', 'b', 'c'];
console.log("length of foo: " + foo.length);
console.log("last element of foo: " + foo[foo.length - 1]);
console.log('what is foo[3]?: ' + foo[3]);
console.log();
console.log("Exercise 8: Create an array of pet names")
let names = ['blue', 'odin', 'fenrir', 'lucky', 'bunny'];
console.log("here are some pet names: " + names);
console.log();
console.log("Exercise 9: object of names and animals")
let pets = {
  blue : 'dog',
  odin : 'dog',
  fenrir : 'dog',
  lucky : 'dragon',
  bunny : 'thestral',
}
console.log("object of pets:");
console.log(pets);
console.log();
console.log("the rest of the exercises are just comparing strings and stuff");
console.log("Exercise 10")
console.log();
console.log("Exercise 11")
console.log();
console.log("Exercise 12")
console.log();
