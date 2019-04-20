/**
 * Find the average of two numbers
 * @param {number} x
 * @param {number} y
 */
function findAverage (x, y) {
  return (x + y) / 2
}

/**
 * Find the average of a list of numbers
 * @param {Array} numbers
 */
function findAverage2 (numbers) {
  var average = 0
  numbers.forEach(element => {
    average += element
  })
  average = average / numbers.length
  return average
}
console.log(`The average of 5 and 9 is ${findAverage(5, 9)}`)
console.log(`The average of 10, 11, 10, 12, 10, 11, and 10 is ${findAverage2([10, 11, 10, 12, 10, 11, 10])}`)

function isPrime (number) {
  if (!Number.isInteger(number) || number <= 0) {
    console.log(`We need a positive integers. param: ${number} - type: ${typeof number}`)
    return false
  }
  for (let index = 2; index < number; index++) {
    if (number % index === 0) {
      console.log(`The number ${number} is divisible by ${index}`)
      return false
    }
  }
  return true
}
console.log(isPrime(-1))
console.log(isPrime(0))
console.log(isPrime())
console.log(isPrime(null))
console.log(isPrime('20'))
console.log(isPrime([30, 40]))
console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(5))
console.log(isPrime(7))
console.log(isPrime(9))
console.log(isPrime(48))
console.log(isPrime(50))
console.log(isPrime(99))

function square (number) {
  return number * number
}
console.time('my square')
console.log(square(234))
console.timeEnd('my square')

console.time('Math square')
console.log(Math.sqrt(234))
console.timeEnd('Math square')

console.time('my square')
console.log(square(23))
console.timeEnd('my square')

console.time('Math square')
console.log(Math.sqrt(23))
console.timeEnd('Math square')

console.time('my square')
console.log(square(53))
console.timeEnd('my square')

console.time('Math square')
console.log(Math.sqrt(53))
console.timeEnd('Math square')
