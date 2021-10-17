function calorieObject(input) {
    const result = {}
    let productName  = '';

    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            result[input[i]] = null;
            productName = input[i];
        } else {
            result[productName] = Number(input[i]);
        }
    }

    console.log(result);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);

console.log();

calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);