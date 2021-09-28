function sorting(input) {
    let result = [];
    let inputLength = input.length;

    for (let i = 0; i < inputLength; i++) {
        let num;

        if (i % 2 === 0) {
            num = Math.max(...input);
        } else {
            num = Math.min(...input);
        }

        result.push(num);
        input.splice(input.indexOf(num), 1);
    }

    console.log(result.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);