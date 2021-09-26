function oddEvenSum(num) {
    let numStr = num.toString();
    let sumOdd = 0;
    let sumEven = 0;

    for (let digit of numStr) {
        if (Number(digit) % 2 === 0) {
            sumEven += Number(digit);
        } else {
            sumOdd += Number(digit);
        }
    }

    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;
}

let result = oddEvenSum(3495892137259234);
console.log(result);