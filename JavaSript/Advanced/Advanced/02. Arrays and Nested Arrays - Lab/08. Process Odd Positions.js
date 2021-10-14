function processOddPositions(input) {
    const result = input.filter((v, i) => i % 2 != 0)
        .reverse()
        .map(x => x * 2)
        .join(' ');

    console.log(result);
}

processOddPositions([10, 15, 20, 25]);
console.log();
processOddPositions([3, 0, 10, 4, 7, 3]);