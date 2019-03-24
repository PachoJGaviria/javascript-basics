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

console.log(buildTriangle(10));

/**
 * **Scope**
 * - lexical scope: These determine where a variable can be seen in some code
 * - runtime scope: This scope represents the context of the function, or more specifically, the set of variables available for the function to use.
 * 
 * 
 */

 /**
  * **Runtime Scope**
  * The nested child() function has access to all a, b, and c variables. 
  * That is, these variables are in the child() function's scope.
  */
 const a = 1000;       // Global variable
 function parent() {
     let b = 'b'       // Variable from fn parents scope
     function child() {
         const c = 'c' // Local variable
     }
 }

//if there are any variables defined inside a block (e.g., within an if statement), those variables are available outside of that block.

const myName = 'Andrew';
// Global variable

function introduceMyself() {

  const you = 'student';
  // Variable declared where introduce() is defined
  // (i.e., within introduce()'s parent function, introduceMyself())

  function introduce() {
    console.log(`Hello, ${you}, I'm ${myName}!`);
  }

  return introduce();
}

/**
 * **JavaScript are traditionally defined in the scope of a function**
 * **scope chain** -> the JavaScript interpreter will always start off by looking within its own local variables. If the variable isn't found, the search will continue looking up
 */

