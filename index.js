// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    const headquarter = 42;
    return Math.abs(pickupLocation-headquarter);
}
console.log(distanceFromHqInBlocks(43));

function distanceFromHqInFeet(pickupLocation){
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const numberOfFeetPerBlock  = 264;
    return blocks * numberOfFeetPerBlock;
}
console.log(distanceFromHqInFeet);

function distanceTravelledInFeet(startBlock, endBlock) {
    const blocks = Math.abs(startBlock - endBlock);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}

function calculatesFarePrice(startBlock, endBlock) {
    const feetTraveled = distanceTravelledInFeet(startBlock, endBlock);
  
    if (feetTraveled > 2500) {
      return 'cannot travel that far';
    }
  
    if (feetTraveled <= 400) {
      return 0;
    } else if (feetTraveled <= 2000) {
      return (feetTraveled - 400) * 0.02;
    } else if (feetTraveled <= 2500) {
      return 25;
    }
  }
 
  


  
