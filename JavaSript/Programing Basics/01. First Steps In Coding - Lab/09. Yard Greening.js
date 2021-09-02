function yardGreening(input) {
    let cmGreening = Number(input[0]);

    let totalPriceYard = cmGreening * 7.61;
    let totalDiscount = totalPriceYard * 0.18;
    let totalPrice = totalPriceYard - totalDiscount;

    console.log(`The final price is: ${totalPrice} lv.`);
    console.log(`The discount is: ${totalDiscount} lv.`);
}