function spiceMustFlow(yield) {
    let daysCounter = 0;
    let sourcedYield = 0;

    while(yield >= 100) {
        sourcedYield += (yield - 26);
        yield -= 10;
        daysCounter++;
    }

    sourcedYield -= 26;

    if(sourcedYield < 0) {
        sourcedYield = 0;
    }

    console.log(daysCounter);
    console.log(sourcedYield);
}

spiceMustFlow(111);