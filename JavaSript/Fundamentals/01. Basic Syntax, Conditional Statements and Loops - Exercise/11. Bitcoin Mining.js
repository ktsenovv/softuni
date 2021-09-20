function bitcoinMining(input) {
    let bitcoinCurrency = 11949.16;
    let goldCurrency = 67.51;
    let bitcoinsCount = 0;
    let firstDay = 0;
    let dayCount = 0;
    let totalMoney = 0;

    for(let i = 0; i <= input.length - 1; i++) {
        let goldPerDay = input[i];
        dayCount++;

        if(dayCount % 3 === 0) {
            goldPerDay *= 0.70;
        }

        totalMoney += goldPerDay * goldCurrency;

        while(totalMoney >= bitcoinCurrency) {
            totalMoney -= bitcoinCurrency;
            bitcoinsCount++;

            if(bitcoinsCount === 1) {
                firstDay = dayCount;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoinsCount}`);
    if(bitcoinsCount > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}