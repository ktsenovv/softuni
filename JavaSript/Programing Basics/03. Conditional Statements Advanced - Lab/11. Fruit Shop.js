function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let price = 0;

    switch(day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday": {
            switch(fruit) {
                case "banana": console.log((2.50 * quantity).toFixed(2)); break;
                case "apple": console.log((1.20 * quantity).toFixed(2)); break;
                case "orange": console.log((0.85 * quantity).toFixed(2)); break;
                case "grapefruit": console.log((1.45 * quantity).toFixed(2)); break;
                case "kiwi": console.log((2.70 * quantity).toFixed(2)); break;
                case "pineapple": console.log((5.50 * quantity).toFixed(2)); break;
                case "grapes": console.log((3.85 * quantity).toFixed(2)); break;
                default: console.log("error"); break;
            }
        }
        break;
        case "Saturday":
        case "Sunday": {
            switch(fruit) {
                case "banana": console.log((2.70 * quantity).toFixed(2)); break;
                case "apple": console.log((1.25 * quantity).toFixed(2)); break;
                case "orange": console.log((0.90 * quantity).toFixed(2)); break;
                case "grapefruit": console.log((1.60 * quantity).toFixed(2)); break;
                case "kiwi": console.log((3.00 * quantity).toFixed(2)); break;
                case "pineapple": console.log((5.60 * quantity).toFixed(2)); break;
                case "grapes": console.log((4.20 * quantity).toFixed(2)); break;
                default: console.log("error"); break;
            }
        }
        break;
        default:
            console.log("error");
            break;
    }
}