
/**
 * Reverse a string
 * @param {String} reverseMe 
 */
function reverseString(reverseMe) {
    var reverse = "";
    for (let index = reverseMe.length - 1; index >= 0; index--) {
        reverse += reverseMe[index];        
    }
    return reverse; // returns value instead of printing it
}

function reverseString2(reverseMe) {
    // This function has bad performance.
    var reverse = [];
    var index = reverseMe.length - 1;
    reverse.length = reverseMe.length; 
    reverseMe.split("").forEach(character => {
        reverse[index] = character;
        index--;
    });
    return reverse.join("");
}

console.log(reverseString("Francisco") + " ama a " + reverseString("Olga y Martín"));
console.log(reverseString2("Olga y Martín") + " aman a " + reverseString2("Francisco"));

