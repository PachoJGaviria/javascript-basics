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


 /**
  * **Variable Shadowing**
  * the variable with local scope will just temporarily "shadow" the variable in the outer scope. 
  * The conflicts are solved moving through the scope chain from inner to outer scopes
  * 
  * When a function is run, it creates its own scope. A function's scope is the set of variables available for use within that function. The scope of a function includes:

The function's arguments.
Local variables declared within the function.
Variables from its parent function's scope.
Global variables.
Variables in JavaScript are also function-scoped. This means that any variables defined inside a function are not available for use outside the function, though any variables defined within blocks (e.g. if or for) are available outside that block.

When it comes to accessing variables, the JavaScript engine will traverse the scope chain, first looking at the innermost level (e.g., a function's local variables), then to outer scopes, eventually reaching the global scope if necessary.
  */
