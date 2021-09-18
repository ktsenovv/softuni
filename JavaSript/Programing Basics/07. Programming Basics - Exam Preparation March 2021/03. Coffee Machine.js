function coffeeMachine(input) {
    let drink = input[0];
    let sugar = input[1];
    let quantity = input[2];
    let without = 0;
    let normal = 0;
    let extra = 0;
    let price = 0;

    if(drink == 'Espresso') {
        without = 0.90;
        normal = 1;
        extra = 1.20;
    } else if(drink == 'Cappuccino') {
        without = 1;
        normal = 1.20;
        extra = 1.60;
    } else if(drink == 'Tea') {
        without = 0.50;
        normal = 0.60;
        extra = 0.70;
    }

    switch(sugar) {
        case "Without": price = (without * quantity) - ((without * quantity) * 0.35); break;
        case "Normal": price = normal * quantity; break;
        case "Extra": price = extra * quantity; break;
    }

    if(drink == 'Espresso' && quantity >= 5) price -= price * 0.25;
    if(price > 15) price -= price * 0.20;

    console.log(`You bought ${quantity} cups of ${drink} for ${price.toFixed(2)} lv.`);
}