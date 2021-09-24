function maxSequence(input) {
    let longestSequence = [];
    let leftMostIndex = 0;

    for (let i = 0; i < input.length; i++) {
        let curNum = input[i];
        let currentSequence = [curNum];

        for (let j = i + 1; j < input.length; j++) {
            let nextNum = input[j];

            if (curNum === nextNum) {
                currentSequence.push(nextNum);
            } else {
                break;
            }
        }

        if (currentSequence.length > longestSequence.length) {
            longestSequence = [];

            for (let j = 0; j < currentSequence.length; j++) {
                longestSequence.push(currentSequence[j]);
            }
        } else if (currentSequence.length == longestSequence.length && i < leftMostIndex) {
            leftMostIndex = i;
        }
    }

    console.log(longestSequence.join(' '));
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);