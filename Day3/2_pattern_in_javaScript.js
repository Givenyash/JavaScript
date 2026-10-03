// Used to write the output in a single line...
// process.stdout.write("Hello ");
// process.stdout.write("JavaScript !!");   

// npm install prompt-sync command in terminal is used to take input in terminal.
// with the help of Node.js (module).

let prompt = require('prompt-sync')();

let a = prompt("Enter a number :");
process.stdout.write(a);