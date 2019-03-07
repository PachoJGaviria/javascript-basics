/**
 * Find the average of two numbers
 * @param {number} x
 * @param {number} y
 */
function findAverage(x, y) {
    return (x + y) / 2;
}

/**
 * Find the average of a list of numbers
 * @param {Array} numbers 
 */
function findAverage2(numbers) {
    var average = 0;
    numbers.forEach(element => {
        average += element;
    });
    average = average / numbers.length;
    return average;
}
console.log(`The average of 5 and 9 is ${findAverage(5, 9)}`);
console.log(`The average of 10, 11, 10, 12, 10, 11, and 10 is ${findAverage2([10, 11, 10, 12, 10, 11, 10])}`);

function isPrime(number) {
    // TODO
}

function square(number) {
    // TODO
}