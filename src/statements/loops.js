/**
 * while loop
 */
console.log("Even numbers")
var start = 0; // when to start
while (start < 20) { // when to stop
  console.log(start);
  start = start + 2; // how to get to the next item
}


/**
 * Foor loop
 */
console.log("Odd numbers");
for (var oddNumber = 1; oddNumber < 20; oddNumber += 2) { // (start; stop; step)
    console.log(oddNumber);
}

/**
 * nested Foor 
 * If there are 26 rows (0 to 25) and 100 seats (0 to 99) in each row, 
 * write a nested for loop to print out all of the different seat combinations in the theater.
 */
console.log("Row - Seat");
for (var row = 0; row < 26; row++) {
  for (var seat = 0; seat < 100; seat++) {
      console.log(`${row}-${seat}`);
  }
}