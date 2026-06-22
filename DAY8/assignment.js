// For Loop Practice Questions (10)
// Question 1

// Print numbers from 1 to 20 using a for loop.

for (num = 1; num <= 20; num++) {
    console.log(num);
}




// Question 2

// Print numbers from 50 to 100.

for (i = 50; i <= 100; i++){
    console.log(i);
    
}




// Question 3

// Print all even numbers between 1 and 50.

for (i = 1; i <= 50; i++){
    if (i % 2 == 0) {
        console.log(i);

    }

    
}



// Question 4

// Print all odd numbers between 1 and 50.

for (i = 1; i <= 50; i++){
    if (i % 2 == 1) {
        console.log(i);
        
    }
    
}



// Question 5

// Find the sum of numbers from 1 to 100.

let sum = 0;
for (i = 1; i <= 100; i++){
    sum = sum + i;
    }
console.log(sum);

// Question 6

// Count how many numbers are divisible by 5 between 1 and 100.

let num = 0;
for (i = 1; i <= 100; i++){
    if (i % 5 == 0) {
        num++;
    }
    
}
console.log(num);



// Question 7

// Print the multiplication table of 7.

for (i = 1; i <= 10; i++){
    console.log(i * 7);
}





// Question 8

// Print numbers from 20 to 1 in reverse order.

for (i = 20; i >= 1; i--){
    console.log(i);
    
}





// Question 9

// Find the total count of even and odd numbers between 1 and 200.

// let evenNum = 0;
// let oddNum = 0;


for (i = 1; i <= 200; i++){
    if (i % 2 == 0) {
        evenNum++;
    } else{
        oddNum++;
    }
    
}

console.log(evenNum, "evenNum");
console.log(oddNum, "oddNum");



// Question 10

// Print the square of numbers from 1 to 10.
// Example:

// 1 -> 1
// 2 -> 4
// 3 -> 9

for (i = 1; i <= 10; i++){
    console.log(i * i);

}









// If-Else Practice Questions (10)
// Question 1

// Check if a number is even or odd.

let num = 11;
if (num % 2 == 0) {
    console.log("This is even num :");
} else {
    console.log("This is odd num :")
}








// Question 2


// Check whether a person is eligible for a driving license:

// Age > 18 → Eligible
// Age == 18 → Learner License
// Age < 18 → Not Eligible

let age = 10;

if (age > 18) {
    console.log("You are eligible for DL.");
    
} else if (age == 18 ) {
    console.log("You are eligible for LL.");
} else {
    console.log("You are not eligible.");
}






// Question 3

// Check whether a student has passed or failed:

// Marks >= 35 → Pass
// Marks < 35 → Fail

let marks = 30;

if (marks >= 35) {
    console.log("Passed")
    
} else {
    console.log("Failed");
}








// Question 4

// Check whether a number is positive, negative, or zero.

let num = -8;
if (num > 0) {
    console.log("Number is positive");
} else if (num == 0) {
    console.log("Zero");
} else{
    console.log("Number is Negative");
}





// Question 5

// Check whether a person can vote:

// Age >= 18 → Can Vote
// Otherwise → Cannot Vote

age = 10;
if (age >= 18) {
    console.log("Can vote");
} else {
    console.log("Cannot vote");
}




// Question 6

// Check which number is greater between two numbers.

let a = 10;
b = 20;

if (a > b) {
    console.log(a);

} else {
    console.log(b);
}



// Question 7

// Check whether a year is a leap year or not.
// (Hint: divisible by 4)


// let year = 2026;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is Not a Leap Year");
}



// Question 8

// Check whether a user has completed an assignment.

// true → "Good Job!"
// false → "Please Complete It"

let user = false;
if (user) {
    console.log("Good Job!");
} else {
    console.log("Please Complete It")
}





// Question 9

// Check whether a number is divisible by both 3 and 5.

num = 14;
if (num % 3 == 0 && num % 5 == 0) {
    console.log("Number is divisible by both");
} else {
    console.log("Number is divisible by both")
}



// Question 10

// Check whether a user can enter a movie:

// Age >= 18 → Entry Allowed
// Otherwise → Entry Denied

let age = 10;
if (age >= 18) {
    console.log("Entry Allowed");
} else {
    console.log("Entry Denied");
}




// Switch Practice Questions (10)

// Question 1

// Create a switch statement for fruits:

// Apple
// Mango
// Banana
// Default: "Fruit Not Available"

var fruit = "Orange";

switch (fruit) {
    case "Apple":
        console.log("Apple is available");
        break;
    case "Mango":
        console.log("Orange is available");
        break;
    case "Banana":
        console.log("Banana is available");
        break;
    default:
        console.log("Fruit Not Available");
        break;
}







// Question 2

// Create a switch statement for weekdays:

