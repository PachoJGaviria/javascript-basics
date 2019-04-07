/**
 * The spread operator, written with three consecutive dots ( ... ), is new in ES6 and gives you the ability to expand, or spread, iterable objects into multiple elements.
 */
const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);

const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes);

console.log('Combining arrays')
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
console.log('With concat:', fruits.concat(vegetables));
console.log('With new array?:', [fruits, vegetables]);
console.log('With spread operator:', [...fruits, ...vegetables]);