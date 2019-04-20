/**
 * **Bitwise Operators**
 * Bit operators work on 32 bits numbers.
 * Any numeric operand in the operation is converted into a 32 bit number.
 * The result is converted back to a JavaScript number.
 *
 * Operator   Description   Example     Same as       Result    Decimal
 * &          AND           x = 5 & 1   0101 & 0001   0001      1
 * |          OR            x = 5 | 1   0101 | 0001   0101      5
 * ~          NOT           x = ~ 5     ~0101         1010      10
 * ^          XOR           x = 5 ^ 1   0101 ^ 0001   0100      4
 * <<         Left shift    x = 5 << 1  0101 << 1     1010      10
 * >>         Right shift   x = 5 >> 1  0101 >> 1     0010      2
 *
 * The examples above uses 4 bits unsigned examples.
 * But JavaScript uses 32-bit signed numbers. Because of this, in JavaScript,
 * ~ 5 will not return 10. It will return -6.
 * ~00000000000000000000000000000101 will return 11111111111111111111111111111010
 */
/* * * * * * * * * * * * * * * * * * */
/**
 * **The typeof Operator**
 * The typeof operator returns the type of a variable, object, function or expression:
 */
console.log(typeof 'John') // Returns string
console.log(typeof 3.14) // Returns number
console.log(typeof NaN) // Returns number
console.log(typeof false) // Returns boolean
console.log(typeof [1, 2, 3, 4]) // Returns object
console.log(typeof { name: 'John', age: 34 }) // Returns object
console.log(typeof new Date()) // Returns object
console.log(typeof function () { }) // Returns function
console.log(typeof myCar) // Returns undefined (if myCar is not declared)
console.log(typeof null) // Returns object
/**
 * Please observe:
 * The data type of NaN is number
 * The data type of an array is object
 * The data type of a date is object
 * The data type of null is object
 * The data type of an undefined variable is undefined
 *
 * You cannot use typeof to define if a JavaScript object is an array (or a date).
 */
/* * * * * * * * * * * * * * * * * * */
/**
 * **The delete Operator**
 * The delete operator deletes a property from an object
 */
let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue'
}
console.log(person)
delete person.age // or delete person["age"];
console.log(person)
/**
 * The delete operator, deletes both the value of the property and the property itself.
 * After deletion, the property cannot be used before it is added back again.
 * The delete operator is designed to be used on object properties.
 * It has no effect on variables or functions.
 * Note: The delete operator should not be used on predefined JavaScript object properties.
 * It can crash your application.
 */
/* * * * * * * * * * * * * * * * * * */
/**
 * **The in Operator**
 * The in operator returns true if the specified property is in the specified object,
 * otherwise false
 */
let cars = ['Saab', 'Volvo', 'BMW']
console.log('Saab' in cars) // Returns false (specify the index number instead of value)
console.log(0 in cars) // Returns true
console.log(1 in cars) // Returns true
console.log(4 in cars) // Returns false (does not exist)
console.log('length' in cars) // Returns true  (length is an Array property)

// Objects
person = { firstName: 'John', lastName: 'Doe', age: 50 }
console.log('firstName' in person) // Returns true
console.log('age' in person) // Returns true
// Predefined objects
console.log('PI' in Math) // Returns true
console.log('NaN' in Number) // Returns true
console.log('length' in String) // Returns true
/* * * * * * * * * * * * * * * * * * */
/**
 * **The instanceof Operator**
 * The instanceof operator returns true if the specified object is an instance of the specified object
 */
console.log(cars instanceof Array) // Returns true
console.log(cars instanceof Object) // Returns true
console.log(cars instanceof String) // Returns false
console.log(cars instanceof Number) // Returns false
/* * * * * * * * * * * * * * * * * * */
/**
 * **The void Operator**
 * The void operator evaluates an expression and returns undefined.
 * This operator is often used to obtain the undefined primitive value,
 * using "void(0)" (useful when evaluating an expression without using the return value).
 */
console.log(void (0))
console.log(void ('red'))
