function getClothingOld (isCold) {
  if (isCold) {
    var freezing = 'Grab a jacket!'
  } else {
    var hot = 'It’s a shorts kind of day.' // eslint-disable-line no-unused-vars
    console.log(freezing)
  }
}
getClothingOld(false) // undefined
/**
 * Why? because all variables are Hoisting to top level on the function
 * ->
 * var freezing, hot;
 * if(isCold)...
 *
 * All var are scoped to the function!
 *
 * **let and const**
 *
 * They are scoped to the block.
 * If a variable is declared using let or const inside a block of code (denoted by curly braces { }), then the variable is stuck in what is known as the temporal dead zone until the variable’s declaration is processed. This behavior prevents variables from being accessed only until after they’ve been declared
 */

function getClothing (isCold) {
  if (isCold) {
    let freezing = 'Grab a jacket!'
    console.log(freezing)
  } else {
    let hot = 'It’s a shorts kind of day.' // eslint-disable-line no-unused-vars
    // Error freezing is not defined
    console.log(freezing)// eslint-disable-line no-undef
  }
}
console.log(getClothing())

/**
 * **Rules**
 * Variables declared with let can be reassigned, but can’t be re-declared in the same scope.
 * Variables declared with const must be assigned an initial value, but can’t be re-declared in the same scope, and can’t be reassigned.
 * **Is there any reason to use var anymore? Not really.**
 */
