//old ways
function PlaneOldWay(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
}

// methods "inherited" by all instances
PlaneOldWay.prototype.startEngines = function () {
    console.log('starting engines...');
    this.enginesActive = true;
};

var richardsPlane = new PlaneOldWay(1);
richardsPlane.startEngines();

var jamesPlane = new PlaneOldWay(4);
jamesPlane.startEngines();

/**
 * the constructor function is called with the new keyword
 * the constructor function, by convention, starts with a capital letter
 * the constructor function controls the setting of data on the objects that will be created
 * "inherited" methods are placed on the constructor function's prototype object
 */
//


/**
 * **Benefits of classes**
Less setup
There's a lot less code that you need to write to create a function
Clearly defined constructor function
Inside the class definition, you can clearly specify the constructor function.
Everything's contained
All code that's needed for the class is contained in the class declaration. Instead of having the constructor function in one place, then adding methods to the prototype one-by-one, you can do everything all at once!
**Things to look out for when using classes**
class is not magic
The class keyword brings with it a lot of mental constructs from other, class-based languages. It doesn't magically add this functionality to JavaScript classes.
class is a mirage over proto-typal inheritance
We've said this many times before, but under the hood, a JavaScript class just uses proto-typal inheritance.
Using classes requires the use of new
When creating a new instance of a JavaScript class, the new keyword must be used
 */
class PlaneNewWay {
    constructor(numEngines) {
        this.numEngines = numEngines;
        this.enginesActive = false;
    }

    startEngines() {
        console.log('starting engines…');
        this.enginesActive = true;
    }
}


class Dessert {
    constructor(calories = 250) {
        this.calories = calories;
    }
}

class IceCream extends Dessert {
    constructor(flavor, calories, toppings = []) {
        super(calories);
        this.flavor = flavor;
        this.toppings = toppings;
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
}

const dessert = new Dessert(100)
const iceCream = new IceCream('vanilla', 250)
console.log(dessert)
console.log(iceCream)