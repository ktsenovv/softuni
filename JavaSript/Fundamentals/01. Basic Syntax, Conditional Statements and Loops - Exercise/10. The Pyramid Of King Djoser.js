function thePyramid(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let pyramidHeight = 0;
    let counter = 0;

    while(base > 0) {
        pyramidHeight += increment;
        counter++;

        let totalBlocks = base * base * increment;
        let innerBlocks = (base - 2) * (base - 2) * increment;
        let outerBlocks = totalBlocks - innerBlocks;

        if(base < 3) {
            gold += totalBlocks;
        } else {
            stone += innerBlocks;
            if(counter % 5 !== 0) {
                marble += outerBlocks;
            } else {
                lapisLazuli += outerBlocks;
            }
        }
        base -= 2;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight)}`);
}