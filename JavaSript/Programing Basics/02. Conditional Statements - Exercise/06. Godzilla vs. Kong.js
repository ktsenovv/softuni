function movieMoneyCalc(input) {
    let movieBudget = Number(input[0]);
    let numExtras = Number(input[1]);
    let wearPrice = Number(input[2]);

    let decoreSum = movieBudget * 0.10;
    let wearSum = numExtras * wearPrice;

    if(numExtras > 150) {
        wearSum = wearSum - (wearSum * 0.10);
    }
    
    let movieSum = decoreSum + wearSum;
    let moneyLeft = movieBudget - movieSum;
    
    if(movieSum > movieBudget) {
        console.log('Not enough money!');
        console.log(`Wingard needs ${Math.abs(moneyLeft).toFixed(2)} leva more.`);
    } else if(movieSum <= movieBudget) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
}