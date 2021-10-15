function magicMatrices(matrix) {
    let sumRow = matrix.map((column => column.reduce((prevValue, currValue) => prevValue + currValue)));
    let sumColumn = matrix.reduce((prevValue, currValue) => prevValue.map((value, index) => currValue[index] + value));
    let equal = array => array.every(value => value === array[0]);

    return equal(sumRow) && sumRow.toString() === sumColumn.toString();
}

console.log(magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]));

console.log();

console.log(magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]));

console.log();

console.log(magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]));