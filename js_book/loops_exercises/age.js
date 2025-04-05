let rlSync = require('readline-sync');
let age = Number(rlSync.question('What is your age? '));
let numYearsArr = [10, 20, 30, 40];

for (let i = 0 ; i < numYearsArr.length ; i++) {
  numYears = numYearsArr[i];
  ageInNumYears = age + numYears;
  console.log(`In ${numYears} years, you will be ${ageInNumYears} years old.`);
}
