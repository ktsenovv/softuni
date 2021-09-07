function skiTrip(input) {
    let daysTrip = Number(input[0]);
    let roomType = input[1].toLowerCase();
    let rate = input[2].toLowerCase();

    let nights = daysTrip - 1;
    let roomPrice = 0
    let discount = 0;

    switch(roomType) {
        case "room for one person": roomPrice = 18.00; break;
        case "apartment": {
            roomPrice = 25.00;
            if(nights < 10) discount = 0.30;
            else if(nights >= 10 && nights <= 15) discount = 0.35;
            else if(nights > 15) discount = 0.50;
        }
        break;
        case "president apartment": {
            roomPrice = 35.00;
            if(nights < 10) discount = 0.10;
            else if(nights >= 10 && nights <= 15) discount = 0.15;
            else if(nights > 15) discount = 0.20;
        }
        break;
    }

    totalPrice = nights * roomPrice;
    totalPrice -= (totalPrice * discount);

    if(rate == "positive") totalPrice += (totalPrice * 0.25);
    else totalPrice -= (totalPrice * 0.10);

    console.log(totalPrice.toFixed(2));
}