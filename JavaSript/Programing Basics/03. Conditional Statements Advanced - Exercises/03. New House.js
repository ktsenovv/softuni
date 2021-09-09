function newHouse(input) {
    let type = input[0];
    let numflowers = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;

    switch(type)
    {
        case 'Roses':
        {
            price = 5 * numflowers;
        
            if(numflowers > 80) price = price - (price * 0.10);
        };
        break;
        case 'Dahlias':
        {
            price = 3.80 * numflowers;
        
            if(numflowers > 90) price = price - (price * 0.15);
        };
        break;
        case 'Tulips':
        {
            price = 2.80 * numflowers;
        
            if(numflowers > 80) price = price - (price * 0.15);
        };
        break;
        case 'Narcissus':
        {
            price = 3 * numflowers;
        
            if(numflowers < 120) price = price + (price * 0.15);
        };
        break;
        case 'Gladiolus':
        {
            price = 2.50 * numflowers;
        
            if(numflowers < 80) price = price + (price * 0.20);
        };
        break;
    }
    
    if(budget >= price) {
        console.log(`Hey, you have a great garden with ${numflowers} ${type} and ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${Math.abs(budget - price).toFixed(2)} leva more.`);
    }
}