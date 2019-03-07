/**
 * When trying to access an identifier, the JavaScript Engine will first look in the current function. 
 * If it doesn't find anything, it will continue to the next outer function to see 
 * if it can find the identifier there. It will keep doing this until it reaches the global scope.
 */

/**
 * **Global scope => bad idea**: bad variable names, conflicting variable names, messy code and other problems
 * - it's available everywhere.
 */

/**
 * **function scope**
 * - it's available in the function it was declared in 
 *      (even in functions declared inside the function).
 */

/**
 * **Block scope**
 */

/**
 * **Hoisting**
 * - JavaScript hoists function declarations and variable declarations to the top of the current scope.
 * - Variable assignments are not hoisted.
 * Declare functions and variables at the top of your scripts, so the **syntax and behavior** are consistent with each other.
 */


// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(levels) {
    var triangle = "";
    for (var level = 1; level <= levels; level++) {
        triangle += makeLine(level);
    }
    return triangle;
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));