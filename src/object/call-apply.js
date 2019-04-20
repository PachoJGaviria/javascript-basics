function multiply (factorOne, factorTwo) {
  this.result = factorOne * factorTwo
  return result // eslint-disable-line no-undef
}

console.log(multiply(3, 4))

/**
 * call sample
 * call() invokes the function and has arguments passed in individually, separated by commas.

 */
const callThis = {}
console.log(multiply.call(callThis, 3, 4))
console.log(callThis)

const mockingbird = {
  title: 'To Kill a Mockingbird',
  describe: function () {
    console.log(`${this.title} is a classic novel`)
  }
}
mockingbird.describe()
const pride = {
  title: 'Pride and Prejudice'
}

mockingbird.describe.call(pride)

/**
 * Apply sample
 * apply() is similar to call(); it invokes the function just the same, but arguments are passed in as an array.
 */
const applyThis = {}
console.log(multiply.apply(applyThis, [3, 4]))
console.log(applyThis)
mockingbird.describe()
mockingbird.describe.apply(pride)

const andrew = {
  name: 'Andrew'
}

function introduce (language) {
  console.log(`I'm ${this.name} and my favorite programming language is ${language}.`)
}

introduce.call(andrew, 'Javascript')
