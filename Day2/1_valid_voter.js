let age = Number(prompt("What is your age: "));

if(isNaN(age)){
    console.log("Not a Number value, Please insert correct value.")
}

else if(age >= 18){
    console.log("You are  valid voter.");
}
else{
    console.log("You are not a valid voter.");
}