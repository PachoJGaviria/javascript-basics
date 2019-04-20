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
 * **Alternative Syntax for a IIFE**
 * This is better for a reader
 */
(function sayHi () {
  console.log('Hi there again!')
})()

/**
 * We've seen how using an immediately-invoked function expression creates a private scope that protects variables or methods from being accessed. IIFE ultimately use the returned functions to access private data within the closure. This works out very well: while these returned functions are publicly-accessible, they still maintain privacy for the variables defined within them!
 * Another great opportunity to use an IFFE is when you want to execute some code without creating extra global variables.
 * However, note that an IIFE is only intended to be invoked once, to create a unique execution context. If you have some code that is expected to be re-used (e.g., a function meant to be executed more than once in the application), declaring the function and then invoking it might be a better option.
 * All in all, if you simply have a one-time task (e.g., initializing an application), an IIFE is a great way to get something done without polluting your the global environment with extra variables. Cleaning up the global namespace decreases the chance of collisions with duplicate variable names, after all.
 */
