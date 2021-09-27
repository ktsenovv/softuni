function processOddNumbers(input) {
    let result = input.filter((input, x) => x % 2 == 1).map(x => 2 * x).reverse();
    console.log(result.join(' '));
}

processOddNumbers([3, 0, 10, 4, 7, 3]);