// Monday
// Tuesday
// Wednesday
// Default: "Invalid Day"


var day = "Friday";

switch (day) {
    case "Monday":
        console.log("Monday");
        break;
    case "Tuesday":
        console.log("Monday");
        break;
    case "Wednesday":
        console.log("Monday");
        break;
    default:
        console.log("Invalid Day")
        break;
}






// Question 3

// Create a switch statement for months:

// January
// February
// March
// Default: "Month Not Found"

var month = "May";

switch (month) {
    case "January":
        console.log("January");
        break;
    case "February":
        console.log("January");
        break;
    case "March":
        console.log("January");
        break;
    default:
        console.log("Month Not Found");
        break;
}



// Question 4

// Create a switch statement for grades:

// A → Excellent
// B → Good
// C → Average
// D → Needs Improvement
// Default → Invalid Grade

var grade = "E";

switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Needs Improvement");
        break;
    default:
        console.log("Invalid Grade");
        break;
}






// Question 5

// Create a switch statement for traffic lights:

// Red → Stop
// Yellow → Wait
// Green → Go
// Default → Invalid Signal

var signal = "Red";
switch (signal) {
  case "Red":
    console.log("Stop");
    break;
  case "Yellow":
    console.log("Wait");
    break;
  case "Green":
    console.log("Go");
    break;
  default:
    console.log("Invalid Signal");
    break;
}



// Question 6

// Create a switch statement for subjects:

// Math
// Science
// English
// Default → Subject Not Available

var subject = "English";
switch (subject) {
  case "Math":
    console.log("Available");
    break;
  case "Science":
    console.log("Available");
    break;
  case "English":
    console.log("Available");
    break;
  default:
    console.log("Subject Not Available");
    break;
    
}



// Question 7

// Create a switch statement for payment methods:

// UPI
// Card
// Cash
// Default → Payment Method Not Supported

var paymentMethod = "UPI";

switch (paymentMethod) {
  case "UPI":
    console.log("Supported");
    break;
  case "Card":
    console.log("Supported");
    break;
  case "Card":
    console.log("Supported");
    break;
  default:
    console.log("Payment Method Not Supported");
    break;
    
}






// Question 8

// Create a switch statement for seasons:

// Summer
// Winter
// Rainy
// Default → Unknown Season

var season = "Rainy";

switch (season) {
  case "Summer":
    console.log("This is Summer");
    break;
  case "Winter":
    console.log("This is Winter");
    break;
  case "Rainy":
    console.log("This is Rainy");
    break;
  default:
    console.log("Unknown Season");
    break;
    
}






// Question 9

// Create a switch statement for menu options:

// 1 → View Profile
// 2 → Edit Profile
// 3 → Logout
// Default → Invalid Option

var menu = "1";

switch (menu) {
  case "1":
    console.log("View Profile");
    break;
  case "2":
    console.log("Edit Profile");
    break;
  case "3":
    console.log("Logout");
    break;
  default:
    console.log("Invalid Option");
    break;
    
}





// Question 10

// Create a switch statement for programming languages:

// JavaScript
// Python
// Java
// Default → Language Not Supported


var language = "JavaScript";

switch (language) {
  case "JavaScript":
    console.log("Supported");
    break;
  case "Python":
    console.log("Supported");
    break;
  case "Java":
    console.log("Supported");
    break;
  default:
    console.log("Language Not Supported");
    break;
    
}






// Bonus Questions (Mix of Loop + If-Else)
// Question 1

// Print numbers from 1 to 100 and display:

// "Even" if number is even
// "Odd" if number is odd

for (i = 1; i <= 100; i++){
  if (i % 2 == 0) {
    console.log(i, "Even");
    
  } else {
    console.log(i, "Odd");
  }

}

  




// Question 2

// Find how many numbers between 1 and 100 are divisible by 3.


var num = 0;

for (i = 1; i <= 100; i++){
  if (i % 3 == 0) {
    console.log(i)
    num++;
    
  }

}
console.log(num, "Total Count of Numbers");




// Question 3

// Print all numbers from 1 to 50 that are divisible by both 2 and 5.


for (i = 1; i <= 50; i++){
  if (i % 2 == 0 && i % 5 == 0) {
    console.log(i);
  }

}




// Question 4

// Calculate the total sum of all even numbers between 1 and 100.


var TotalSum = 0;

for (i = 1; i <= 100; i++){
  if (i % 2 == 0) {
    TotalSum = TotalSum + i;

    
  }

}

console.log(TotalSum)





// Question 5

// Print numbers from 1 to 30 and for each number:

// If divisible by 3 → Print "Fizz"
// Otherwise → Print the number itself.

for (i = 1; i <= 30; i++){
  if (i % 3 == 0) {
    console.log(i, "fizz")
  } else {
    console.log(i);
  }

}


