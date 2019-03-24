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