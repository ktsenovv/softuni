function mathPower(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    console.log(result);
}

mathPower(2, 8);