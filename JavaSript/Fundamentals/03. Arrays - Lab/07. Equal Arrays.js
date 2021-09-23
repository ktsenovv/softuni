function equalArrays(array1, array2) {
    let sum = 0;

    for (let i = 0; i < array1.length; i++) {
        if (Number(array1[i]) !== Number(array2[i])) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            equal = false;
            return;
        }

        sum += Number(array1[i]);
    }
    
    console.log(`Arrays are identical. Sum: ${sum}`);
}

equalArrays(['1'], ['10']);