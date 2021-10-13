function timeToWalk(stepsNumber, footprintLenght, speed) {
    let distanceMeters = stepsNumber * footprintLenght;
    let speedMeters = speed / 3.6;
    let rest = Math.floor(distanceMeters / 500);

    let time = distanceMeters / speedMeters;
    let timeMinutes = Math.floor(time / 60);
    let timeSeconds = Math.round(time - (timeMinutes * 60));
    let timeHours = Math.floor(time / 3600);
    
    console.log((timeHours < 10 ? "0" : "") + timeHours + ":" + (timeMinutes + rest < 10 ? "0" : "") + (timeMinutes + rest) + ":" + (timeSeconds < 10 ? "0" : "") + timeSeconds);
}

timeToWalk(4000, 0.60, 5);
console.log();
timeToWalk(2564, 0.70, 5.5);