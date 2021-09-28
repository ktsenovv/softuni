function train(input) {
    let trainX = input.shift().split(' ').map(Number);
    let maxCapacity = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        let [first, second] = input[i].split(' ');

        if (first === 'Add') {
            second = Number(second);
            trainX.push(second);
        } else {
            first = Number(first);
            
            for (let j = 0; j < trainX.length; j++) {
                let currentCapacity = trainX[j] + first;

                if (currentCapacity <= maxCapacity) {
                    trainX[j] += first;
                    break;
                }
            }
        }
    }
    
    console.log(trainX.join(' '));
}

train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']);