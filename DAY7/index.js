// 1. every()
// Question 1:

// Create an array [10, 20, 30, 40]. Check if every number is less than 50.


// Answer
const isBelowThreshold = (num) => num < 50;

const num = [10, 20, 30, 40];

console.log(num.every(isBelowThreshold));


// Question 2:

// Create an array [18, 22, 25, 16, 30]. Check if every student is eligible to vote (age >= 18).

// Answer


const isBelowThreshold = (age) => age >= 18;

const age = [18, 22, 25, 16, 30];

console.log(age.every(isBelowThreshold));




// 2. fill()
// Question 1:

// Create an array [1, 2, 3, 4, 5]. Replace all elements with 0 using fill().

// Answer


const numbers = [1, 2, 3, 4, 5];
console.log(numbers.fill(0));


// Question 2:

// Create an array ["A", "B", "C", "D", "E"]. Replace only "B" and "C" with "X" using fill().

// Answer

const array = ["A", "B", "C", "D", "E"];
console.log(array.fill("X", 1, 3));

// 3. findLast()
// Question 1:

// Create an array [12, 45, 78, 23, 90, 34]. Find the last number greater than 50.

// Answer


const numbers = [12, 45, 78, 23, 90, 34];
const lastelementupdate = numbers.findLast((ele) => ele > 50);
console.log(lastelementupdate, "ele");

// Question 2:

// Create an array [5, 8, 11, 14, 17, 20]. Find the last even number.

// Answer

const numbers = [5,8,11,14,17,20];
const output = numbers.findLast((num) => num % 2 === 0);
console.log(output, "output");


// 4. findLastIndex()
// Question 1:

// Create an array [10, 20, 30, 40, 50, 60]. Find the index of the last number greater than 35.

// Answer

const numbers = [10, 20, 30, 40, 50, 60];
const lastelementupdate = numbers.findLastIndex((ele) => ele > 35);
console.log(lastelementupdate, "ele");




// Question 2:

// Create an array [1, 3, 5, 8, 7, 10]. Find the index of the last even number.

// Answer


const numbers = [1,3,5,8,7,10];
const output = numbers.findLastIndex((num) => num % 2 === 0);
console.log(output);



// 5. includes()
// Question 1:

// Create an array ["HTML", "CSS", "JavaScript"]. Check whether "React" exists in the array.


// Answer

var array = ["HTML", "CSS", "JavaScript"];
console.log(array.includes("React"));


// Question 2:

// Create an array [100, 200, 300, 400]. Check whether 300 exists in the array.


// Answer

const numbers = [100, 200, 300, 400];
console.log(numbers.includes(300));



// 6. join()
// Question 1:

// Create an array ["Virat", "Rohit", "Rahul"]. Join all names using " | " as the separator.

// Answer

const array = ["Virat", "Rohit", "Rahul"];
console.log(array.join("|"));



// Question 2:

// Create an array ["M", "E", "R", "N"]. Join all letters without any separator to form a word.

// Answer


const array = ["M", "E", "R", "N"];
console.log(array.join(""));



// 7. lastIndexOf()
// Question 1:

// Create an array ["apple", "banana", "apple", "orange", "apple"]. Find the last index of "apple".

// Answer

const fruits = ["apple","banana","apple","orange","apple"]
const output = fruits.lastIndexOf("apple");
console.log(output, "output");



// Question 2:

// Create an array [10, 20, 30, 20, 40, 20]. Find the last index of 20.


// Answer

const numbers = [10,20,30,20,40,20];
const output = numbers.lastIndexOf(20);
console.log(output, "output");



// 8. reverse()
// Question 1:

// Create an array [1, 2, 3, 4, 5]. Reverse the array and print it.

// Answer

const numbers = [1,2,3,4,5];
const output = numbers.reverse();
console.log(output, "output");



// Question 2:

// Create an array ["HTML", "CSS", "JavaScript"]. Reverse the order of technologies.


// Answer

const array = ["HTML", "CSS", "JavaScript"];
const reversed = array.reverse();
console.log(reversed);


// 9. slice()
// Question 1:

// Create an array ["A", "B", "C", "D", "E"]. Extract "C" and "D" using slice().


// Answer

const array = ["A", "B", "C", "D", "E"];
console.log(array.slice(2, 4));




// Question 2:

// Create an array [10, 20, 30, 40, 50, 60]. Extract the last three elements using slice().

// Answer

const numbers = [10,20,30,40,50,60];
const output = numbers.slice(-3);
console.log(output, "output");




// 10. splice()
// Question 1:

// Create an array ["Jan", "Mar", "Apr"]. Insert "Feb" at the correct position using splice().

// Answer

const months = ["Jan","Mar","Apr"];
const output = months.splice(1,0,"Feb");
console.log(months, "months");

// Question 2:

// Create an array ["HTML", "CSS", "PHP"]. Replace "PHP" with "JavaScript" using splice().

// Answer


const array = ["HTML", "CSS", "PHP"];
array.splice(2, 3, "JavaScript");
console.log(array);



// 11. toString()
// Question 1:

// Create an array [1, 2, 3, 4, 5]. Convert the array into a string using toString().

// Answer

const number = [1, 2, 3, 4, 5];
console.log(number.toString());



// Question 2:

// Create an array ["HTML", "CSS", "JavaScript"]. Convert it into a string and print the result.

// Answer

const languages = ["HTML","CSS","JavaScript"];
const output = languages.toString();
console.log(output, "output");




