let a = prompt("Enter a N input :");

let arr = [];

if(a === null){
    console.log("Empty or cancelled");
}

else{
    let n = Number(a);

    if(isNaN(n)){
        console.log("Not a number, Enter a valid number");
    }
    else if(n === 0){
        console.log("enter +ve number");
    }
    else{
        for(let i=1; i<=n; i++){
            if(n % i == 0){
                arr.push(i);
            }
        }
    }
}
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}