/**
 * The variable has the value of **nothing or empty**.
 */
let x = null
console.log(`The value of x is: ${x}`)
// x.toString();   TypeError: Cannot read property 'toString' of null
/* * * * * * * * * * * * * * * * * * */
/**
 * The variable exist but has not **any value** (**absence of value**).
 */
let y
console.log(`The value of y is: ${y}`)
// y.toString();   TypeError: Cannot read property 'toString' of undefined
/* * * * * * * * * * * * * * * * * * */
/**
 * **NaN** -> Not a Number
 * Indicating an error with number operations.
 */
console.log('Hello' % 10)
