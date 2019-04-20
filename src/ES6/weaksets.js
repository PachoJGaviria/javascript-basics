/**
 * A WeakSet is just like a normal Set with a few key differences:

a WeakSet can only contain objects
a WeakSet is not iterable which means it can’t be looped over
a WeakSet does not have a .clear() method
 */

let student1 = { name: 'James', age: 26, gender: 'male' }
let student2 = { name: 'Julia', age: 27, gender: 'female' }
let student3 = { name: 'Richard', age: 31, gender: 'male' }

const roster = new WeakSet([student1, student2, student3])
console.dir(roster)
console.log(roster.has(student1))
console.log(roster.has(student2))
console.log(roster.has(student3))
student3 = null
console.dir(roster)
console.log(roster.has(student1))
console.log(roster.has(student2))
console.log(roster.has(student3))

const uniqueFlavors = new WeakSet()
const flavor1 = { flavor: 'chocolate' }
const flavor2 = { flavor: 'vanilla' }
uniqueFlavors.add(flavor1)
uniqueFlavors.add(flavor2)
console.log(uniqueFlavors)
console.log(uniqueFlavors.has(flavor1))
console.log(uniqueFlavors.has(flavor2))
uniqueFlavors.add(flavor1)
console.log(uniqueFlavors)
