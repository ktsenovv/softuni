function bombNumbers(numbers, bomb) {
    let [specialNum, SpecialNumPower] = bomb;

    for (let i = 0; i < numbers.length; i++) {
        let currentNum = numbers[i];

        if (currentNum === specialNum) {
            let start = Math.max(0, i - SpecialNumPower);
            let end = (SpecialNumPower * 2) + 1;

            numbers.splice(start, end);
            i = (i - SpecialNumPower) - 1;
        }
    }

    console.log(numbers.reduce((a, b) => a + b, 0));
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);