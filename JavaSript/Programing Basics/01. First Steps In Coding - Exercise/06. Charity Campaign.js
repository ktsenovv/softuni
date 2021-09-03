function charityCampaign(input) {
    let daysNum = Number(input[0]);
    let confectionersNum = Number(input[1]);
    let cakesNum = Number(input[2]);
    let wafflesNum = Number(input[3]);
    let pancakesNum = Number(input[4]);

    let cakesTotal = cakesNum * 45;
    let wafflesTotal = wafflesNum * 5.80;
    let pancakesTotal = pancakesNum * 3.20;

    let totalPricePerDay = (cakesTotal + wafflesTotal + pancakesTotal) * confectionersNum;
    let totalPriceCampaign = totalPricePerDay * daysNum;
    let totalPrice = totalPriceCampaign - (totalPriceCampaign / 8);

    console.log(totalPrice);
}