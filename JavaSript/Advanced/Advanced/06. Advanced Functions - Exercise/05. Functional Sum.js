function add(num) {
    let sum = num;

    function calculate(numTwo) {
        if (numTwo) {
            sum += numTwo;
            return calculate;
        } else {
            return sum;
        }
    }

    calculate.toString = () => sum;
    return calculate;
}

console.log(add(5)(8)());