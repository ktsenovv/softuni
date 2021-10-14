function lastKNumbersSequence(n, k) {
    let result = [];

    while (result.length != n) {
        if (result.length > 0) {
            let temp = 0;
            for (let i = result.length - k; i <= result.length - 1; i++) {
                if (i >= 0) {
                    temp += result[i];
                }
            }
            result.push(temp);
        } else {
            result.push(1);
        }
    }

    return result;
}

console.log(lastKNumbersSequence(6, 3));
console.log(lastKNumbersSequence(8, 2));