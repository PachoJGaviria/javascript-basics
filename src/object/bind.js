function invokeTwice (cb) {
  cb()
  cb()
}

const dog = {
  age: 5,
  growOneYear: function () {
    this.age += 1
  }
}
console.log(dog)
// wrong
invokeTwice(dog.growOneYear)
console.log(dog)

// closure
invokeTwice(() => {
  dog.growOneYear()
})
console.log(dog)

/**
 * bind
 * bind() returns a new function with this bound to a specific object, allowing us to call it as a regular function.
 */
const newGrowFn = dog.growOneYear.bind(dog)
console.log(newGrowFn)
invokeTwice(newGrowFn)
console.log(dog)

const driver = {
  name: 'Pacho',
  displayName: function () {
    console.log(`Name: ${this.name}`)
  }
}

const car = {
  name: 'Fusion'
}
driver.displayName.bind(car)
