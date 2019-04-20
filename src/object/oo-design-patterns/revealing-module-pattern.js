/**
 * The underlying philosophy of the Revealing Module Pattern is that, while we still maintain encapsulation (as in the Module Pattern), we also reveal certain properties (and methods). The key ingredients to the Revealing Module Pattern are:

An IIFE (wrapper)
The module content (variables, methods, objects, etc.)
A returned object literal
 */
let person = (function () {
  let privateAge = 0
  let privateName = 'Andrew'

  function privateAgeOneYear () {
    privateAge += 1
    console.log(`One year has passed! Current age is ${privateAge}`)
  }

  function displayName () {
    console.log(`Name: ${privateName}`)
  }

  function ageOneYear () {
    privateAgeOneYear()
  }

  return {
    name: displayName,
    age: ageOneYear
  }
})()
person.name()
// console.log(person.displayName()); error
person.age()
person.age()
