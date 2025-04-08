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
console.log();
console.log();
console.log();
console.log();
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

function greet(languageCode) {
  switch (languageCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}

console.log(greet('sv'));

console.log();
console.log('9. locale 1');
function extractLanguage(locale) {
  return (locale.split('_')[0]);
}
console.log(extractLanguage('en_US.UTF-8'));  // 'en'
console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'

console.log();
console.log('10. locale 2');
function extractRegion(locale) {
  return(locale.split('.')[0].split('_')[1]);
}
console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'

console.log();
console.log('11. internationalization 2');
function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  switch (region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet(language);
  }
}
