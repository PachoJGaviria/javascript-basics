/**
 * **Arrays**
 * Used it for save a lot of objects (all with the same type or mixed type).
 * The objects in an array are elements and has a position into the array call index
 * The first index of an array is zero
 * if you try to access an element at an index that does not exist, a value of undefined will be returned back
 */

var donuts = ['glazed', 'powdered', 'sprinkled']
console.log(donuts[0])
console.log(donuts[3]) // the fourth element in `donuts` array does not exist!
donuts[1] = 'glazed cruller' // changes the second element in the `donuts` array to "glazed cruller"
console.log(donuts[1])
console.log(donuts.length) // the number of elements in the array

donuts = ['glazed', 'chocolate frosted', 'Boston creme', 'glazed cruller', 'cinnamon sugar', 'sprinkled']
console.log(donuts)
donuts.push('powdered') // pushes "powdered" onto the end of the `donuts` array
console.log(donuts)
console.log('Pop one element = ' + donuts.pop()) // pops "powdered" off the end of the `donuts` array
console.log('Pop one element = ' + donuts.pop()) // pops "sprinkled" off the end of the `donuts` array
console.log('Pop one element = ' + donuts.pop()) // pops "cinnamon sugar" off the end of the `donuts` array
console.log(donuts)

donuts = ['glazed', 'chocolate frosted', 'Boston creme', 'glazed cruller']
console.log(donuts)
console.log(donuts.splice(1, 2, 'chocolate cruller', 'creme de milk')) // removes "chocolate frosted" at index 1 and adds "chocolate cruller" and "creme de milk" starting at index 1
console.log(donuts)

donuts = ['cookies', 'cinnamon sugar', 'creme de milk']
donuts.splice(-2, 0, 'chocolate frosted', 'glazed') // it will count backward at the end of an array.
console.log(donuts)
donuts.reverse()
console.log(donuts)
donuts.sort()
console.log(donuts)
console.log(donuts.join('; '))

/**
 * ForEach
 */
donuts = ['glazed', 'chocolate frosted', 'Boston creme', 'glazed cruller']
donuts.forEach((element, index, array) => {
  console.log(`Element => ${element}`)
  console.log(`Index   => ${index}`)
  console.log(`array:  => ${array}`)
})
console.log(donuts)

/**
 * Map
 */
const order = donuts.map(donut => {
  if (Math.random() * 10 > 5) {
    return `2 of ${donut}`
  }
  return `1 of ${donut}`
})
/**
 * join
 */
console.log(`My order is:
${order.join('\n')}`)
