const names = ['Francisco', 'Olga', 'Martin']
const upperNames = names.map(name => name.toUpperCase())
console.log(names, upperNames)

const countries = ['Afghanistan', 'Aruba', 'Bahamas', 'Chile', 'Fiji', 'Gabon', 'Luxembourg', 'Nepal', 'Singapore', 'Uganda', 'Zimbabwe']
console.log(countries)
const longCountriesNames = countries.filter(country => country.length > 6)
console.log(longCountriesNames)

/**
 * **Arrow functions are always expressions.**
 * Stored in a variable
 * Passed as an argument to a function
 * Stored in an object's property.
 *
 * **Concise body syntax**
 * Has no curly braces surrounding the function body
 * Automatically returns the expression.
 *
 * **Block body syntax**
 * It uses curly braces to wrap the function body
 * A return statement needs to be used to actually return something from the function.
 */
const greet = name => `Hello ${name}!`
console.log(greet('Pacho'))

function Person (name, age) {
  this.name = name
  this.age = age
  this.greetWorld = () => console.log(`Hello world. I am ${this.name} and my I am ${this.age} years old.`)
}
const pacho = new Person('Pacho', 30)
pacho.greetWorld()

const olga = {
  name: 'Olga',
  age: 28,
  greetWorld: () => console.log(`Hello world. I am ${olga.name} and my I am ${olga.age} years old.`)
}
olga.greetWorld()

console.log('------------------')
let count = 0
setTimeout(() => {
  count++
  console.log(`The count is ${count}`)
}, 500)
console.log('------------------')
const vowels = 'a i e o u'.split(' ')
const bigVowels = vowels.map((vowel) => vowel.toUpperCase())
console.log(vowels, bigVowels)
console.log('------------------')

const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'black']
const crazyColors = colors.map(color => `${color.split('').reverse().join('')}!`)
console.log(colors, crazyColors)

/**
 * **WARNING:** Everything's not all ponies and rainbows though, and there are definitely times when you might not want to use an arrow function. So before you wipe from your memory how to write a traditional function, check out these implications:
 * - there's a gotcha with the this keyword in arrow functions
 *      - go to the next lesson to find out the details!
 * - arrow functions are only expressions
 *      - there's no such thing as an arrow function declaration
 */
/**
 * the value of **this** inside an arrow function is the same as the value of this outside the function.
 */
console.log('-------------------------------')
// constructor
function IceCream () {
  this.scoops = 0
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function () {
  setTimeout(() => { // an arrow function is passed to setTimeout
    this.scoops++
    console.log('scoop added!')
  }, 0.5)
}

const dessert = new IceCream()
dessert.addScoop()
