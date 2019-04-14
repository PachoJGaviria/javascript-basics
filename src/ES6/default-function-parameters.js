/**
 * To create a default parameter, you add an equal sign ( = ) and then whatever you want the parameter to default to if an argument is not provided. In the code above, both parameters have default values of strings, but they can be any JavaScript type!
 */
function greet(name = 'Student', greeting = 'Welcome') {
    return `${greeting} ${name}!`;
}
console.log(greet());
console.log(greet('James'));
console.log(greet('Richard', 'Howdy'));

/**
 * **Defaults and Destructuring**
 */
console.log('-----------------------------')
function createGrid([width = 5, height = 5] = []) {
    return `Generates a ${width} x ${height} grid`;
}
console.log(createGrid([]));
console.log(createGrid([2]));
console.log(createGrid([2, 3]));
console.log(createGrid([undefined, 3]));
console.log(createGrid());//TypeError: Cannot read property 'Symbol(Symbol.iterator)' of undefined if we don`t use default parameters in the array to.

/**
 * **Defaults and destructuring objects**
 */
console.log('-----------------------------')

function createSundae({ scoops = 1, toppings = ['Hot Fudge'] } = {}) {
    const scoopText = scoops === 1 ? 'scoop' : 'scoops';
    return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
}
console.log(createSundae({}));
console.log(createSundae({ scoops: 2 }));
console.log(createSundae({ scoops: 2, toppings: ['Sprinkles'] }));
console.log(createSundae({ toppings: ['Cookie Dough'] }));
console.log(createSundae()); //TypeError: Cannot destructure property `scoops` of 'undefined' or 'null'. We need to use a default parameter