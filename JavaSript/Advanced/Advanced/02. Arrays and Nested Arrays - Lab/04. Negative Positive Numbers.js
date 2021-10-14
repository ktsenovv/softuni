function negativePositiveNumbers(input) {
    const result = [];
    
    for (let number of input) {
        if (number < 0) {
            result.unshift(number);
        } else {
            result.push(number);
        }
    }

    console.log(result.join('\n'));
}

negativePositiveNumbers([7, -2, 8, 9]);
console.log();
negativePositiveNumbers([3, -2, 0, -1]);