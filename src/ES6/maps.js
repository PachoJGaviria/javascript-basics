/**
 * If Sets are similar to Arrays, then Maps are similar to Objects because Maps store key-value pairs similar to how objects contain named properties with values.
 * Essentially, a Map is an object that lets you store key-value pairs where both the keys and the values can be objects, primitive values, or a combination of the two.
 */

const employees = new Map()
console.log(employees)
employees.set('james.parkes@udacity.com', {
  firstName: 'James',
  lastName: 'Parkes',
  role: 'Content Developer'
})
employees.set('julia@udacity.com', {
  firstName: 'Julia',
  lastName: 'Van Cleve',
  role: 'Content Developer'
})
employees.set('richard@udacity.com', {
  firstName: 'Richard',
  lastName: 'Kalehoff',
  role: 'Content Developer'
})

console.log(employees)
employees.delete('julia@udacity.com')
employees.delete('richard@udacity.com')
console.log(employees)
console.log(employees.has('james.parkes@udacity.com'))
console.log(employees.get('james.parkes@udacity.com'))
employees.clear()
console.log(employees)

/**
 * you’ve got three different options to choose from:

Step through each key or value using the Map’s default iterator
Loop through each key-value pair using the new for...of loop
Loop through each key-value pair using the Map’s .forEach() metho
 */

const members = new Map()

members.set('Evelyn', 75.68)
members.set('Liam', 20.16)
members.set('Sophia', 0)
members.set('Marcus', 10.25)

for (const key of members.keys()) {
  console.log(key)
}
for (const key of members.values()) {
  console.log(key)
}
console.log('---------------------')
for (const member of members) {
  const [key, value] = member
  console.log(key, value)
}
console.log('---------------------')
members.forEach((value, key) => console.log(key, value))
