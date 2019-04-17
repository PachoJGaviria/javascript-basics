/**
 * A JavaScript **Promise** is created with the new Promise constructor function - new Promise(). A promise will let you start some work that will be done asynchronously and let you get back to your regular work. When you create the promise, you must give it the code that will be run asynchronously. You provide this code as the argument of the constructor function:
 */

let myPromise = new Promise(function (resolve, reject) {
    setTimeout(function createSundae(flavor = 'chocolate') {
        if (flavor) {
            const sundae = { flavor };
            // request ice cream
            // get cone
            // warm up ice cream scoop
            // scoop generous portion into cone!
            console.log(sundae);
            resolve(sundae);
        } else {
            reject('We need a flavor!');
        }
    }, Math.random() * 2000);
});
myPromise.then((sundae) => console.log('The promise ends successfully.', sundae));
myPromise.catch((error) => console.log('The promise fails.', error));
myPromise.finally(() => console.log('This is the finally of the promise.'))
console.log('-------------------------');
console.log(myPromise);
console.log('waiting');

myPromise = new Promise(function (resolve, reject) {
    setTimeout(function createSundae(flavor) {
        if (flavor) {
            const sundae = { flavor };
            // request ice cream
            // get cone
            // warm up ice cream scoop
            // scoop generous portion into cone!
            console.log(sundae);
            resolve(sundae);
        } else {
            reject('We need a flavor!');
        }
    }, Math.random() * 5000);
});
myPromise.then((sundae) => console.log('The promise ends successfully.', sundae));
myPromise.catch((error) => console.log('The promise fails.', error));
myPromise.finally(() => console.log('This is the finally of the promise.'))
console.log('-------------------------');
console.log(myPromise);
console.log('waiting');