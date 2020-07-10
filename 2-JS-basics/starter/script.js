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
