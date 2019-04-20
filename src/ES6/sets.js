/**
 *
 * **Set**
 * A set is a collection of distinct items
 * Sets are not indexed-based - you do not refer to items in a set based on their position in the set
 * items in a Set can’t be accessed individually
 */
const games = new Set()
console.log(games)
const oldGames = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.'])
console.log(oldGames)
oldGames.add('Banjo-Tooie')
oldGames.add('Age of Empires')
oldGames.delete('Super Mario Bros.')
console.log(oldGames)
oldGames.clear()
console.log(oldGames)

const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])
console.log(months)
console.log(months.size)
console.log(months.has('September'))
console.log(months.values())
console.log(months.keys())
console.log(months.entries())
for (const month of months) {
  console.log(month)
}
const colors = new Set(['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'brown', 'black'])
for (const color of colors) {
  console.log(color)
}
