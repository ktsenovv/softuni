function factorialDivision(numOne, numTwo) {
    function factorial(num) {
        let factorial = 1;

        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }

        return factorial;
    }

    console.log((factorial(numOne) / factorial(numTwo)).toFixed(2));
}

factorialDivision(6, 2);