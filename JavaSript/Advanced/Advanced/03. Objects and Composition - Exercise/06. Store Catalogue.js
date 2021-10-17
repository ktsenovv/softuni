function storeCatalogue(input) {
    const catalogue = {};
    let productLastLetter = '';

    for (let line of input) {
        let [productName, productPrice] = line.split(' : ');
        catalogue[productName] = Number(productPrice);
    }

    sorted = Object.entries(catalogue).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [product, price] of sorted) {
        if (product[0] != productLastLetter) {
            console.log(product[0]);
        }

        productLastLetter = product[0];
        console.log(` ${product}: ${price}`);
    }
}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);

console.log();

storeCatalogue(['Banana : 2',
'Rubic\'s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']);