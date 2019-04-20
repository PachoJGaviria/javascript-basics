/**
 * **closure** -> The process of a function retaining access to its scope
 */
function remember (number) {
  return function () {
    return number
  }
}

const returnedFunction = remember(5)

console.log(returnedFunction())

/**
 * **lexical environment** The association of Identifiers to specific variables and functions based upon the lexical nesting structure of ECMAScript code.
 *
 * A closure refers to the combination of a function and the lexical environment in which that function was declared. Every time a function is defined, closure is created for that function. This is especially powerful in situations where a function is defined within another function, allowing the nested function to access variables outside of it. Functions also keep a link to its parent's scope even if the parent has returned. This prevents data in its parents from being garbage collected.
 */
