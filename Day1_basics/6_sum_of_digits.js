let a = 12345;

let sum = 0;
while(a>0){
    let k =a % 10;
    sum += k;
    a = Math.floor(a / 10);
}

console.log(sum);