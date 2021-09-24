function addSubstract(input) {
    let sumOriginals = 0;
    let sumModified = 0;

    for (let i = 0; i < input.length; i++) {
        sumOriginals += input[i];
        if(input[i] % 2 === 0) {
            input[i] += i;
        } else {
            input[i] -= i;
        }
        sumModified += input[i];
    }

    console.log(input);
    console.log(sumOriginals);
    console.log(sumModified);
}

addSubstract([-5, 11, 3, 0, 2]);