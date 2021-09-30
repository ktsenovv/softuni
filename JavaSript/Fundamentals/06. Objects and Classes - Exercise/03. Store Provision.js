function storeProvision(currentStock, deliveryStock) {
    let store = [];

    for (let i = 0; i < currentStock.length; i += 2) {
        let product = currentStock[i];
        let quantity = Number(currentStock[i + 1]);

        let productObj = {
            product,
            quantity
        }

        store.push(productObj);
    }

    for (let i = 0; i < deliveryStock.length - 1; i += 2) {
        let product = deliveryStock[i];
        let quantity = Number(deliveryStock[i + 1]);

        let productObj = {
            product,
            quantity
        }

        let IDOfProduct = store.findIndex(x => x.product === product);

        if(IDOfProduct === -1) {
            store.push(productObj);
        } else {
            store[IDOfProduct].quantity += quantity;
        }
    }

    for (let product of store) {
        console.log(`${product.product} -> ${product.quantity}`);
    }
}

storeProvision([
'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
[
'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
]);