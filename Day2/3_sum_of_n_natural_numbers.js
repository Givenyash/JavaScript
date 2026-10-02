let a = prompt("Enter a N input :");
let sum = 0;

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
        let i = 0;
        while(i<=n){
            sum += i;
            i++;
        }
    }
}
console.log(sum);