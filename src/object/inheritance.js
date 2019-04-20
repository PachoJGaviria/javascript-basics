/**
 * Inheritance in JavaScript is all about setting up the prototype chain. This allows us to subclass, that is, create a "child" object that inherits most or all of a "parent" object's properties and methods. We can then implement any of the child object's unique properties and methods separately, while still retaining data and functionality from its parent.

An object (instance) is secretly linked to its constructor function's prototype object through that instance's __proto__ property. You should never use the __proto__ property in any code you write. Using __proto__ in any code, or even inheriting just the prototype directly, leads to some unwanted side effects.

To efficiently manage inheritance in JavaScript, an effective approach is to avoid mutating the prototype completely. Object.create() allows us to do just that, taking in a parent object and returning a new object with its __proto__ property set to that parent object.

 */

function Animal (name) {
  this.name = name
}
Animal.prototype.walk = function () {
  console.log(`${this.name} walks!`)
}

function Cat (name) {
  Animal.call(this, name)
  this.lives = 9
}

Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat
Cat.prototype.meow = function () {
  console.log('Meow!')
}

const bambi = new Cat('Bambi')

bambi.meow()
bambi.walk()
console.log(bambi.name)
console.log(bambi instanceof Animal)
