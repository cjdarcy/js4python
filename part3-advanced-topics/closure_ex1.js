/*Closure, sometimes also called a lexical closure, is similar to scope
but a closure has more to do with the structure of the source code
than when a function is called. The really important distinction to keep
in mind is that a closure is created when a function is defined rather than
when it is called.

In that way, you can think of a closure as creating an environment in which
to call the function. This may seem like a real subtle difference, but when you
harness this difference, you can wield an incredible amount of power.
Lets look at a real simple example: */

function counter_maker() {
    let x = 0;

    let ctr = function() {
        x = x + 1;
        return x;
    }

    return ctr;
}

let counter1 = counter_maker()
console.log(counter1())
let counter2 = counter_maker()
console.log(counter2())

for(let i = 0; i < 5; i++) {
    console.log(counter1())
    console.log(counter2())
}
