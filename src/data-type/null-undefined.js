var x = null;
console.log(`The value of x is: ${x}`); // The variable has the value of nothing or empty.
var y;
console.log(`The value of y is: ${y}`); // The variable exist but has not any value (absence of value).
//x.toString();   TypeError: Cannot read property 'toString' of null
//y.toString();   TypeError: Cannot read property 'toString' of undefined

/**
 * NaN -> Not a Number
 * Indicating an error with number operations. 
 */
console.log("Hello" % 10);