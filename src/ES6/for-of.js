/**
 * for loop
 */
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('For loop');
for (let i = 0; i < digits.length; i++) {
    console.log(digits[i]);
}
console.log('For in')
for (const index in digits) {
    console.log(digits[index]);
}
Array.prototype.decimalfy = function () {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toFixed(2);
    }
};
console.log('For in with Array.prototype.decimalfy')
for (const index in digits) {
    console.log(digits[index]);
}
console.log('For of')
for (const digit of digits) {
    console.log(digit);
}
console.log('The odd numbers')
for (const digit of digits) {
    if (digit % 2 === 0) {
        continue;
    }
    console.log(digit);
}
console.log('--------------------------')
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

Object.defineProperty(String.prototype, 'toUpperCaseFirstChar', {
    value() {
        return `${this.charAt(0).toUpperCase()}${this.slice(1)}`
    }
});

for (const day of days) {
    console.log(day.toUpperCaseFirstChar());
}