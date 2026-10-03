 let random = Math.floor(Math.random()*100)+1;

 let guess = -1;
 let count = 0;

 while(guess !== random){
    guess = Number(prompt("Enter a number to guess :"))
    if(isNaN(guess) || guess > 100 || guess < 1){
        console.log("Try again. Range 1-100");
        continue;
    }
    if(guess > random){
        console.log("Try for some lower value to guees the number.");
        count++;
    }
    else if(guess < random){
        console.log("Try for some higher value to guees the number.");
        count++;
    }
    else{
        console.log(`Congrats you did it which took ${count} times to guess`);
        count++;
    }
 }