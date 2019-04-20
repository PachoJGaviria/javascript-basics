/**
 * A WeakMap is just like a normal Map with a few key differences:

a WeakMap can only contain objects as keys,
a WeakMap is not iterable which means it can’t be looped and
a WeakMap does not have a .clear() method.
 */
let book1 = { title: 'Pride and Prejudice', author: 'Jane Austen' }
let book2 = { title: 'The Catcher in the Rye', author: 'J.D. Salinger' }
let book3 = { title: 'Gulliver’s Travels', author: 'Jonathan Swift' }

const library = new WeakMap()
library.set(book1, true)
library.set(book2, false)
library.set(book3, true)
console.log(library)
console.log(library.has(book1))
console.log(library.has(book2))
console.log(library.has({}))
console.log(library.has(book3))
book1 = null
console.log(library.has(book1))
console.log(library.has(book2))
console.log(library.has(book3))
