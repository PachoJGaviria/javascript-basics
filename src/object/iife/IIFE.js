/**
 * **Immediately-Invoked Function Expressions (IIFE)**
 * A function declaration defines a function and does not require a variable to be assigned to it.
 * It simply declares a function, and doesn't itself return a value.
 * On the other hand, a function expression does return a value.
 * Function expressions can be anonymous or named, and are part of another expression's syntax.
 * They're commonly assigned to variables, as well.
 *
 *
 * An immediately-invoked function expression, or IIFE (pronounced iffy),
 * is a function that is called immediately after it is defined.
 */
(function sayHi () {
  console.log('Hi there!')
})();

(function sayHi (name) {
  console.log(`Hi there ${name}!`)
})('Francisco')

/**
 * **private scope**
 * myFunction refers to an IIFE with a locally-defined variable, hi,
 * and a returned function that closes over hi and prints its value to the console.
 */
const myFunction = (function () {
  const hi = 'Hi'
  return function () {
    console.log(hi)
  }
})()
myFunction();
/**
 * **Alternative Syntax for IIFE's**
 * This is better for a reader
 */
(function sayHi () {
  console.log('Hi there again!')
})()
