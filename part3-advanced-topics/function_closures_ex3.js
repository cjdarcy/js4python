function parent() {
    let a = 10;

    let double = function() {
    a = a+a;
    console.log(a);
    };

    let square = function() {
    a = a*a;
    console.log(a);
    }

    return { double, square }
}
let { double, square } = parent();
double();
square();
double();
