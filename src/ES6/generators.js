/**
 * **Generators functions**
 * Generators are a powerful new kind of function that is able to pause its execution while also maintaining its own state. Generators are great for iterating over a list of items one at a time so you can handle each item on its own before moving on to the next one. You can also use generators to handle nested callbacks. For example, let's say that an app needs to get a list of all repositories and the number of times they've been starred. Well, before you can get the number of stars for each repository, you'd need to get the user's information. Then after retrieving the user's profile the code can then take that information to find all of the repositories.
 */

 /**
  * **Pausable Functions**
  * **The Yield Keyword**
  * Sending Data out of a Generator
  */

 function *getEmployeeOne() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log( name );
        yield name;
    }

    console.log('the function has ended');
}
let generatorIterator = getEmployeeOne();
console.log(generatorIterator);
console.log(generatorIterator.next());
console.log(generatorIterator.next());

function* udacity() {
    yield 'Richard';
    yield 'James'
}
const generatorUdacity = udacity();
console.log(generatorUdacity.next());
console.log(generatorUdacity.next());
console.log(generatorUdacity.next());

/**
 * Sending Data into of a Generator
 */
console.log();
function* displayResponse() {
    const response = yield;
    console.log(`Your response is "${response}"!`);
}

const iterator = displayResponse();

iterator.next(); // starts running the generator function
iterator.next('Hello Udacity Student'); // send data into the generator
// the line above logs to the console: Your response is "Hello Udacity Student"!


/**
 * 
 */
console.log();
function* getEmployee() {
    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
    const facts = [];
    for (const name of names) {
        // yield *out* each name AND store the returned data into the facts array
        facts.push(yield name); 
    }
    return facts;
}
generatorIterator = getEmployee();

// get the first name out of the generator
let name = generatorIterator.next().value;
console.log(name);

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is cool!`).value; 
console.log(name);

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is awesome!`).value; 

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is stupendous!`).value; 

// you get the idea
name = generatorIterator.next(`${name} is rad!`).value; 
name = generatorIterator.next(`${name} is impressive!`).value;
name = generatorIterator.next(`${name} is stunning!`).value;
name = generatorIterator.next(`${name} is awe-inspiring!`).value;

// pass the last data in, generator ends and returns the array
const positions = generatorIterator.next(`${name} is magnificent!`).value; 

// displays each name with description on its own line
console.log(positions.join('\n')); 

/**
 * 
 */
console.log()
function* createSundae() {
    const toppings = [];

    toppings.push(yield);
    toppings.push(yield);
    toppings.push(yield);

    return toppings;
}

let it = createSundae();
it.next('hot fudge');
it.next('sprinkles');
it.next('whipped cream');
console.log(it.next());

it = createSundae();
it.next();
it.next('hot fudge');
it.next('sprinkles');
console.log(it.next('whipped cream'));
