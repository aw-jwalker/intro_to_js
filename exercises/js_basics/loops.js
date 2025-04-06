console.log();
console.log('loop and log:');
for (let i = 0; i <= 10; i += 2) {
  console.log('current value of i: ' + i);
}


console.log();
console.log('countdown:');
for (let i = 10; i >= 1; i -= 1) {
  console.log(i);
}
console.log('Launch!');

console.log();
console.log('triple greeting:');

let greeting = 'Aloha!';
for (let i = 0; i <= 2; i++) {
  console.log(greeting);
}

console.log();
console.log('take two:');
for (let i = 1; i <= 100; i++) {
  // console.log(i * 2);
}

console.log();
console.log('looping over array elements:');
let array = [1, 2, 3, 4];
let index = 0;

while (index < 4) {
  console.log(array[index]);
  index++
}

console.log();
console.log('continue:');
let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === null) {
    continue
  }
  console.log(cities[i].length);
}

console.log();
console.log('on and on:');

for (let i = 0; i < 3 ; i += 1) { // loops forever because there is no end condition
  console.log("and on");
}

console.log();
console.log('thats odd:');
// while loop that logs all odd numbs up to 40

function thatsOdd() {
  let i = 0;
  while (i <= 40) {
    if (i % 2 !== 0) {
      console.log(i);
    }
    i++;
  }
}

thatsOdd();

console.log();
console.log('finding nemo:');
let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let i = 0; i < fish.length; i++) {
  console.log(fish[i]);
  if (fish[i] === 'Nemo') {
    i = fish.length; // probably should have used `break` here instead
  }
}

console.log();
console.log('do while:');
// the difference between the following to is that do whiles always run once
let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);


