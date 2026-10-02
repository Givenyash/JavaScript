let a = prompt("Enter a a range for factorial :");
let fact = 1;

if(a === null){
    console.log("Empty or cancelled");
}

else{
    let n = Number(a);

    if(isNaN(n)){
        console.log("Not a number, Enter a valid number");
    }
    else if(n === 0){
        console.log("enter +ve or -ve numbers");
    }
    else{
        let i = 1;
        while(i <= n){
            fact = fact * i;
            i++;
        }
    }
}
console.log(fact);