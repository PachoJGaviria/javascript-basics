/**
 * **while loop**
 */
console.log('Even numbers')
var start = 0 // when to start
while (start < 20) { // when to stop
  console.log(start)
  start = start + 2 // how to get to the next item
}
/* * * * * * * * * * * * * * * * * * */
/**
 * **For loop**
 */
console.log('Odd numbers')
for (var oddNumber = 1; oddNumber < 20; oddNumber += 2) { // (start; stop; step)
  console.log(oddNumber)
}
/* * * * * * * * * * * * * * * * * * */
/**
 * **Nested for**
 * If there are 10 rows (0 to 9) and 15 seats (0 to 14) in each row,
 * write a nested for loop to print out all of the different seat
 * combinations in the theater.
 */
console.log('Row - Seat')
for (var row = 0; row < 10; row++) {
  for (var seat = 0; seat < 15; seat++) {
    console.log(`${row}-${seat}`)
  }
}
