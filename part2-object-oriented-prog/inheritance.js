"use strict"
class Animal {
    constructor(name) {
        this._name = name
    }

    speak() {
        console.log("Generic animals are Mute")
    }

    get name() {
        return this._name;
    }
}

class Dog extends Animal {

    constructor(name) {
        super(name);
        this.numLegs = 4;
    }

    speak() {
        console.log("woof woof");
    }
}

class CartoonDog extends Dog {

    speak() {
        console.log("I'll have a dry martini")
    }

}

var spot = new Dog('spot');
spot.speak();
console.log(spot.numLegs);
var brian = new CartoonDog('Brian')
brian.speak()
console.log(brian.name)
