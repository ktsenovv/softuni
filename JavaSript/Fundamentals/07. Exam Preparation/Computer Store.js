function compStore(input) {
    let sum = 0;
    let total = 0;
    let taxes = 0;
    let customer = input.pop();
 
    for (let el of input) {
        el = Number(el);
        if (el <= 0) {
            console.log('Invalid price!');
        } else {
            sum += el;
        }
    }
 
    if (sum <= 0) {
        console.log('Invalid order!');
    } else {
        taxes = sum * 0.20;
        if (customer === 'special') {
            total = (sum + taxes) * 0.90;
        } else {
            total = sum + taxes;
        }
        console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${sum.toFixed(2)}$\nTaxes: ${taxes.toFixed(2)}$\n-----------\nTotal price: ${total.toFixed(2)}$`);
    }
}

compStore([
    '1050', 
    '200', 
    '450',
    '2', 
    '18.50', 
    '16.86', 
    'special'
    ]
    );