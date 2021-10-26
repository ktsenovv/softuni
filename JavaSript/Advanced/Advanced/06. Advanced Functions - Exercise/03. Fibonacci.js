function fibonacci() {
    let numOne = 0, numTwo = 1, nextNum;

    return () => {
        nextNum = numOne + numTwo;
        numOne = numTwo;
        numTwo = nextNum;

        return numOne;
    }
}

let fib = fibonacci();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13