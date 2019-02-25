/**
 * Basic data types
 */
var myNumber = 3;               // This is a number
var myOtherNumber = 34.98;      // This is a other number
var myString = "Hello world";   // This is a string
var myBoolena = true;           // This is a boolena

/** 
 * Arithmetic Operators
 * Arithmetic operators are used to perform arithmetic between variables and/or values.
 * +	Addition
 * -	Subtraction
 * *	Multiplication
 * /	Division
 * %	Modulus (division remainder)
 * ++	Increment
 * x = y++	y = 6
 * --	Decrement
*/
var y = 5;
var x = 0;
console.log(`The value of y is ${y} and the value of x is ${x}.`);
x = y + 1;
console.log(`The result of x = y + 1 is equals to: ${x}`);
x = x - 2;
console.log(`The result of x = x - 2 is equals to: ${x}`);
x = x * y;
console.log(`The result of x = x * y is equals to: ${x}`);
x = x / 2;
console.log(`The result of x = x / 2 is equals to: ${x}`);
x = x % 3;
console.log(`The result of x = x % 3 is equals to: ${x}`);
x = x++;
console.log(`The result of x = x++ is equals to: ${x}`);
x = x--;
console.log(`The result of x = x-- is equals to: ${x}`);
x = ++x;
console.log(`The result of x = ++x is equals to: ${x}`);
x = --x;
console.log(`The result of x = --x is equals to: ${x}`);

/** 
 * Assignment Operators
 * Assignment operators are used to assign values to JavaScript variables.
 * =	x = y	x = y	    x = 5	
 * +=	x += y	x = x + y	x = 15	
 * -=	x -= y	x = x - y	x = 5	
 * *=	x *= y	x = x * y	x = 50	
 * /=	x /= y	x = x / y	x = 2	
 * %=	x %= y	x = x % y	x = 0	
 */

/**
 * String Operators
 * The + operator, and the += operator can also be used to concatenate (add) strings.
 * +	text3 = text1 + text2	"Good "	"Morning"	 "Good Morning"	
 * +=	text1 += text2	"Good Morning"	"Morning"	""
 */

/**
 * Comparison Operators
 * Comparison operators are used in logical statements to determine equality 
 * or difference between variables or values.
 * ==	equal to	x == 8	false	x == 5	true
 * ===	equal value and equal type	x === "5"	false x === 5	true
 * !=	not equal	x != 8	true	
 * !==	not equal value or not equal type	x !== "5"	true	
 * x !== 5	false	
 * >	greater than	x > 8	false	
 * <	less than	x < 8	true	
 * >=	greater than or equal to	x >= 8	false	
 * <=	less than or equal to	x <= 8	true	
 * 
 * 
 * 
 * 
 * 
 */

/** 
 * Conditional (Ternary) Operator
 * The conditional operator assigns a value to a variable based on a condition.
 * variablename = (condition) ? value1:value2	voteable = (age < 18) ? "Too young":"Old enough";	
 * Example explained: If the variable "age" is a value below 18, the value of the variable "voteable" will be "Too young", otherwise the value of voteable will be "Old enough".
 */

/**
 * Logical Operators
 * Logical operators are used to determine the logic between variables or values.
 * &&	and	(x < 10 && y > 1) is true	
 * ||	or	(x === 5 || y === 5) is false	
 * !	not	!(x === y) is true
 */


//Escaping Strings

// console.log("This is a "Error"");
console.log("This is not a \"Error\"");


