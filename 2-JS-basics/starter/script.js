/*************************************
8. Variables and data types
*/

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

// To show undefined data type - a variable with no value/non-existent value assosciated with it
var job;
console.log(job);

job = 'Teacher'
console.log(job);

// All variable names must start with $, _ or a letter
*/

/****************************************
9. Variable mutation and type coercion
*/

/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
// Using alert instead of console.log - returns a pop up on webpage - with sentence above

// Variable mutation - to change value of variable
age = 'twenty eight';
job = 'Driver';

var lastName = prompt('What is his last Name?');
// Prompt - Pop asking question - with input field where can type in lastName.
// On doing this - input stored in variable lastName and returned in console from below
console.log(firstName + ' ' + lastName);
*/

/******************************************
10. Basic Operators
*/

/*
var year, yearJohn, yearMark;
now = 2020;
// Question: Why no need for var ageJohn - it's a new variable. How does it work without?
ageJohn = 28;
ageMark = 33;

// Math Operators
yearJohn = now - 28;
yearMark = now - 33;

console.log(yearJohn);

console.log(now + 2);
console.log(now + 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/******************************************
11. Operator Precedence
*/

/*
var now = 2018;
var yearJohn = 1989;
// Age you become an adult (ie full age)
var fullAge = 18;

// Multiple operators

var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);
// Check 'Table' in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// Minus operator has precedence of 14; Greater than or Equal operator has precedence of 12;
// Minus operator has greater precedence than >=; Hence why now - yearJohn carried out first before comparison to fullAge
// Assignment operator (=) has precedence of 3 (lowest precedence) - assignment happens as last step - var isFullAge = true;


// Grouping

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
// Brackets necessary - think bodmas. Same principle with precedence.
console.log(average);

// Multiple assignments - e.g. assigning a value to 2 variables at the same time

var x, y;
x = y = (3+5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);
// Associativity: for assignment operator -  right to left
// Therefore, get result of 26, this assigned to y which is then assigned to x
// Left to right - would yield undefined for y (& x)

// More operators

x *= 2; // Same as x = x*2;
console.log(x);
x += 10;
console.log(x);
x++ // Same as x = x + 1; and so same as x+=1
console.log(x);
*/

/*****************************
* 12. CODING CHALLENGE 1
*/

/* Question
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

GOOD LUCK 😀
*/

/*
var massMark = 50;
var heightMark = 1.5;
var BMIMark = massMark/(heightMark * heightMark);
console.log(BMIMark); // 22.2

var massJohn = 75;
var heightJohn = 1.75;
var BMIJohn = massJohn/(heightJohn * heightJohn);
console.log(BMIJohn); // 24.5

var markHigherBMI = BMIMark > BMIJohn; // should return false
console.log("Is Mark's BMI higher than John's?" + " " + markHigherBMI);
*/

/*****************************
* 14. If/Else Statements
*/

/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married!')
} else {
  console.log(firstName + ' will hopefully marry soon :)');
};

var isMarried = true;
if (isMarried) {
  console.log(firstName + ' is married!')
} else {
  console.log(firstName + ' will hopefully marry soon :)');
};


var massMark = 50;
var heightMark = 1.5;
var BMIMark = massMark/(heightMark * heightMark);
console.log(BMIMark); // 22.2

var massJohn = 75;
var heightJohn = 1.75;
var BMIJohn = massJohn/(heightJohn * heightJohn);
console.log(BMIJohn); // 24.5

if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's");
} else {
  console.log("John's BMI is higher than Mark's");
};
*/

/*****************************
* 15. Boolean Logic
*/

/*
var firstName = 'John';
var age = 20;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // Between 13 and 20
  console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man.');
} else  {
  console.log(firstName + ' is a man.');
};
*/

/*****************************
* 16. Ternary Operators & Switch Elements
*/

/*
var firstName = 'John';
var age = 22;

// Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer': 'juice';
console.log(drink);
*/

/* Alternative
if (age >= 18) {
  var drink = 'beer';
} else {
  var drink = 'juice';
}
*/

/*
// Switch Statement
var job = 'instructor';
switch (job) {
  case 'teacher':
  case 'instructor':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + ' drives an uber in Lisbon.');
    break;
  case 'designer':
    console.log(firstName + ' designs beautiful websites.');
    break;
  default:
    console.log(firstName + ' does something else.');
}
*/

// Another Example of Switch Statement

