const fs = require('fs');
const setOne = new Set([]);
const setTwo = new Set([]);
const setFinal = new Set([]);

const contentOne = fs.readFileSync('/Users/mochi/Desktop/propietarios77.csv', 'utf8');
contentOne.split("\n").forEach(row => {
    setOne.add(row); 
    setFinal.add(row);
});

const contentTwo = fs.readFileSync('/Users/mochi/Desktop/propietarios77 - 2.csv', 'utf8');
contentTwo.split("\n").forEach(row => {
    setTwo.add(row); 
    setFinal.add(row);
});

const setDiff = new Set([]);

setTwo.forEach(row => {
    if (!setOne.has(row)) {
        setDiff.add(row);
    }
});

/*clea
console.log(setDiff);
console.log('--------------');
console.log(setOne);
console.log('--------------');
console.log(setTwo);
console.log('--------------');
*/
setFinal.forEach(email => console.log(email));
