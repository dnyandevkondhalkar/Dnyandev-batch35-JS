// Question 1

// Print numbers from 20 to 1 using a for loop.


for (i = 20; i >= 1; i--){
    console.log(i);
    
}





// Question 2

// Print numbers from 50 to 40 in reverse order.



for (i = 50; i >= 40; i--){
    console.log(i);

}




// Question 3

// Given the array below, print all elements one by one.

// let fruits = ["Apple", "Mango", "Banana", "Orange"];

// Output:

// Apple
// Mango
// Banana
// Orange

let fruits = ["Apple", "Mango", "Banana", "Orange"];
for (i = 0; i < fruits.length; i++){
   console.log(fruits[i]);

}








// Question 4

// Given the array below, print only the first and last elements.

// let cities = ["Mumbai", "Pune", "Delhi", "Bangalore"];

let cities = ["Mumbai", "Pune", "Delhi", "Bangalore"];

console.log(cities[0]);
console.log(cities[cities.length -1]);





// Question 5

// Find the index of "Rahul" in the array below using a for loop.

// let students = ["Virat", "Rohit", "Rahul", "Kane"];

// Expected Output:

// 2



let students = ["Virat", "Rohit", "Rahul", "Kane"];

let target = "Rahul";

for (i = 0; i <= students.length; i++){
   if (students[i] == target) {
      console.log(i)
      
   }

}







// Question 6

// Find the index of "Orange" in the array below.

// let fruits = ["Apple", "Banana", "Orange", "Mango"];

let fruits = ["Apple", "Banana", "Orange", "Mango"];

let target = "Orange";

for (i = 0; i <= fruits.length; i++){
   if (fruits[i] == target) {
      console.log(i)
      
   }

}





// Question 7

// Check whether "Python" exists in the array below.
// If found, print its index; otherwise print:

// "Language not found"
// let languages = ["HTML", "CSS", "JavaScript", "React"];

let languages = ["HTML", "CSS", "JavaScript", "React"];

let target = "Python";

let index;

for (i = 0; i <= languages.length; i++){
   if (languages[i] == target) {
      index = i;
      break;
      
   }
   // console.log(languages[i]);

}

if (index == undefined) {
   console.log("Language not found");
   
}else{
   console.log(index, "index")
}







// Question 8

// Find the index of 40 in the following array.

// let numbers = [10, 20, 30, 40, 50];


let numbers = [10, 20, 30, 40, 50];

let target = 40;

for (i = 0; i <= numbers.length; i++){
   if (numbers[i] == target) {
      console.log(i);
      
   }

}





// Question 9

// Print all elements of the array in reverse order.

// let colors = ["Red", "Blue", "Green", "Yellow"];

// Output:

// Yellow
// Green
// Blue
// Red


let colors = ["Red", "Blue", "Green", "Yellow"];

for (i = colors.length - 1; i >= 0; i--){
   console.log(colors[i])

}





// Question 10

// Search for "Dog" in the array below.

// let animals = ["Cat", "Tiger", "Lion", "Elephant"];

// If found, print the index.

// Otherwise print:

// "Dog is not present in array"




let animals = ["Cat", "Tiger", "Lion", "Elephant"];

let target = "Dog";

let index;

for (i = 0; i < animals.length; i++){
   if (animals[i] == target) {
      index = i;
      break;
      
   }
   // console.log(index);

} 
if (index == undefined) {
   console.log("Dog is not present in array");
   
} else {
   console.log(index, "index");
}


