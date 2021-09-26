function palindromeIntegers(numbers) {
    for (let number of numbers) {
        let numberAsString = number.toString();
        let reversedNumber = numberAsString.split('').reverse().join('');

        if (numberAsString === reversedNumber) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

palindromeIntegers([32,2,232,1010]);