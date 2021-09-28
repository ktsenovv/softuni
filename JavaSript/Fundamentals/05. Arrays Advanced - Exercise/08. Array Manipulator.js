function arrayManipulator(numbers, commands) {
    for (let command of commands) {
        let tokens = command.split(' ');

        if (tokens[0] === 'add') {
            let id = Number(tokens[1]);
            let el = Number(tokens[2]);

            numbers.splice(id, 0, el);
        } else if (tokens[0] === 'addMany') {
            let id = Number(tokens[1]);
            tokens.splice(0, 2);
            let numsToAdd = tokens.map(Number);
            numbers.splice(id, 0, ...numsToAdd);
        } else if (tokens[0] === 'contains') {
            let result = numbers.indexOf(Number(tokens[1]));
            console.log(result);
        } else if (tokens[0] === 'remove') {
            let id = Number(tokens[1]);
            numbers.splice(id, 1);
        } else if (tokens[0] === 'shift') {
            let positions = tokens[1];
            for (let i = 0; i < positions; i++) {
                numbers.push(numbers.shift());
            }
        } else if (tokens[0] === 'sumPairs') {
            let result = [];

            if (numbers.length % 2 !== 0) {
                numbers.push(0);
            }

            for (let i = 0; i < numbers.length - 1; i += 2) {
                let sum = numbers[i] + numbers[i + 1];
                result.push(sum);
            }
            numbers = result;
        } else if (tokens[0] === 'print') {
            console.log(`[ ${numbers.join(', ')} ]`);
            return;
        }
    }
}

arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3',
    'shift 1', 'print']);