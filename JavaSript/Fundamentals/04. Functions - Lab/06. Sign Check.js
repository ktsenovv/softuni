function signCheck(numOne, numTwo, numThree) {
    let result = '';

    if (numOne >= 0 && numTwo >= 0 && numThree >= 0) { // All-positive
        result = 'Positive';
    } else if (numOne < 0 && numTwo < 0 && numThree < 0) { // All-negative
        result = 'Negative';
    } else if (numOne >= 0 && numTwo < 0 && numThree < 0) { // 1-positive, 2,3 - negative
        result = 'Positive';
    } else if (numOne < 0 && numTwo >= 0 && numThree < 0) { // 2-positive, 1,3 - negative
        result = 'Positive';
    } else if (numOne < 0 && numTwo < 0 && numThree >= 0) { // 3-positive, 1,2 - negative
        result = 'Positive';
    } else if (numOne >= 0 && numTwo >= 0 && numThree < 0) { // 1,2-positive, 3 - negative
        result = 'Negative';
    } else if (numOne >= 0 && numTwo < 0 && numThree >= 0) { // 1,3-positive, 2 - negative
        result = 'Negative';
    } else if (numOne < 0 && numTwo >= 0 && numThree >= 0) { // 2,3-positive, 1 - negative
        result = 'Negative';
    }

    console.log(result);
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);