/**
 * bundle multiple elements back into an array
 */
const order = [20.17, 18.67, 1.50, 'cheese', 'eggs', 'milk', 'bread']
const [total, subtotal, tax, ...items] = order
console.log(total, subtotal, tax, items)
/**
 * You can think of the rest parameter like the opposite of the spread operator; if the spread operator is like unboxing all of the contents of a package, then the rest parameter is like taking all the contents and putting them back into the package.
 */
console.log('-------------------------')
/**
 * **Variadic functions** are functions that take an indefinite number of arguments.
 */
function sumOldWay () {
  let result = 0
  for (var index in arguments) {
    result += (arguments[index])
  }
  return result
}
function sum (...numbers) {
  let result = 0
  numbers.forEach(number => { result += number })
  return result
}
console.log(`Old way: ${sumOldWay()} - new way ${sum()}`)
console.log(`Old way: ${sumOldWay(1, 2)} - new way ${sum(1, 2)}`)
console.log(`Old way: ${sumOldWay(-10, 20, 1000, 3.14)} - new way ${sum(-10, 20, 1000, 3.14)}`)
console.log('-------------------------')
function average (...numbers) {
  if (numbers.length === 0) {
    return 0
  }
  return (sum(...numbers) / numbers.length)
}
console.log(average(2, 6))
console.log(average(2, 3, 3, 5, 7, 10))
console.log(average(7, 1432, 12, 13, 100))
console.log(average())
