"use strict"

var main = function() {

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter the temperature in F: ', temp => {
  const ratio = 5.0/9.0;
  let cel = (temp - 32) * ratio;
  console.log(`The temperature in C is: ${cel}.`);
  readline.close();
});

}

main()
