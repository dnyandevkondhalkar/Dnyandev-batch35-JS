// async await

async function getProductsFromFakestorepi() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getProductsFromFakestorepi()




// Template Literal


let name = "Dnyandev";
let message = "welcome to the world of javascript";

let greeting = `Hello ${name}, ${message}` ;

console.log(greeting);





// object destructuring


const userData = {
    name : "Rohit",
    age : 39,
    address: { city: "mumbai", state: "maharashtra" },
};

const { age, name : nickname } = userData;

console.log(age);
console.log(nickname);



// array destructuring

const users = ["virat", "rohit", "ronaldo", "messi"];

const [a, b, c, d] = users;

console.log(c);




// spread operator (...)

const array = [1, 2, 3, 4, 5];

const newArray = [...array];

console.log(newArray);

const mergeArray = [...array, 6, 7, 8, 9, 10];

console.log(mergeArray);





const myObj = { name: "Rohit" };
const newObj = { ...myObj, age: 39 };
console.log(newObj);




// rest operator

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

const result = sum(1, 2, 3, 4, 5);
console.log(result, "result");



function greet(name = "Guest", age = 39) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}
greet();


















