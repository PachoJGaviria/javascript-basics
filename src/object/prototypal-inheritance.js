/**
 * Finding Properties and Methods on the Prototype Chain
First, the JavaScript engine will look at the object's own properties. This means that any properties and methods defined directly in the object itself will take precedence over any properties and methods elsewhere if their names are the same (similar to variable shadowing in the scope chain).
If it doesn't find the property in question, it will then search the object's constructor's prototype for a match.
If the property doesn't exist in the prototype, the JavaScript engine will continue looking up the chain.
At the very end of the chain is the Object() object, or the top-level parent. If the property still cannot be found, the property is undefined.
 */

const myArray = [1, 2, 3, 4];
console.dir(myArray);
console.dir(Object.getPrototypeOf(myArray));
console.dir(Array.prototype);
console.log(myArray.__proto__);

/**
 * 
 */
function Phone() {
    this.operatingSystem = 'Android';
}
Phone.prototype.screenSize = 6;
const myPhone = new Phone();
const own = myPhone.hasOwnProperty('operatingSystem');
console.log(own);
const inherited = myPhone.hasOwnProperty('screenSize');
console.log(inherited);


/**
 * 
 */
const rodent = {
    favoriteFood: 'cheese',
    hasTail: true
};
function Mouse() {
    this.favoriteFood = 'cheese';
}
Mouse.prototype = rodent;
const ralph = new Mouse();
const result = rodent.isPrototypeOf(ralph);
console.log(result);
const myPrototype = Object.getPrototypeOf(ralph);
console.log(myPrototype);
console.log(ralph.constructor);
console.log(rodent.constructor);// function Object() { [native code] }
console.log('----')
console.log(ralph.__proto__);

/**
 * 
 */
const capitals = {
    California: 'Sacramento',
    Washington: 'Olympia',
    Oregon: 'Salem',
    Texas: 'Austin'
};
console.log(Object.getPrototypeOf(capitals));
console.log(Object.getPrototypeOf(capitals) === Object.prototype);
console.log(Object.prototype)

/**
 * Inheritance in JavaScript is when an object is based on another object. Inheritance allows us to reuse existing code, having objects take on properties of other objects.

When a function is called as a constructor using the new operator, the function creates and returns a new object. This object is secretly linked to its constructor's prototype, which is just another object. Using this secret link allows an object to access the prototype's properties and methods as if it were its own. If JavaScript does not find a particular property within an object, it will keep looking up the prototype chain, eventually reaching Object() (top-level parent) if necessary.

We also looked at a few methods and properties that allow use to check the origins and references of objects and their prototypes, namely:

hasOwnProperty()
isPrototypeOf()
Object.getPrototypeOf()
.constructor
 */

 