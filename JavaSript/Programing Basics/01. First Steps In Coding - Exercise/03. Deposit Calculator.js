function calcDeposit(input) {
    let depositSum = Number(input[0]);
    let depositTerm = Number(input[1]);
    let annIntRate = Number(input[2]) * 0.01;

    let accInterest = depositSum * annIntRate;
    let intPerMonth = accInterest / 12;
    let total = depositSum + (depositTerm * intPerMonth);

    console.log(total);
}