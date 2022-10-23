"use strict"
class Fraction {
    constructor(num, den) {
        this._numerator = num;
        this._denominator = den;
    }

    toString() {
        return `${this.numerator} / ${this.denominator}`;
    }

    get numerator() {
        return this._numerator;
    }

    get denominator() {
        return this._denominator;
    }

    set numerator(v) {
        console.log("error cannot set the numerator");
    }

}

let x = new Fraction(2,3);
console.log("x is " + x)
console.log(x.numerator)
