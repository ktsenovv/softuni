function juiceFlavors(input) {
    const bottles = new Map();
    const juice = new Map();

    for (let line of input) {
        let [flavor, quantity] = line.split(' => ');
        quantity = Number(quantity);

        if (!juice.has(flavor)) {
            juice.set(flavor, quantity);
        } else {
            juice.set(flavor, juice.get(flavor) + quantity);
        }

        // Check if we have enough juice to produce bottle/s
        bottlesCheck(flavor);
    }

    for (let [flavor, quantity] of bottles) {
        console.log(`${flavor} => ${quantity}`);
    }

    function bottlesCheck(flavor) {
        let cuurentQuantity = juice.get(flavor);
        if (cuurentQuantity >= 1000) {
            let juiceLeft = cuurentQuantity % 1000;
            let bottlesProduced = (cuurentQuantity - juiceLeft) / 1000;
            juice.set(flavor, juiceLeft);

            if (!bottles.has(flavor)) {
                bottles.set(flavor, bottlesProduced)
            } else {
                bottles.set(flavor, bottles.get(flavor) + bottlesProduced);
            }
        }
    }
}

juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);

console.log();

juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);