function distinctArray(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        let currentNum = input[i];

        if (!result.includes(currentNum)) {
            result.push(currentNum);
        }
    }

    console.log(result.join(' '));
}

distinctArray([20, 8, 12, 13, 4,
    4, 8, 5]);