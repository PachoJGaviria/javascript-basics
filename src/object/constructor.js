/**
 * JavaScript's class system is built directly on using functions and objects. Calling (i.e., invoking) a constructor function with the new operator instantiates a new object. The same constructor function can be used to create different objects.
 * Constructor functions can have parameters
 * We've discussed functions, objects, and this throughout this course. As it turns out, all three are very much interconnected with one another! We'll examine their relationship in the next section as we take an in-depth look at the this keyword. 
 * instanceof confirmed that a specific constructor function did in fact create a specific object.
 * the instanceof operator actually tests whether or not that constructor appears in the prototype chain of an object. 
 */


/**
 * Constructor
 * @param {string} name 
 */
function SoftwareDeveloper(name) {
  this.favoriteLanguage = "Javascript";
  this.name = name;
}
let francisco = new SoftwareDeveloper("Francisco");
console.log(francisco);
let otherDeveloper = { favoriteLanguage: "Java", name: "Other" };
console.log(otherDeveloper);
let olga = new SoftwareDeveloper("Olga");
let villa = new SoftwareDeveloper();

console.log(francisco);
console.log(olga);
console.log(villa);
console.log();
console.log(typeof francisco);
console.log(francisco instanceof SoftwareDeveloper);
console.log(otherDeveloper instanceof SoftwareDeveloper);

console.log();
 /**
  * Hero constructor
  * @param {string} name 
  * @param {string} alias 
  * @param {string} rol 
  */
function Hero(name, alias, rol) {
  this.name = name;
  this.alias = alias;
  this.rol = rol;
  this.introduce = function() {
    console.log(
      `My name is ${this.name}, my rol is ${this.rol} and they call me ${
        this.alias}`
    );
  };
}

const pacho = new Hero('Francisco', 'Pacho', 'Father');
const mochi = new Hero('Olga', 'Mochi', 'Mother');

console.log(pacho);
console.log(mochi);

pacho.introduce();
mochi.introduce();