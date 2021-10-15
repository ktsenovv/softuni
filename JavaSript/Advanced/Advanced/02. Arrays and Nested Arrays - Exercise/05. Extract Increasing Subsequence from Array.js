function increasingSubsequence(input) {
    const data = [];
    let tempNumber = 0;

    for (let i = 0; i < input.length; i++) {
        let currentNumber = input[i];
        if (currentNumber >= tempNumber) {
            data.push(currentNumber);
            tempNumber = currentNumber;
        }
    }
    
    return data;
}

console.log(increasingSubsequence([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]));

console.log();

console.log(increasingSubsequence([1, 
    2, 
    3,
    4]));

console.log();

console.log(increasingSubsequence([20, 
    3, 
    2, 
    15,
    6, 
    1]));