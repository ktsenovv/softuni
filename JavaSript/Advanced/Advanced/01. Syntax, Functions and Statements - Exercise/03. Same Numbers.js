function sameNumbers(input) {
    function checkNumbers(num) {
        let temp = num % 10;
        while (num) {
            if (num % 10 !== temp) return 'false';
            num = Math.floor(num / 10);
        }
        return 'true';
    }

    console.log(checkNumbers(input));
    console.log(input
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0));
}

sameNumbers(2222222);
sameNumbers(1234);