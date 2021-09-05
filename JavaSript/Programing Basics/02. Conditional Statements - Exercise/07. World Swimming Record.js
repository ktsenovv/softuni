function worldSwimmingRecoord(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let time = Number(input[2]);
    
    let speed = distance * time;
    let current = Math.floor(distance / 15) * 12.5;
    let total_time = speed + current;
    
    if(record > total_time) {
        console.log(`Yes, he succeeded! The new world record is ${total_time.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${Math.abs(record - total_time).toFixed(2)} seconds slower.`);
    }
}