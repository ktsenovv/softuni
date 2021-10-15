function everyNElement(arr, num) {
    return arr.filter((v, i) => i % num == 0);
}

console.log(everyNElement(['5',
    '20',
    '31',
    '4',
    '20'],
    2));

console.log();

console.log(everyNElement(['dsa',
    'asd',
    'test',
    'tset'],
    2));

console.log();

console.log(everyNElement(['1',
    '2',
    '3',
    '4',
    '5'],
    6));