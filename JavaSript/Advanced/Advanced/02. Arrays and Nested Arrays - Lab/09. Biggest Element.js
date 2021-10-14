function biggestElement(input) {
    const maxRow = input.map(x => Math.max.apply(Math, x));
    const result = Math.max.apply(Math, maxRow);
    console.log(result);
}

biggestElement([[20, 50, 10],
    [8, 33, 145]]);

console.log();

biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]);