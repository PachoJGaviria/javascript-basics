const readLineInterface = require('readline')

const rl = readLineInterface.createInterface({
  input: process.stdin,
  output: process.stdout
})

/**
 * The Fibonacci Sequence.
 * is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 * The next number is found by adding up the two numbers before it.
 * @param position what position in the sequence do you want to know
 */
function fibonacci (position) {
  var term = Number(position)
  if (term < 2) {
    return term
  } else {
    var currentFibonacci = 1
    var previosFibonacci = 0
    var temp = 0
    for (var index = 2; index <= position; index++) {
      temp = currentFibonacci
      currentFibonacci = currentFibonacci + previosFibonacci
      previosFibonacci = temp
    }
    return currentFibonacci
  }
}

function fibonacciRecursive (position) {
  const term = Number(position)
  if (term < 2) { // < 2
    return term
  }
  return fibonacciRecursive(term - 1) + fibonacciRecursive(term - 2)
}

rl.question('What fibonacci do you want to know? ', (position) => {
  let solution = fibonacci(position)
  let solutionRecursive = fibonacciRecursive(position)
  console.log(`The fibonacci of ${position} is: ${solution}`)
  console.log(`The fibonacci with recursive of ${position} is: ${solutionRecursive}`)
  rl.close()
})
