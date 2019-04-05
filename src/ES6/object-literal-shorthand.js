let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
    type: type,
    color: color,
    carat: carat
};

console.log(gemstone);

const gemstoneNewWay = {
    type, carat, color, calculateWorth() {
        return carat * (type.length > 4 ? 100 : 10);
    }
};
console.log(gemstoneNewWay);
console.log(gemstoneNewWay.calculateWorth());