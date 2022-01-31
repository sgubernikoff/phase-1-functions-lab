// Code your solution in this file!
let distance;
const distanceFromHqInBlocks = function (distance) {
  if (distance < 42) return 42 - distance;
  else return distance - 42;
};

const distanceFromHqInFeet = function (distance) {
  return distanceFromHqInBlocks(distance) * 264;
};

let start;
let destination;

const distanceTravelledInFeet = function (start, destination) {
  if (start > destination) return (start - destination) * 264;
  else return (destination - start) * 264;
};

const blockInFeet = 264;
const scuberHq = 42;
const calculatesFarePrice = function (start, destination) {
  const finalDistance = Math.abs(start - destination) * blockInFeet;
  if (finalDistance <= 400) return 0;
  else if (finalDistance >= 400 && finalDistance <= 2000)
    return (finalDistance - 400) * 0.02;
  else if (finalDistance >= 2000 && finalDistance < 2500) return 25;
  else return "cannot travel that far";
};
