function equalSums(input) {
    let result = 'no';

    for (let i = 0; i < input.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = 0; j < i; j++) {
            leftSum += input[j];
        }

        for (let k = input.length - 1; k > i; k--) {
            rightSum += input[k];
        }

        if (leftSum === rightSum) {
            result = i;
            break;
        }
    }

    console.log(result);
}

equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);