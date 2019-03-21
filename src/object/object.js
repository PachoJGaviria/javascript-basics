/**
 * Objects are one of the most important data structures in JavaScript. 
 * Get ready to see them everywhere!
 * They have properties (information about the object) 
 * and methods (functions or capabilities the object has). 
 * Objects are an incredibly powerful data type and you will see them all over the place when working with JavaScript, 
 * or any other object-oriented programming language.
 * 
 * distinct key/value pair, known as a property of that object,
 * objects are unordered collections
 * 
 * We can go ahead and remove that property from printer using the delete operator.
 */

/**
 * **object-literal notation**
 * The key = property or method name
 * The key: value pairs are separated from each other by commas
 * The entire object is wrapped inside curly braces { }.
 */
var sister = {
  name: "Sarah",
  age: 23,
  parents: ["alice", "andy"],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,
  paintPicture: () => { return "Sarah paints!"; }

};
console.log(sister);
// two equivalent ways to use the key to return its value
console.log(sister["parents"]); // returns [ "alice", "andy" ]
console.log(sister.parents); // also returns ["alice", "andy"]
console.log(sister.paintPicture);
console.log(sister.paintPicture());

/**
 * bad practices
 */
var personWithBadNamesPractices = {
    "name": "Piedad", // DON`T USE QUOTES IN THE OBJECT PROPERTY NAMES
    "age": 57,
    "1stChild": "Francisco", //BAD. DON`T USE A NUMBER HOW THE FIRST CHAR OF A PROPERTY
    "2stChild": "Sara", //BAD. THE DOT NOTATION DON`T WORK WITH THOSE PROPERTIES
    "favorite color": "red",//BAD. DON`T USE SPACES IN THE OBJECT PROPERTY NAMES
    "favorite-country": "colombia"//BAD. DON`T USE HYPHENS
};
console.log("\n");
console.log(personWithBadNamesPractices);
var mom = {
    name: "Piedad",
    age: 57,
    childrenNames: ["Francisco","Sara"],
    favoriteColor: "red",
    favoriteCountry: "Colombia"
}
console.log("\n");
console.log(mom);
console.log(mom["name"]);
console.log(mom.name);

/**
 * In JavaScript, a primitive (e.g., a string, number, boolean, etc.) is immutable. In other words, any changes made to an argument inside a function effectively creates a copy local to that function, and does not affect the primitive outside of that function.
 * On the other hand, objects in JavaScript are mutable. If you pass an object into a function, Javascript passes a reference to that object.
 * Since objects are passed by reference, making changes to the copy (iceCreamCopy) has a direct effect on the original object (iceCreamOriginal) as well. 
 * **Comparing an Object with Another Object**
 * The expression will only return true when comparing two references to exactly the same object. 
 * Objects are commonly created with literal notation, and can include properties that point to functions called methods. Methods are accessed the same way as other properties of objects, and can be invoked the same way as regular functions, except they automatically have access to the other properties of their parent object.
 * By default, objects are mutable (with a few exceptions), so data within them can be altered. New properties can be added, and existing properties can be modified by simply specifying the property name and assigning (or re-assigning) a value. Additionally, properties and methods of an object can be deleted as well with the delete operator, which directly mutates the object.
 * 
 * **Method and this**
 * A method is a function property of an object. It is accessed the same way as any other property of the object (i.e., using dot notation or square bracket notation), and is invoked the same way as a regular function outside of an object (i.e., adding parentheses to the end of the expression).
 * Since an object is a collection of data and the means to operate on that data, a method can access the object it was called on using the special this keyword. The value of this is determined when a method is invoked, and its value is the object on which the method was called. Since this is a reserved word in JavaScript, its value cannot be used as an identifier. Feel free to check out the links below for an additional look at methods and their relationship with this.
 * Functions that are stored in object properties are called “methods”.
 * Methods allow objects to “act” like object.doSomething().
 * Methods can reference the object as this.
 * The value of this is defined at run-time.
 * When a function is declared, it may use this, but that this has no value until the function is called.
 * That function can be copied between objects.
 * When a function is called in the “method” syntax: object.method(), the value of this during the call is object.
 * Please note that arrow functions are special: they have no this. When this is accessed inside an arrow function, it is taken from outside.
 * 
 * **How the function is invoked determines the value of this inside the function.**
 * **When a regular function is invoked, the value of this is the global window object.**
 * 
 * Only declaring variables with the var keyword will add them to the window object. If you declare a variable outside of a function with either let or const, it will not be added as a property to the window object.
 * 
 * **Do not use globals variables or methods**
 * - Tight Coupling -> pieces of code are joined together in a way where changing one unintentionally alters the functioning of some other code
 * - Name Collisions -> A name collision occurs when two (or more) functions depend on a variable with the same name
 * - http://wiki.c2.com/?GlobalVariablesAreBad
 * 
 * **Object function**
 * - Object.keys() returns an array of a given object's own keys (property names).
 * - Object.values() returns an array of a given object's own values (property values).
 * 
 * 
 * **Functions are First-Class Functions**
 * - Be stored in variables
 * - Be returned from a function. -> **Higher-order function = A function that returns another function**
 * - Be passed as arguments into another function.
 * 
 * 
 * https://javascript.info
 * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs
 * http://crockford.com/javascript/
 * 
 * 
 */