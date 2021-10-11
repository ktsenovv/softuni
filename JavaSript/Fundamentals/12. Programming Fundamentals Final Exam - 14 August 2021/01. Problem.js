// Text processing

function solve(input) {
    const actions = {
        'Case': casex,
        'Reverse': reversex,
        'Cut': cut,
        'Replace': replacex,
        'Check': check
    };

    let username = input.shift();

    while (input[0] != 'Sign up') {
        tokens = input.shift().split(' ');
        let action = actions[tokens[0]];
        action(tokens[1], tokens[2]);
    }

    function casex(type) {
        if (type == 'lower') {
            username = username.toLowerCase();
        } else if (type == 'upper') {
            username = username.toUpperCase();
        }

        console.log(username);
    }

    function reversex(start, end) {
        start = Number(start);
        end = Number(end);

        if (start >= 0 && end < username.length) {
            let first = username.substring(start, end + 1).split('').reverse().join('');

            console.log(first);
        }
    }

    function cut(str) {
        if (username.includes(str)) {
            username = username.split(str).join('');
            
            console.log(username);
        } else {
            console.log(`The word ${username} doesn't contain ${str}.`);
        }
    }

    function replacex(char) {
        username = username.split(char).join('*');

        console.log(username);
    }

    function check(char) {
        if (username.includes(char)) {
            console.log('Valid');
        } else {
            console.log(`Your username must contain ${char}.`);
        }
    }
}

solve(["Peter",
"Case lower",
"Cut ES",
"Check @",
"Sign up"]);

console.log();

solve(["ThisIsMyString",
"Reverse 1 4",
"Replace i",
"Cut My",
"Sign up"]);