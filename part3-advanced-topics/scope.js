/*Scope: In Javascript programming, the scope of a variable
(or the binding of a name to an object)
is the region of a computer program where the binding is valid.
Hence global variables are available everywhere in the program.
In javascript global variables are owned by the window.
Javascript has both function scope, as well as block scope.
To understand the difference, consider the following example: */

function fact(n) {
    let result = 1;
    for(let i = n; i > 0; i--) {
        let y = 'block';
        var z = 'function'
        result = result * i;
    }
    console.log(x)
    //console.log(y, i) this is an error as y and i are no longer in scope.
    console.log(z)
    return result;
}

var x = 'global'
console.log(fact(10))
