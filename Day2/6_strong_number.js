let n = 145;

function factorial(num){
    let fact = 1;
    for(let i=1; i<=num; i++){
        fact = fact * i;
    }
    return fact;
}

const Strong = function isStrong(n){
    let temp = n;
    let sum = 0;

    while(temp > 0){
        let digit = (temp%10);
        sum = sum + factorial(digit);
        temp = Math.floor(temp/10);
    }
    return sum;
}

if(Strong(n) == n){
    console.log(`${n} is a strong number.`)
}
else{
    console.log(`${n} is not a strong number.`)
}

