// Array

let sports = ["cricket", "foot-ball", "basket-ball", "cricket", "foot-ball", "basket-ball", "cricket", "foot-ball", "basket-ball", "cricket", "foot-ball", "basket-ball", "hockey"];

console.log(sports);
console.log(sports[0]);
console.log(sports[1]);
console.log(sports[2]);
console.log(sports.length);
console.log(sports[sports.length - 1]);

console.log(sports[(sports.length - 1) / 2]);



let colors = ["blue", "red", "yellow", "black", "blue", "red", "yellow", "black", "blue", "red", "yellow", "black", "blue", "red", "yellow", "black", "blue", "red", "yellow", "black", "blue", "red", "yellow", "black", "blue", "red", "yellow", "black", "blue", "red", "yellow", "black", "blue", "red", "yellow", "black", "blue", "red", "yellow", "black", "blue", "red", "yellow", "black", "pink"]


console.log(colors.length);
console.log(colors.length - 1);
console.log(colors[colors.length - 1]);
console.log(colors.length / 2);
console.log(colors[(colors.length - 1) / 2]);
colors[(colors.length - 1) / 2] = "xyz";
colors[colors.length - 1] = "xyz";
console.log(colors);