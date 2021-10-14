function equalNeighbors(input) {
    let neighbors = 0;

    for (let i = 0; i < input.length - 1; i++) {
        for (let j = 1; j < input[i].length; j++) {
            if (input[i][j] == input[i + 1][j]) {
                neighbors++;
            }

            if (input[i][j] == input[i][j - 1]) {
                neighbors++;
            }
        }
    }

    for (let i = 0; i < input[input.length - 1].length; i++) {
        if (input[input.length - 1][i] == input[input.length - 1][i + 1]) {
            neighbors++;
        }
    }

    for (let i = 0; i < input.length - 1; i++) {
        if (input[i][0] == input[i + 1][0]) {
            neighbors++;
        }
    }

    console.log(neighbors)
}

equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]);

console.log();

equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]);