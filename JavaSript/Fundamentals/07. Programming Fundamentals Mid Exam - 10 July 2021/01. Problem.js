function solve(input) {
    let budget = input.shift();
    let students = input.shift();
    let flourPricePerPackage = input.shift();
    let eggPricePer = input.shift();
    let apronPricePer = input.shift();
    let freePackages = 0;

    let neededApronPrice = apronPricePer * (students + Math.ceil((students * 0.20)));

    let neededEggsPrice = eggPricePer * (10 * students);

    for (let i = 1; i <= students; i++) {
        if (i % 5 === 0) {
            freePackages++;
        }
    }

    let neededFlourPrice = flourPricePerPackage * (students - freePackages);

    let totalPrice = neededApronPrice + neededEggsPrice + neededFlourPrice;
    
    if (totalPrice <= budget) {
        console.log(`Items purchased for ${totalPrice.toFixed(2)}$.`);
    } else {
        console.log(`${(totalPrice - budget).toFixed(2)}$ more needed.`);
    }
}

solve([100,
    25,
    4.0,
    1.0,
    6.0]);