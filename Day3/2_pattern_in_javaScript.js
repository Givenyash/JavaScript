// Used to write the output in a single line...
// process.stdout.write("Hello ");
// process.stdout.write("JavaScript !!");   

// npm install prompt-sync command in terminal is used to take input in terminal.
// with the help of Node.js (module).



let prompt = require('prompt-sync')();
// let a = prompt("Enter a number :");
// process.stdout.write(a);


// n = 5
let n= Number(prompt("Enter n :")); 
// for(let i=0; i<=n; i++){
//     for(let j=0; j<=n; j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

// n = 5
// for(let i=0; i<n; i++){
//     for(let j=i; j<n; j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

// for(let i=0; i<n; i++){
//     for(let j=0; j<=i; j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

// let a = 65;
// for(let i=0; i<n; i++){
//     for(let j=0; j<=i; j++){
//         process.stdout.write(String.fromCharCode(a));
//         process.stdout.write(" ");
//         a++;
//     }
//     console.log();
// }


// let a = 65;
// for(let i=0; i<n; i++){
//     for(let j=0; j<=i; j++){
//         process.stdout.write(String.fromCharCode(a));
//         process.stdout.write(" ");
//         a++;
//     }
//     a = 65;
//     console.log();
// }


// for(let i=0; i<n; i++){
//     let a = 1;
//     for(let j=0; j<=i; j++){
//         process.stdout.write(a + " ");
//         a++;
//     }
//     console.log();
// }

// for(let i=0; i<n; i++){
//     for(let j=0; j<n-i-1; j++){
//         process.stdout.write(" ");
//     }
//     for(let j=0; j<=i; j++){
//         process.stdout.write("*");
//     }
//     console.log();
// }

// for(let i=0; i<n; i++){
//     for(let j=0; j<n-i; j++){
//         process.stdout.write("*");
//     }
//     for(let j=0; j<=i; j++){
//         process.stdout.write(" ");
//     }
//     console.log();
// }


for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
        if(i==j || i+j==n+1){
            process.stdout.write("* ");
        }
        else{
            process.stdout.write("  ");
        }
    }
    console.log();
}