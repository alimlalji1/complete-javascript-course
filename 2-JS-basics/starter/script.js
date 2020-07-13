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
