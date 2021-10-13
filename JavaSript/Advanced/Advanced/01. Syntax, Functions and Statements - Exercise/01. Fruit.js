function fruit(fruit, weight, ppkg) {
    weight = weight / 1000;
    let money = ppkg * weight;

    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);