function toyshop(input) {
    let excursionPrice = Number(input[0]);
    let numPuzzles = Number(input[1]);
    let numDolls = Number(input[2]);
    let numBears = Number(input[3]);
    let numMinions = Number(input[4]);
    let numTrucks = Number(input[5]);

    let totalPrice = (numPuzzles * 2.60) + (numDolls * 3) + (numBears * 4.10) + (numMinions * 8.20) + (numTrucks * 2);
    let totalToys = numPuzzles + numDolls + numBears + numMinions + numTrucks;

    let discount = 0;

    if(totalToys >= 50) {
        discount = totalPrice * 0.25;
    }

    totalPrice -= discount;
    let rent = totalPrice * 0.10;
    totalPrice -= rent;

    if(totalPrice >= excursionPrice) {
        console.log(`Yes! ${(totalPrice - excursionPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${Math.abs(totalPrice - excursionPrice).toFixed(2)} lv needed.`);
    }
}