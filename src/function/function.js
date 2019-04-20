/**
 * you have to invoke or call the function using the function name,
 * followed by parentheses with any arguments that are passed into it.
 * Functions are like machines. You can build the machine,
 * but it won't do anything unless you also turn it on.
 *
 * Parameters vs. Arguments
 * **Parameters** => **variable name** and appears in the function declaration
 * **Arguments** => argument is always going to be **a value** and will always appear in the code when the function is called or invoked.
 *
 * If you don't explicitly define a return value, the function will return undefined by default.
 */

/**
 * **function declaration**
 */

/**
 * **function expression**
 * - When a function is stored inside a variable it's called a function expression.
 * - Function expressions are not hoisted
 *
 * **Patterns with Function Expressions**
 * - Functions as parameters = **callback**
 */
// function expression
var catSays = function (max) {
  var catMessage = ''
  for (var i = 0; i < max; i++) {
    catMessage += 'meow '
  }
  return catMessage
}
// function with one callback with parameter
function helloCat (catSaysFunction) {
  return 'Hello cat ' + catSaysFunction(2)
}
console.log(catSays)
console.log(catSays(12))
console.log(helloCat)
console.log(helloCat(catSays))

// anonymous function expression
let doSomething = function (y) {}

// named function expression
let doSomethingTwo = function addOne (y) {}
console.log(doSomething, doSomethingTwo)

/**
 * **anonymous function** functions with no name
 *
 * **function inline**
 * is a anonymous function declare in the call of other function
 * - used with function callbacks that are probably not going to be reused elsewhere.
 * - Used it when you know the function is not going to be reused
 */
// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies (messageFunction, name) {
  messageFunction(name)
}

// Call the movies function, pass in the function and name of movie
movies(function displayFavorite (movieName) {
  console.log('My favorite movie is ' + movieName)
}, 'Finding Nemo')
