function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);

    let coffee = 0;
    let water = 0;
    let beer = 0;
    let sweets = 0;
    let peanuts = 0;
    let price = 0;

    if(city == "Sofia") {
        coffee = 0.50;
        water = 0.80;
        beer = 1.20;
        sweets = 1.45;
        peanuts = 1.60;
    } else if(city == "Plovdiv") {
        coffee = 0.40;
        water = 0.70;
        beer = 1.15;
        sweets = 1.30;
        peanuts = 1.50;
    } else if(city == "Varna") {
        coffee = 0.45;
        water = 0.70;
        beer = 1.10;
        sweets = 1.35;
        peanuts = 1.55;
    }

    switch(product) {
        case "coffee": price = coffee * quantity; break;
        case "water": price = water * quantity; break;
        case "beer": price = beer * quantity; break;
        case "sweets": price = sweets * quantity; break;
        case "peanuts": price = peanuts * quantity; break;
    }

    console.log(price);
}