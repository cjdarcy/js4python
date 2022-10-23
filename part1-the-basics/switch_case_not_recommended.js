"use strict";
main(85);
main(70);
main(99);
main(10);

/* The switch statement is not used very often, and I recommend you do not use it.

First, it is not as powerful as the else if model because the switch variable can only be compared for equality with an integer or enumerated constant.

Second, it is very easy to forget to put in the break statement. If the break statement is left out, then then the next alternative will be automatically executed.

For example, if the grade was 95 and the break was omitted from the case 9: alternative then the program would print out both A and B. */

function main(grade) {

   let tempgrade = Math.trunc(grade / 10);
   switch(tempgrade) {
   case 10:
   case 9:
       console.log('A');
       break;
   case 8:
       console.log('B');
       break;
   case 7:
       console.log('C');
       break;
   case 6:
       console.log('D');
       break;
   default:
       console.log('F');
   }
}
