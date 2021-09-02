function petShop(input) {
    dogsNum = Number(input[0]);
    petsNum = Number(input[1]);

    totalSum = (dogsNum * 2.50) + (petsNum * 4);
    console.log(`${totalSum} lv.`);
}