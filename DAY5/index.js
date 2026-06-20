

var students = [];
console.log(students);
students.push("Virat");
students.push("Rohit");
students.push("Rahul");
console.log(students);
console.log(students[0]);




var numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers);




var numbers = [1, 2, 3, 4];
const lastElement = numbers.pop();
const secondlastElement = numbers.pop();
console.log(numbers, lastElement, secondlastElement);



var numbers = [1, 2, 3, 4, 5];
const firstelement = numbers.shift();
numbers.unshift(5);
console.log(numbers, firstelement);


var numbers = [1, 2, 3, 4, 5];
numbers.unshift(5);
console.log(numbers);



var numbers = [10, 20, 30];
const newnumber = numbers.map(num => num * 2);
console.log(newnumber);


var price = [10, 100, 200];
const newprice = price.map((price) => price * 1.10);
console.log(newprice);





let numbers = [12, 45, 7, 89, 23];
const greaternum = numbers.filter((num) => num > 20);
console.log(greaternum);




const employees = [
  { name: "Amit", active: true },
  { name: "Riya", active: false },
  { name: "John", active: true },
];

const activeEmp = employees.filter((emp) => emp.active );
console.log(activeEmp);





var count = [1, 2, 3, 4];

let totalCount = count.reduce((acc, price) => acc + price, 0);

console.log(totalCount);





var numbers = [1, 2, 3, 4, 5];

let count = numbers.reduce(acc => acc + 10, 0);

console.log(count);



var numbers = [1, 2, 3, 4, 5];

let max = numbers.reduce((acc, num) => (acc > num ? acc : num), 0);

console.log(max, "max value");







var numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num), 0);





var numbers = [1, 2, 3, 4, 5];
console.log(numbers.at(1));




var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var array3 = array1.concat(array2);
console.log(array3);







var numbers = [1, 2, 33, 45, 22, 66, 11];

let biggernum = numbers.find((num) => num > 10);
console.log(biggernum);






    var numbers = [1, 2, 3, 45, 22, 66, 11];

    let biggernum = numbers.findIndex((num) => num > 65 );
    console.log(biggernum);
