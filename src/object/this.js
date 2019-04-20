/**
 * When invoking a constructor function with the new operator, "this" gets set to the newly-created object!
 * When you say "this" in a method, what you're really saying is "this object" or "the object at hand."
 * When is this Assigned?
 * The value of this is actually not assigned to anything until an object calls the method where this is used.
 * The value assigned to "this" is based on the object that invokes the method where this is defined.
 * **A common misconception is that "this" refers to the object where it is defined. This is not the case!**
 */

/**
  * There are four ways to call functions, and each way sets this differently.
  * - Calling a constructor function with the new keyword sets this to a newly-created object.
  * - Calling a function that belongs to an object (i.e., a method) sets this to the object itself.
  * - Calling a function on its own (i.e., simply invoking a regular function) will set this to global scope. i.e the window, which is the global object if the host environment is the browser.
  * - Call functions allows us to set "this" ourselves! -> with apply(), call() and bind(). Those methods share quite a few similarities, and they each allow us to specify how we want to set this
  */

/**
   * 1. A new object
If the function is called with new:

const mySundae = new Sundae('Chocolate', ['Sprinkles', 'Hot Fudge']);
In the code above, the value of this inside the Sundae constructor function is a new object because it was called with new.

2. A specified object
If the function is invoked with call/apply:

const result = obj1.printName.call(obj2);
In the code above, the value of this inside printName() will refer to obj2 since the first parameter of call() is to explicitly set what this refers to.

3. A context object
If the function is a method of an object:

data.teleport();
In the code above, the value of this inside teleport() will refer to data.

4. The global object or undefined
If the function is called with no context:

teleport();
In the code above, the value of this inside teleport() is either the global object or, if in strict mode, it's undefined.
   */
