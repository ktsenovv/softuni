function thelift(input) {
    let passengers = input.shift();
    let wagons = input.shift().split(` `).map(Number);
    let capacity = 4;
    let numOfWagons = wagons.length;
    let totalCapacity = capacity * numOfWagons;
    let overflow = passengers - totalCapacity;
 
    for (const iterator of wagons) {
        if (iterator != 0) {
            overflow+=iterator;
        }
    }
    
    for (let i = 0; i < wagons.length; i++) {
        while (wagons[i] < capacity) {
            if (passengers > 0) {
                passengers--;
                wagons[i]++;
            } else {
                break;
            }
        }
    }
    
    if (overflow < 0) {
        console.log(`The lift has empty spots!`);
        console.log(wagons.join(` `));
    } else if (overflow == 0){
        console.log(wagons.join(` `));
    } else {
        console.log(`There isn't enough space! ${passengers} people in a queue!`);
        console.log(wagons.join(` `));
    }
}

thelift([
    "15",
    "0 0 0 0 0"
   ]);