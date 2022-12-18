// Code your solution in this file!
const distanceFromHqInBlocks = (block2, block1 = 42) => {
    return Math.abs(block2 - block1);
};

console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));


const distanceFromHqInFeet = (block2, block1 = 42) => {
    return distanceFromHqInBlocks(block2, block1) * 264;
};

console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(34));


const distanceTravelledInFeet = (block2, block1) => {
    return distanceFromHqInBlocks(block2, block1) * 264;
};

console.log(distanceTravelledInFeet(43, 48));
console.log(distanceTravelledInFeet(50, 60));
console.log(distanceTravelledInFeet(34, 28));


const calculatesFarePrice = (block2, block1) => {
    let totalFeet = distanceTravelledInFeet(block2, block1);
    if (totalFeet <= 400) {
        return 0;
    } else if (totalFeet > 400 && totalFeet <= 2000) {
        return (totalFeet - 400) * 0.02;
    } else if (totalFeet > 2000 && totalFeet <= 2500) {
        return (totalFeet - 2000) * 0.25;
    } else {
        return `cannot travel that far`
    }
};

console.log(calculatesFarePrice(43, 44));
console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(50, 58));
console.log(calculatesFarePrice(34, 24));
