/**
 * A mixin is a technique that copies data and functionality from a source object (or source objects) to a target object. We can use ES6's Object.assign() to return a target object with properties from one or more source objects "mixed into" that target object.
 */

let target = { letter: 'a', number: 11 }
console.log(target)
let source = { number: 7, size: 100 }
Object.assign(target, source)
console.log(target)

console.log('-----------------------------------')

const duck = {
  hasBill: true
}
const beaver = {
  hasTail: true
}
const otter = {
  hasFur: true,
  feet: 'webbed'
}

const platypus = Object.assign({}, duck, beaver, otter)
console.log(platypus)
console.log(platypus.constructor)
console.log(platypus.isPrototypeOf(duck))
console.log(duck.isPrototypeOf(platypus))
console.log(platypus.isPrototypeOf(beaver))
console.log(beaver.isPrototypeOf(duck))
console.log(platypus.isPrototypeOf(otter))
console.log(otter.isPrototypeOf(platypus))

console.log('_____________________________________')

/**
 * factory functions
 */

function Basketball (color) {
  return {
    color: color,
    numDots: 35000
  }
}
const orangeBasketball = Basketball('orange')
console.log(orangeBasketball)
const myBB = Basketball('blue and green')
console.log(myBB)

console.log('_____________________________________')

function Radio (mode) {
  let on = false
  return {
    mode,
    turnOn: function () {
      on = true
    },
    turnOff: function () {
      on = false
    },
    isOn: function () {
      return on
    }
  }
}
const myRadio = Radio('fm')
const yourRadio = Radio('am')
console.log(myRadio.isOn())
console.log(yourRadio.isOn())
myRadio.turnOn()
console.log(myRadio.isOn())
console.log(yourRadio.isOn())

console.log('_____________________________________')

/**
 * functional mixins
 * A factory function creates objects. It is invoked as normal function, not with the new operator. Functional mixins take things a bit further by accepting a mixin as an argument, copies properties and methods from the mixin, and returns a new object.
 */
function IceCreamFactory (obj) {
  let isCold = true

  return Object.assign({}, obj, {
    melt: function () {
      isCold = false
    },
    isCold: function () {
      return isCold
    }
  })
}

let iceCream = IceCreamFactory({})
console.log(iceCream)

function ConeFactory (obj) {
  let isDry = true

  return Object.assign({}, obj, {
    soggy: function () {
      isDry = false
    },
    isDry: function () {
      return isDry
    }
  })
}

let iceCreamCone = IceCreamFactory(ConeFactory({}))

console.log(iceCreamCone)
