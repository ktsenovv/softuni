function autoEngineeringCompany(input) {
    const brands = new Map();

    for (let line of input) {
        let [brand, model, quantity] = line.split(' | ');
        quantity = Number(quantity);

        if (!brands.has(brand)) {
            brands.set(brand, new Map());
        }

        const models = brands.get(brand);
        if (!models.has(model)) {
            models.set(model, quantity);
        } else {
            models.set(model, quantity + models.get(model));
        }
    }

    for (let [brand, value] of brands) {
        console.log(brand);
        for (let [model, quantity] of value) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}

autoEngineeringCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);