function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let group = Number(input[2]);
    let rent = 0;
    let discount = 0;
    
    switch(season)
    {
        case 'Spring': rent = 3000; break;
        case 'Summer':
        case 'Autumn':
            rent = 4200; break;
        case 'Winter': rent = 2600; break;
    }
    
    if(group <= 6) discount = rent * 0.10;
    else if(group >= 7 && group <= 11) discount = rent * 0.15;
    else if(group >= 12) discount = rent * 0.25;
    
    if((group % 2 == 0) && (season != 'Autumn')) discount += (rent - discount) * 0.05;
    
    total_price = rent - discount;
    
    if(budget >= total_price) console.log(`Yes! You have ${(budget - total_price).toFixed(2)} leva left.`);
    else console.log(`Not enough money! You need ${Math.abs(budget - total_price).toFixed(2)} leva.`);
}