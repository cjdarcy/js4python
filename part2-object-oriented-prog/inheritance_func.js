"use strict"
class Animal {
    constructor(name) {
        this._name = name
    }

    speak() {
        writeln("Generic animals are Mute")
    }

    get name() {
        return this._name;
    }
}

function Dog(name)  {
    this._name = name;
}

Dog.prototype = new Animal()

Dog.prototype.speak = function() {
    console.log('woof');
}

Dog.prototype.speak()
