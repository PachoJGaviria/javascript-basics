/**
 * If statements
 */
// if...else...
var a = 1;
var b = 2;
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than or equal to b");
}
// If... else if... else...
var weather = "sunny";
if (weather === "snow") {
  console.log("Bring a coat.");
} else if (weather === "rain") {
  console.log("Bring a rain jacket.");
} else {
  console.log("Wear what you have on.");
}

/**
 * Truth tables
 * The short-circuiting ->s it describes the event when later arguments in a logical expression are not considered because the first argument already satisfies the condition.
 */

 /**
  * Ternary operator
  */
var isGoing = true;
var color = isGoing ? "green" : "red";
console.log(color);

/**
 * Switch Statement
 */
var option = 3;

switch (option) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
    break;
  case 6:
    console.log("You selected option 6.");
    break;
  default:
    console.log("The option is not valid.");
}