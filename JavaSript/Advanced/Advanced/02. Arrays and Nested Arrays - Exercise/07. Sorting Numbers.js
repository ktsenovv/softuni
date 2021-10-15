function sortingNumbers(input) {
    let result = [];
    let sorted = input.sort((a, b) => a - b);

    while (sorted.length != 0) {
        let minNumber = sorted.shift();
        let maxNumber = sorted.pop();

        result.push(minNumber, maxNumber);
    }
    
    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));