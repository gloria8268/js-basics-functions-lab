// Code your solution in this file!

const headblock = 42;
let normalblock = 43;
const distanceFromHqInBlocks = (normalblock) => {
  return Math.abs(normalblock - headblock);
};

console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));


const distanceFromHqInFeet = (normalblock) => {
    return Math.abs((normalblock - headblock)) * 264;
};

console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(34));


let normalblock1 = 50;
let normalblock2 = 60;
const distanceTravelledInFeet = (normalblock1, normalblock2) => {
    return Math.abs((normalblock1 - normalblock2)) * 264;
};

console.log(distanceTravelledInFeet(43, 48));
console.log(distanceTravelledInFeet(50, 60));
console.log(distanceTravelledInFeet(34, 28));


const calculatesFarePrice = (normalblock1, normalblock2) =>{
  let totalFeet = distanceTravelledInFeet(normalblock1, normalblock2);
if ( totalFeet <= 400 ) {
    return totalFeet*0;
} else if (totalFeet > 400 && totalFeet <= 2000) {
    return (totalFeet-400)*0.02;
} else if (totalFeet > 2000 && totalFeet <=2500) {
    return (totalFeet-2000)*0.25;
} else {
    return `cannot travel that far`
}
};

console.log(calculatesFarePrice(43, 44));
console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(50, 58));
console.log(calculatesFarePrice(34, 24));
