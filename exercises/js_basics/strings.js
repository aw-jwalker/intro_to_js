console.log();
console.log('1. length');
console.log("These aren't the droids you're looking for.".length);

console.log();
console.log('2. all caps');
console.log('confetti floating everywhere'.toUpperCase());

console.log();
console.log('3. repeat');
function repeat(n, str) {
  let repeated = '';
  while (n > 0) {
    repeated += str;
    n--;
  }
  return repeated;
}

console.log(repeat(3, 'ha'));

console.log();
console.log('4. multiline string');
let multiLineStr = 'A pirate I was meant to be!\nTrim the sails and roam the sea!';

console.log(multiLineStr);

console.log();
console.log('5. case insensitive equality');
function caseInsensitiveEquality(a, b, c) {
  a.toUpperCase() === b.toUpperCase() ? console.log('a = b') : console.log('a != b');
  a.toUpperCase() === c.toUpperCase() ? console.log('a = c') : console.log('a != c');
  b.toUpperCase() === c.toUpperCase() ? console.log('b = c') : console.log('b != c'); 
}

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

caseInsensitiveEquality(string1, string2, string3);

console.log();
console.log('6. contains character');
let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
console.log('string contains "x": ' + byteSequence.includes('x'));

console.log();
console.log('7. blank ver 1');
function isBlank(str) {
  return (str.length === 0);
}

console.log(isBlank('mars'));
console.log(isBlank(' '));
console.log(isBlank(''));

console.log();
console.log('8. blank ver 2');
function isBlank(str) {
  return (str.trim().length === 0);
}

console.log(isBlank('mars'));
console.log(isBlank(' '));
console.log(isBlank(''));


console.log();
console.log('9. capitalize words');
let string = 'launch school tech & talk';
let words = string.split(' ');
let capitalizedWords = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];

  capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
}

capitalizedWords.join(' '); // 'Launch School Tech & Talk'

