function commonElements(input1, input2) {
    for (let i = 0; i < input1.length; i++) {
        for (let j = 0; j < input2.length; j++) {
            if (input1[i] === input2[j]) {
                console.log(input1[i]);
            }
        }
    }
}

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);