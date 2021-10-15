function diagonalAttack(input) {
    leftDiag = 0;
    rightDiag = 0;

    for(let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' ');
        leftDiag += Number(tokens[i]);
        rightDiag += Number(tokens[input.length - i - 1]);
    }

    if (leftDiag == rightDiag) {
        for(let i = 0; i < input.length; i++) {
            let tokens = input[i].split(' ');
            
            for (let j = 0; j < tokens.length; j++) {
                if (i !== j && j !== (tokens.length - i - 1)) {
                    tokens[j] = leftDiag;
                }
            }

            console.log(tokens.join(' '));
        }
    } else {
        console.log(input.map(x => x.split(' ').join(' ')).join('\n'));
    }
}

diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']);

console.log();

diagonalAttack(['1 1 1',
'1 1 1',
'1 1 0']);