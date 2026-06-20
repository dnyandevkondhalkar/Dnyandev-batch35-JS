// 1. push()
// Question 1:

// Create an empty array called fruits and add "Apple", "Mango", and "Banana" using push(). Print the array.

// Answer

let fruits = [];

fruits.push("Apple", "Mango", "Banana");

console.log(fruits);



// Question 2:

// Create an array cities = ["Mumbai"]. Add "Pune" and "Delhi" using push() and print the second city.

// Answer

let cities = ["Mumbai"];
cities.push("Pune", "Delhi");
console.log(cities);


// 2. pop()
// Question 1:

// Create an array [10, 20, 30, 40, 50]. Remove the last element using pop() and print both the removed element and updated array.

// Answer

let numbers = [10, 20, 30, 40, 50];
numbers.pop();
console.log(numbers);



// Question 2:

// Create an array of colors ["Red", "Blue", "Green"]. Remove the last two colors and print the remaining array.

// Answer


let colors = ["Red", "Blue", "Green"];
colors.pop();
colors.pop();
console.log(colors);



// 3. shift()
// Question 1:

// Create an array ["Virat", "Rohit", "Rahul"]. Remove the first player and print the removed player.

// Answer

let players = ["Virat", "Rohit", "Rahul"];
players.shift();
console.log(players);



// Question 2:

// Create an array [100, 200, 300, 400]. Remove the first element and print the updated array.

// Answer

let num = [100, 200, 300, 400];
num.shift();
console.log(num);




// 4. unshift()
// Question 1:

// Create an array [2, 3, 4]. Add 1 at the beginning using unshift().

// Answer

let num = [2, 3, 4];
num.unshift(1);
console.log(num);


// Question 2:

// Create an array ["B", "C", "D"]. Add "A" at the start and print the array.

// Answer

let letters = ["B", "C", "D"];
letters.unshift("A");
console.log(letters);

// 5. map()
// Question 1:

// Create an array [1, 2, 3, 4, 5]. Use map() to create a new array containing squares of all numbers.

// Answer

let num = [1, 2, 3, 4, 5];
const newNum = num.map(num => num * num);
console.log(newNum);


// Question 2:

// Create an array of prices [100, 200, 300]. Add 10% tax to each price using map().

// Answer


let prices = [100, 200, 300];
const gstPrices = prices.map(num => num * 1.10);
console.log(gstPrices);


// 6. filter()
// Question 1:

// Create an array [1,2,3,4,5,6,7,8]. Use filter() to get all even numbers.

// Answer

let num = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumber = num.filter(num => num % 2 === 0);
console.log(evenNumber)

// Question 2:

// Create an array [12, 45, 7, 89, 23]. Use filter() to get numbers greater than 20.

// Answer


let num = [12, 45, 7, 89, 23];
const greaterNum = num.filter(num => num > 20);
console.log(greaterNum);


// 7. filter() with Objects
// Question 1:
// const employees = [
//   { name: "Amit", active: true },
//   { name: "Riya", active: false },
//   { name: "John", active: true },
// ];

// Find all active employees.

// Answer


 const employees = [
  { name: "Amit", active: true },
  { name: "Riya", active: false },
  { name: "John", active: true },
];

const activeEmployees = employees.filter(employees => employees.active);
console.log(activeEmployees);



// Question 2:
// const products = [
//   { name: "Laptop", available: true },
//   { name: "Mobile", available: false },
//   { name: "TV", available: true },
// ];

// Find all available products.

// Answer


const products = [
  { name: "Laptop", available: true },
  { name: "Mobile", available: false },
  { name: "TV", available: true },
];

const availableProducts = products.filter(product => product.available);
console.log(availableProducts);





// 8. reduce() - Sum of Numbers
// Question 1:

// Use reduce() to find the sum of [5, 10, 15, 20].


// Answer

let numbers = [5, 10, 15, 20];
const sumOfNumbers = numbers.reduce((num, sum) => num + sum, 0);
console.log(sumOfNumbers);





// Question 2:

// Use reduce() to find the total of [100, 200, 300, 400].

// Answer

let num = [100, 200, 300, 400];
const totalOfNum = num.reduce((num, total) => num + total, 0);
console.log(totalOfNum);




// 9. reduce() - Cart Total
// Question 1:

// Calculate the total bill of cart items [500, 1200, 800].

// Answer


