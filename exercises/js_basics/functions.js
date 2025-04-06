console.log();
console.log('1. sum');
function sum(a, b) {
  return a + b
}
console.log(sum(22, 10));

console.log();
console.log('2. log quote');
function brendanEichQuote() {
  return console.log('Always bet on JavaScript');
}

brendanEichQuote();

console.log();
console.log('3. cite the author');
function cite(author, quote) {
  return console.log(`${author} said: "${quote}"`);
}

cite('Brendan Eich', 'Always bet on JavaScript.');

console.log();
console.log('4. squared number');
function squaredNumber(n) {
  return n ** 2;
}

console.log(squaredNumber(3));

console.log();
console.log('5. display division');
function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 155555; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree; // 24/8 27/9 21/7 etc etc

console.log();
console.log('6. 3 way comparison');
function compareByLength(a, b) {
  let comparison = 0;
  if (a.length < b.length) {
    comparison = -1;
  } else if (b.length < a.length) {
    comparison = 1;
  } else {
    comparison = 0;
  }
  console.log('compare: ' + a + ' and ' + b);
  console.log(comparison);
  return comparison
}

compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0

console.log();
console.log('7. transformation');
function substituteJavaScript(a) {
  let strArr = a.split(" ");
  strArr[1] = 'JavaScript';
  return strArr[0] + " " + strArr[1]
}

console.log(substituteJavaScript('Captain Ruby'));

console.log();
console.log('8. internationalization 1');

console.log();
console.log('9. locale 1');

console.log();
console.log('10. locale 2');

console.log();
console.log('11. internationalization 2');
