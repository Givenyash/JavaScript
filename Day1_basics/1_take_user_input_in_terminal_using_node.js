const readline = require ("readline");

const temp = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

temp.question("What is Your age :", (answer) =>{
    console.log(`Age is ${answer}`);
    console.log(typeof(answer));
    console.log();

    let age =  Number(answer);
    console.log(age);
    console.log( typeof(age) );

    temp.close();
});