let bill = [500, 1200, 800];
const totalBill = bill.reduce((num, bill) => num + bill, 0);
console.log(totalBill);




// Question 2:

// Calculate the total salary from [25000, 30000, 40000].

// Answer


let salary = [25000, 30000, 40000];
const totalSalary = salary.reduce((sal, total) => sal + total, 0);
console.log(totalSalary)



// 10. reduce() - Count Elements
// Question 1:

// Count the number of elements in [1,2,3,4,5,6] using reduce().

// Answer

let numbers = [1, 2, 3, 4, 5, 6];
const numberOfElements = numbers.reduce(num => num + 1, 0);
console.log(numberOfElements);



// Question 2:

// Count the number of students in ["A", "B", "C", "D"] using reduce().

// Answer


let students = ["A", "B", "C", "D"];
const numberOfStudents = students.reduce(student => student + 1, 0);
console.log(numberOfStudents);




// 11. Ternary Operator ? :
// Question 1:

// Check whether 10 is greater than 5. Print "Yes" otherwise "No".


// Answer


let num = [10 > 5 ? "yes" : "no"];
console.log(num);



// Question 2:

// Check whether a number num = 15 is even or odd using the ternary operator.

// Answer

let num = 15;
const result = num % 2 === 0 ? "even" : "odd";
console.log(result);




// 12. reduce() - Find Maximum
// Question 1:

// Find the largest number in [5, 12, 8, 20, 3].

// Answer

let values = [5, 12, 8, 20, 3];
const largestNumber = values.reduce((max, value) =>
  value > max ? value : max
);

console.log(largestNumber);



// Question 2:

// Find the maximum marks from [67, 89, 45, 98, 76].

// Answer

let Marks = [67, 89, 45, 98, 76];
const maximumMarks = Marks.reduce((max, mark) => mark > max ? mark : max);

console.log(maximumMarks);



// 13. forEach()
// Question 1:

// Print double of every number in [2, 4, 6, 8] using forEach().

// Answer

let evenNums = [2, 4, 6, 8];

evenNums.forEach(num => (console.log(num * 2)));


// Question 2:

// Print the square of each number in [1, 2, 3, 4] using forEach().

// Answer

let Num = [1, 2, 3, 4];

Num.forEach(num => {console.log(num * num)});



// 14. at()
// Question 1:

// Create an array ["HTML", "CSS", "JavaScript"] and print the first element using at().

// Answer

let languages = ["HTML", "CSS", "JavaScript"];
console.log(languages.at(0));




// Question 2:

// Create an array [10, 20, 30, 40] and print the last element using at(-1).

// Answer

let numbers = [10, 20, 30, 40];
console.log(numbers.at(-1));



// 15. concat()
// Question 1:

// Combine [1,2,3] and [4,5,6] using concat().

// Answer

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

const combinedArray = arr1.concat(arr2);

console.log(combinedArray);





// Question 2:

// Combine ["HTML", "CSS"] and ["JS", "React"] into a new array.

// Answer

let arr1 = ["HTML", "CSS"];
let arr2 = ["JS", "React"];

const combinedArr = arr1.concat(arr2);

console.log(combinedArr);




// 16. find()
// Question 1:

// Find the first number greater than 50 in [10, 25, 60, 80, 40].

// Answer


let numbers = [10, 25, 60, 80, 40];
const greaterNum = numbers.find(num => num > 50);
console.log(greaterNum);



// Question 2:

// Find the first even number in [1, 3, 5, 8, 10].

// Answer

let numbers = [1, 3, 5, 8, 10];
const EvenNumber = numbers.find(num => num % 2 === 0);
console.log(EvenNumber);




// 17. findIndex()
// Question 1:

// Find the index of the first number greater than 20 in [5, 10, 25, 30, 15].


// Answer



let num = [5, 10, 25, 30, 15];
const index = num.findIndex(num => num > 20);
console.log(index);




// Question 2:

// Find the index of the first odd number in [2, 4, 6, 7, 8].

// Answer

let num = [2, 4, 6, 7, 8];
const index = num.findIndex(num => num % 2 !== 0);
console.log(index);




// 18. Array Index Access []
// Question 1:

// Create an array ["India", "USA", "Japan"] and print the first country.

// Answer

let countries = ["India", "USA", "Japan"];
console.log(countries[0]);

// Question 2:

// Create an array [100, 200, 300, 400] and print the third element.

// Answer

let numbers = [100, 200, 300, 400];
console.log(numbers[2]);