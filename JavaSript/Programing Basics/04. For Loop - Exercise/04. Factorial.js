function factorial(input) {
    let n = Number(input[0]);
    let fact = 1;

    for(let i=1; i <= n; i++) {
        fact *= i;
    }

    console.log(fact);
}