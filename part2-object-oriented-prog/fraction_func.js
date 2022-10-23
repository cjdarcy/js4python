function Fraction(num, den) {
    this.numerator = num;
    this.denominator = den;
}

Fraction.prototype.toString = function() {
    return this.numerator + " / " + this.denominator;
}

let f = new Fraction(2,3);
console.log("f is " + f)
