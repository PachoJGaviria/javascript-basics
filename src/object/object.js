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