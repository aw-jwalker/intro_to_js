let rlSync = require('readline-sync');
let firstName = rlSync.question("What's your first name?\n");
let lastName = rlSync.question("What's your last name?\n");
let fullName = firstName + " " + lastName;
let timeOfDayArr = ['Morning', 'Afternoon', 'Evening'];

for (let i = 0 ; i < timeOfDayArr.length ; i++) {
  timeOfDay = timeOfDayArr[i];
  console.log(`Good ${timeOfDay}, ${fullName}`);
}
