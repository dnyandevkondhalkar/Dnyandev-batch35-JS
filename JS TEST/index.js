// For Loop Questions
// Question 1
// Print numbers from 100 to 1 using a for loop.

for (i = 100; i >= 1; i--){
    console.log(i);

}


// Question 2
// Print all numbers between 1 and 100 that are divisible by 7.

for (i = 1; i <= 100; i++){
    if (i % 7 == 0) {
        console.log(i);
        
    }

}




// Question 3
// Find the sum of all odd numbers between 1 and 50.

let sum = 0;
for (i = 1; i <= 50; i++){
    if (i % 2 == 1) {
       sum = sum + i;
    }
}
console.log(sum);



// Question 4
// Print the multiplication table of a user-given number.

// Example:

// Enter: 5

// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50


let num = 8;
for (i = 1; i <= 10; i++){
    console.log(num * i);

}





// Question 5
// Count how many numbers between 1 and 500 are divisible by 10.

let totalNumbers = 0;

for (i = 1; i <= 500; i++){
    if (i % 10 == 0) {
        totalNumbers++;

        
    }
    
}
console.log(totalNumbers)





// Question 6
// Print numbers from 1 to 100 but skip numbers divisible by 3.

// Example:

// 1
// 2
// 4
// 5
// ...


for (i = 1; i <= 100; i++){
    if (i % 3 == 0) {
        
    } else {
        console.log(i);
    }

}





// Question 7
// Find the factorial of a number using a for loop.
// Example:

// 5! = 120

let num = 4;
let factorial = 1;

for (i = 1; i <= num; i++){
    factorial = factorial * i;
    
}
console.log(factorial);



// Question 8
// Print this pattern using loops:

// *
// **
// ***
// ****
// *****


// let pattern = "";


for (i = 1; i <= 5; i++){
    pattern += "*";
    console.log(pattern);
}






// Question 9
// Find the sum of digits of a number using a loop.
// Example:

// Input: 1234

// Output: 10

let num = 1234;
sum = 0;

for (i = 1; i <= num; i++){
    sum = num + i;

}
console.log(sum);




// Question 10
// Reverse a number using a loop.
// Example:

// Input: 12345

// Output: 54321







// If-Else Questions
// Question 11
// Check whether a number is:
// Divisible by 2
// Divisible by 3
// Divisible by both
// Not divisible by both


let num = 11;
if (num % 2 == 0 && num % 3 == 0) {
    console.log("Divisible by both");

}else if(num % 2 == 0) {
    console.log("Divisible by 2");

} else if (num % 3 == 0) {
    console.log("Divisible by 3");

} else {
    console.log("not Divisible by both");
}




// Question 12
// Create a grading system:

// 90+  → A Grade
// 75-89 → B Grade
// 50-74 → C Grade
// 35-49 → D Grade
// Below 35 → Fail


let grade = 60;

if (grade > 90) {
    console.log("A Grade");
} else if (grade < 89 && grade > 75) {
    console.log("B Grade");
} else if (grade < 74 && grade > 50) {
    console.log("C Grade");
} else if (grade < 49 && grade > 35) {
    console.log("D Grade");
} else {
    console.log("FAIL");
}





// Question 13
// Check whether a person is eligible for marriage:

// Age >= 21 → Eligible
// Age < 21 → Not Eligible


age = 11;
if (age >= 21) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}



// Question 14
// Find the largest number among three numbers.
// Example:

// 10, 50, 30

// Output: 50

let a = 10
b = 50;
c = 30;

if (a > b) {
    console.log(a);
} else if (b > c) {
    console.log(b);
} else {
    console.log(c);
}



// Question 15
// Check username and password:

username = admin
password = 12345

Correct → Login Successful
Wrong → Invalid Login


let username = "admin";
let password = 12345;

if (username == "admin" && password == 12345) {
    console.log("Login Successful");
} else {
    console.log("Invalid Login");
}







// Switch Questions
// Question 16
// Create a calculator using switch:

// +
// -
// *
// /
// Example:

// 10 + 5 = 15


let num1 = 10;
let num2 = 5;
let operator = "+";

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;

    case "-":
        console.log(num1 - num2);
        break;

    case "*":
        console.log(num1 * num2);
        break;

    case "/":
        console.log(num1 / num2);
        break;

    default:
        console.log("Invalid Operator");
        break;
}








// Question 17
// Create switch for mobile brands:

// Apple → iPhone
// Samsung → Galaxy
// OnePlus → Android Phone
// Default → Brand Not Found

let brand = "Apple";

switch (brand) {
    case "Apple":
        console.log("iPhone");
        break;
    case "Samsung":
        console.log("Galaxy");
        break;
    case "Apple":
        console.log("Android Phone");
        break;
    default:
        console.log("Brand Not Found");
        break;

}




// Question 18
// Create switch for user roles:

// admin → Full Access
// teacher → Manage Students
// student → View Courses
// Default → Access Denied

let role = "teacher";

switch (role) {
    case "admin":
        console.log("Full Access");
        break;
    case "teacher":
        console.log("Manage Students");
        break;
    case "student":
        console.log("View Courses");
        break;
    default:
        console.log("Access Denied");
        break;

}




// Mixed Loop + Condition Questions


// Question 19
// Print numbers from 1 to 100:
// If number is:
// divisible by 3 → "Fizz"
// divisible by 5 → "Buzz"
// divisible by both → "FizzBuzz"
// otherwise print number

for (i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, "FizzBuzz");
        
    } else if (i % 3 == 0) {
        console.log(i, "Fizz");
    } else if (i % 5 == 0) {
        console.log(i, "Buzz");
    } else {
        console.log(i);
    }

}





// Question 20
// Find how many numbers between 1 and 200 are:
// Even
// Odd
// Divisible by 5
// Print final counts.

let even = 0;
odd = 0;
divisibleby5 = 0;


for (i = 1; i <= 200; i++){

    if(i % 5 == 0){
        divisibleby5++;
    }else if (i % 2 == 0) {
        even++;
    } else if (i % 2 == 1) {
        odd++;
    }
}

console.log(divisibleby5+even+odd);