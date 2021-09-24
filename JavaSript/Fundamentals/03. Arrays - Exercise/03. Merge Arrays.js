function mergeArrays(input1, input2) {
    let merged = [];
    for (let i = 0; i < input1.length; i++) {
        if (i % 2 === 0) {
            merged[i] = Number(input1[i]) + Number(input2[i]);
        } else {
            merged[i] = `${input1[i]}${input2[i]}`;
        }
    }

    console.log(merged.join(' - '));
}

mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);