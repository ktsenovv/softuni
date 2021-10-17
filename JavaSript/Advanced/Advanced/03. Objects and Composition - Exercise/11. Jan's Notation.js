function jansNotation(input) {
    let data = [];

    for (let oper of input) {
        if (typeof(oper) === 'number') {
            data.push(oper);
        } else if (typeof(oper) == 'string') {
            let b = data.pop();
            let a = data.pop();

            if (typeof(a) == 'undefined') {
                data = [];
                console.log('Error: not enough operands!');
                break;
            }

            const switchX = {
                '+': function (a, b) {
                    data.push(a + b);
                },
                '-': function (a, b) {
                    data.push(a - b);
                },
                '*': function (a, b) {
                    data.push(a * b);
                },
                '/': function (a, b) {
                    data.push(a / b);
                }
            };

            switchX[oper](a, b);
        }
    }

    if (data.length > 1) {
        console.log(`Error: too many operands!`);
    } else if (data.length == 1) {
        console.log(data[0]);
    }
}

jansNotation([3, 4, '+']);

console.log();

jansNotation([5, 3, 4, '*', '-']);

console.log();

jansNotation([7, 33, 8, '-']);

console.log();

jansNotation([15, '/']);