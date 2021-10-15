function spiralMatrix(rows, cols) {
    let [count, maxCount, minRow, minCol, maxRow, maxCol] = [0, rows * cols, 0, 0, rows - 1, cols - 1];
    const matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix.push([]);
    }

    while (count < maxCount) {
        for (let col = minCol; col <= maxCol && count < maxCount; col++) {
            matrix[minRow][col] = ++count;
        }
        minRow++;

        for (let row = minRow; row <= maxRow && count < maxCount; row++) {
            matrix[row][maxCol] = ++count;
        }
        maxCol--;

        for (let col = maxCol; col >= minCol && count < maxCount; col--) {
            matrix[maxRow][col] = ++count;
        }
        maxRow--;

        for (let row = maxRow; row >= minRow && count < maxCount; row--) {
            matrix[row][minCol] = ++count;
        }
        minCol++;
    }
    
    matrix.map(x => console.log(x.join(' ')));
}

spiralMatrix(5, 5);

console.log();

spiralMatrix(3, 3);