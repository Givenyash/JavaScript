let prompt = require('prompt-sync')();
let arr = [1, 2, 3, 4, 5];
let k = Number(prompt("Enter value of K: "));

let temp = new Array(arr.length);

for(let i=0; i<arr.length; i++){
    temp[i] = arr[(i+k) % arr.length];
}

console.log(temp);