// Objective: Rewrite the following using switch statement
/*if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // Between 13 and 20
  console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man.');
} else  {
  console.log(firstName + ' is a man.');
};
*/

/*
// Want to compare each of expressions below to true
age = 17;
switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young man.');
    break;
  default:
    console.log(firstName + ' is a man.');
};
*/

/*****************************
* 17. Truthy & Falsy Values and Equality Operators
*/

// falsy values: undefined, null, 0, '', NaN(not a number)
// truthy values: NOT falsy values

/*
var height;

// Remember - 0 is a falsy value. But in this context - want it to be defined - addition of || to if statement.
height = 23;

// This if/else - good way to check if variable is defined or not
if(height || height === 0) {
  console.log('Variable is defined');
} else {
  console.log('Variable is NOT defined');
};

// Equality Operators
// == converts '23' to a number and says it's the same as the 23 above (height = 23 - where data type is number)
if (height == '23') {
  console.log('The == operator does type coercion!');
}

// if used === - type coercion does not occur so wouldn't return string above. ie would be false.
*/

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

/*
var scoreJohn = (115 + 115 + 115)/3;
var scoreMike = (114 + 114 + 114)/3;
var scoreMary = (113 + 113 + 113)/3;
console.log(scoreJohn, scoreMike, scoreMary);

// if (scoreJohn === scoreMike) {
//   console.log("It's a tie!");
// } else if (scoreJohn < scoreMike) {
//   console.log("Mike's team wins with the highest average score");
// } else {
//   console.log("John's team wins with the highest average score");
// }

if (scoreMary > scoreJohn && scoreMary > scoreMike) {
  console.log("Mary's team wins with " + scoreMary + " points");
} else if (scoreJohn > scoreMary && scoreJohn > scoreMike) {
  console.log("John's team wins with " + scoreJohn + " points");
} else if (scoreMike > scoreMary && scoreMike > scoreJohn) {
  console.log("Mike's team wins with " + scoreMike + " points");
} else if (scoreMary === scoreJohn && scoreMary === scoreMike) {
  console.log("Three way tie!!");
} else if (scoreMary === scoreJohn && scoreMary > scoreMike) {
  console.log("Mary and Johns' teams tie");
} else if (scoreMary === scoreMike && scoreMary > scoreJohn) {
  console.log("Mary and Mikes' teams tie");
} else {
  console.log("John and Mikes' teams tie");
}
*/

/*****************************
* 20. Functions
*/

/*
function calculateAge(birthYear) {
  return 2020 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);


function  yearsUntilRetirement(birthYear, firstName) {
  var age = calculateAge(birthYear);
  var retirement = 65 - age;
  if (retirement > 0) {
  console.log(firstName + " retires in " + retirement + " years.");
  } else {
  console.log(firstName + " is already retired");
  }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/*****************************
* 21. Function Statements and Expressions
*/

/*
// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function Expression
var whatDoYouDo = function(job, firstName) {
  switch(job) {
    case 'teacher':
      return firstName + ' teaches kids how to code';
    case 'driver':
      return firstName + ' drives a cab in Lisbon';
    case 'designer':
      return firstName + ' designs beautiful websites';
    default:
      return firstName + ' does something else';
  }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));

// See notes re expression vs statement(declaration)
*/

/*****************************
* 22. Arrays
*/

/*
// Initialize new array
var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948);

console.log(names[0]); // "John"
console.log(names.length); // "John"

// Mutate array data
names[1] = "Ben";
names[names.length] = "Mary";
console.log(names);

// Different data types
var john = ["John", "Smith", 1990, "teacher", false];

john.push("blue");
john.unshift("Mr."); // Similar to push but adds to beginning of array

console.log(john);

john.pop(); // removes last element of array
john.pop();
john.shift(); // removes 1st element of array
console.log(john);

console.log(john.indexOf(1990)); // returns position of argument that we pass in inside this array
// Most useful feature of indexOf is to determine whether argument is present in array (see below)
console.log(john.indexOf(23)); // returns -1 => 23 is NOT in array - so indexOf returns -1.

var isDesigner = john.indexOf('designer') === -1 ? "John is NOT a designer" : "John IS a designer";
console.log(isDesigner); //
// Search for element "designer" in array - NOT in array.
// indexOf returns -1. So -1 === -1 => isDesigner variable assigned to "John is NOT a designer"
*/


/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

