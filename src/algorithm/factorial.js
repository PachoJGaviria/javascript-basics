const readLineInterface = require('readline');

const rl = readLineInterface.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Function factorial. A factorial is calculated by multiplying a number by all the numbers below it.
 * 5! = 5 * 4 * 3 * 2 * 1 = 120 5!=5∗4∗3∗2∗1=120
 * @param baseNumber base number for the factorial calculation
 */
function factorial(baseNumber) {
  let solution = 1;
  for (let index = baseNumber; index > 0; index--) {
    solution *= index;
  }
  return solution;
}

rl.question('What factorial do you want to know? ', (baseNumber) => {
  let solution = factorial(baseNumber);
  console.log(`The factorial of ${baseNumber} is: ${solution}`);
  rl.close();
});
