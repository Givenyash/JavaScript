let a = Number(prompt("Enter a :"));
let b = Number(prompt("Enter b :"));

let temp = 0;

temp = a;
a = b;
b = temp;

console.log(`value of a : ${a} and value of ${b}`);

