function fruitMarket(input) {
    let strawberriesPrice = Number(input[0]);
    let bananasKG = Number(input[1]);
    let orangesKG = Number(input[2]);
    let raspberriesKG = Number(input[3]);
    let strawberriesKG = Number(input[4]);

    let raspberriesPrice = strawberriesPrice * 0.5;
    let orangesPrice = raspberriesPrice - (raspberriesPrice * 0.4);
    let bananasPrice = raspberriesPrice - (raspberriesPrice * 0.8);

    let raspberriesTotal = raspberriesKG * raspberriesPrice;
    let orangesTotal = orangesKG * orangesPrice;
    let bananasTotal = bananasKG * bananasPrice;
    let strawberriesTotal = strawberriesKG * strawberriesPrice;

    let total = raspberriesTotal + orangesTotal + bananasTotal + strawberriesTotal;

    console.log(total.toFixed(2));
}