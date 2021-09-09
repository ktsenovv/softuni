function cinema(input) {
    let projection = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);
    
    let count = rows * cols;
    let price = 0;
    
    switch(projection)
    {
        case 'Premiere':
            price = count * 12;
            break;
        case 'Normal':
            price = count * 7.50;
            break;
        case 'Discount':
            price = count * 5;
            break;
    }
    
    console.log(`${price.toFixed(2)} leva`);
}