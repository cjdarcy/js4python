"use strict"
// program to display the sum of natural numbers

var main = function () {

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter a positive integer: ', number => {
    let sum = 0;
    for (let i = 1; i <= parseInt(number); i++) {
        sum += i;
    }
    console.log(`The sum of natural number is: ${sum}.`);
    readline.close()
});

}

main()
