let prompt = require('prompt-sync')();
let n = Number(prompt("Enter size of array"));
let arr = new Array(n);

for (let i = 0; i < n; i++) {
    arr[i] = Number(prompt(`Enter element ${i + 1}: `));
}

let k = Number(prompt("Enter k : "));

for(let j=0; j<k; j++){
    let copy = arr[0];

    for(let i=0; i<n-1; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length - 1] = copy;
}

console.log(arr);