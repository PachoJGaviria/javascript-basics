let target = { letter: 'a', number: 11 };
console.log(target);
let source = { number: 7, size: 100 };
Object.assign(target, source);
console.log(target);

console.log('-----------------------------------')

const duck = {
    hasBill: true
};
const beaver = {
    hasTail: true
};
const otter = {
    hasFur: true,
    feet: 'webbed'
};

const platypus = Object.assign({}, duck, beaver, otter);
console.log(platypus);
console.log(platypus.constructor);
console.log(platypus.isPrototypeOf(duck));
console.log(duck.isPrototypeOf(platypus));
console.log(platypus.isPrototypeOf(beaver));
console.log(beaver.isPrototypeOf(duck));
console.log(platypus.isPrototypeOf(otter)); 
console.log(otter.isPrototypeOf(platypus));