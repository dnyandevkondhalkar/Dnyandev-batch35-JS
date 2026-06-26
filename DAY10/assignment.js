// Question 1

// Use nested loops to print the following pattern:

// 11
// 12
// 21
// 22

// for (i = 1; i <= 2; i++){
//     // console.log(i);
//     for (j = 1; j <= 2; j++){
//         console.log(j);

//     }
    
// }


for(let i = 1; i <= 2; i++)
{
    for(let j = 1; j <= 2; j++)
    {
        console.log(i + "" + j);
    }
}






// Question 2

// Use nested loops to print:

// 111
// 222
// 333



for (let i = 1; i <= 3; i++) {
    let output = "";

    for (let j = 1; j <= 3; j++) {
        output = output + i;
    }
    console.log(output);
}
    









// Question 3

// Find the smallest number from the array using nested loops.

// let numbers = [45, 12, 78, 23, 9, 56];

let numbers = [45, 12, 78, 23, 9, 56];
let smallestNum = 0;

for (i = 0; i < numbers.length; i++){
    // console.log(numbers[i]);
    for (j = i + 1; j < numbers.length; j++){
        // console.log(numbers[j])
        if (numbers[i] > numbers[j]) {
            smallestNum = numbers[j];

        }
    }

}
console.log(smallestNum, "smallestNum");






// Question 4

// Count how many times each pair is formed using nested loops.

// Example Output:

// 1 1
// 1 2
// 1 3
// 2 1
// 2 2
// 2 3
// 3 1
// 3 2
// 3 3

for (i = 1; i <= 3; i++){
    // console.log(i);
    for (j = 1; j <= 3; j++){
        console.log(i,j);


    }

}











// While Loop Questions
// Question 5

// Print numbers from 1 to 20 using a while loop.

let i = 1;
 
while (i <= 20) {
    console.log(i)
    i++;
    
}










// Question 6

// Print numbers from 20 to 1 using a while loop.


let i = 20;

while (i >= 1) {
    console.log(i);
    i--;
    
}








// Question 7

// Find the sum of numbers from 1 to 10 using a while loop.

// Expected Output:

// 55

let i = 1;
let sumOfNum = 0;

while (i <= 10) {
    if (i + 1) {
        sumOfNum = sumOfNum + i;
        i++;
    }
    
}
console.log(sumOfNum, "Total");







// Question 8

// Count how many even numbers exist between 1 and 50 using a while loop.

let i = 1;
let evenNum = 0;

while (i <= 50) {
    if (i % 2 == 0) {
        evenNum++;
        
    }
    i++;
}

console.log(evenNum,"Total");








// Object Questions
// Question 9

// Create an object named student with the following properties:

// name
// age
// course
// city

// Print:

// Entire object
// Student name
// Student course



var student = {
    name: "Dnyandev",
    age: 23,
    course: "MERN stack",
    city: "mumbai"
}

console.log(student);
console.log(student.name, "name");
console.log(student.course, "course");







// Question 10

// Create the following object:

// const company = {
//   name: "Tech Solutions",
//   employees: 100,
//   location: "Mumbai",
//   departments: ["HR", "Development", "Sales"]
// };

// Print:

// Company name
// Location
// Last department

const company = {
name: "Tech Solutions",
employees: 100,
location: "Mumbai",
departments: ["HR", "Development", "Sales"]
};

console.log(company["name"]);
console.log(company["location"]);
console.log(company.departments[company.departments.length - 1]);





// Bonus Questions





// Bonus 1

// Create the following object:

// const mobile = {
//   brand: "Samsung",
//   model: "S25",
//   price: 85000
// };

// Print all properties using both:

// mobile.brand
// mobile["brand"]

const mobile = {
  brand: "Samsung",
  model: "S25",
  price: 85000
};

console.log(mobile.brand);
console.log(mobile.model);
console.log(mobile.price);

console.log(mobile["brand"]);
console.log(mobile["model"]);
console.log(mobile["price"]);





// Bonus 2

// Create an object with a function:

// const person = {
//   name: "Rahul",
//   age: 25,
//   greet: function () {
//     return this.name;
//   }
// };

// Call the function and print the returned value.

const person = {
  name: "Rahul",
  age: 25,
  greet: function () {
    return this.name;
  }
};

console.log(person.greet);
console.log(person.greet());





// Bonus 3

// Find the biggest number from the array using nested loops.

// let numbers = [12, 34, 56, 78, 90, 23, 45];

let numbers = [12, 34, 56, 78, 90, 23, 45];
let biggestNum = 0;

for (i = 0; i < numbers.length; i++){
    // console.log(numbers[i],"i")

    for (j = i + 1; j < numbers.length; j++){
        // console.log(numbers[j],"j")

        if (numbers[i] > numbers[j]) {
            biggestNum = numbers[i];
               
           }
       }
        
    }

console.log(biggestNum,"biggest Number");









// Bonus 4

// Print the following pattern using nested loops:

// *
// **
// ***
// ****
// *****


for (i = 1; i <= 5; i++){
    let pattern = "";
    // console.log(i)
    for (j = 1; j <= i; j++){
        pattern += "*";
        
    }
console.log(pattern);
}