/*
function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return bill * percentage;
}

console.log(tipCalculator(124)); // 18.60
console.log(tipCalculator(48)); // 9.60
console.log(tipCalculator(268)); // 26.8

var bills = [124, 48, 268];
tipAmounts = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
// console.log(tipAmounts);

var totals = [bills[0] + tipAmounts[0], bills[1] + tipAmounts[1], bills[2] + tipAmounts[2]]
// console.log(totals);

console.log(tipAmounts, totals);
*/

/*****************************
* 25. Objects and Properties
*/

/*
// Object Literal - way of creating object with key-value pairs
var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false
};

// Ways to retrieve data from object
console.log(john.firstName); // "John"
console.log(john["lastName"]); // "Smith"
var x = "birthYear";
console.log(john[x]); // "1990"

// Mutate data in object (ie mutate values of keys)
john.job = "designer";
john["isMarried"] = true;
console.log(john);

// new Object syntax - alternate way of creating object with key-value pairs
var jane = new Object();
jane.name = "Jane";
jane.birthYear = 1969;
jane["lastName"] = "Smith"
console.log(jane);
*/

/*****************************
* 26. Objects and Methods
*/

/*
var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
  calcAge: function() {
      this.age = 2020 - this.birthYear;
  }
};

john.calcAge();
console.log(john);
*/

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

/*
var mark = {
  fullName: "Mark Watson",
  mass: 80,
  height: 1.8,
  calcBMI: function() {
    this.bmi = this.mass/(this.height * this.height)
    return this.bmi; // return included as asked for in challenge instructions
  }
};

var john = {
  fullName: "John Smith",
  mass: 100,
  height: 2,
  calcBMI: function() {
    this.bmi = this.mass/(this.height * this.height)
    return this.bmi; // return included as asked for in challenge instructions
    // return important to how below if/else has been constructed (ie if (mark.calcBMI() === john.calcBMI()) => method calls there)
    // read notes taken on udemy for explanation!
  }
};

// See Alim's notes now!
if (mark.calcBMI() === john.calcBMI() {
  console.log(mark.fullName + " and " + john.fullName + " have the same BMI of " + mark.bmi);
} else if (mark.bmi > john.bmi) {
  console.log(mark["fullName"] + " has the higher BMI of " + mark["bmi"]);
} else {
  console.log(john.fullName + " has the higher BMI of " + john["bmi"]);
}
*/

/*****************************
* 29. Loops and iteration
*/

/*
//For loop
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// What's happening exactly wrt for loop above:
// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to console, i++
// ...
// i = 9, 9 < 10 true, log i to console, i++
// i = 10, 10 < 10 FALSE, exit the loop!


var john = ["John", "Smith", 1990, "teacher", false, 'blue'];

for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

// while loop
var i = 0;
while (i < john.length) {
  console.log(john[i])
  i++;
}


// Continue and Break statements

// Continue
// Let's say hypotethically only wanted to log elements that are strings
// Can implement continue so if not a string - can quite iteration and ccntinue with next one
var john = ["John", "Smith", 1990, "teacher", false, 'blue'];

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue; // curly braces not needed as can go on one line
  console.log(john[i]);
}

// // Break
// //  In this example, as soon as encounters something not a string - breaks out of loop entirely
var john = ["John", "Smith", 1990, "teacher", false, 'blue'];

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break; // curly braces not needed as can go on one line
  console.log(john[i]);
}

// Looping backwards
var john = ["John", "Smith", 1990, "teacher", false, 'blue'];

for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}
*/

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/


var john = {
  bills: [124, 48, 268, 180, 42],
  calcTips: function () {
    this.tips = []
    this.totals = []

    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bill[i]

      if (bill < 50) {
        percentage = 0.2;
      } else if (bill > 50 && bill < 200) {
        percentage = .15;
      } else {
        percentage = 0.1;
      } // if-else statement
      this.tips[i] = bill * percentage;
      this.total[i] = bill + (bill * percentage);
    } // for loop
  } // function
}// object

console.log(john);

var mark = {
  bills: [77, 375, 110, 45],
  calcTips: function () {
    this.tips = []
    this.totals = []

    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bill[i]

      if (bill < 100) {
        percentage = 0.2;
      } else if (bill > 100 && bill < 300) {
        percentage = .1;
      } else {
        percentage = 0.25;
      } // if-else statement
      this.tips[i] = bill * percentage;
      this.total[i] = bill + (bill * percentage);
    } // for loop
  } // function
}// object

