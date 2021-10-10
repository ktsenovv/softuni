function secretChat(input) {
    let message = input.shift();

    const actions = {
        'InsertSpace': inserts,
        'Reverse': reverse,
        'ChangeAll': change
    };

    while (input[0] != 'Reveal') {
        let tokens = input.shift().split(':|:');
        let action = actions[tokens[0]];
        action(tokens[1], tokens[2]);
    }

    console.log(`You have a new text message: ${message}`);

    function inserts(index) {
        index = Number(index);

        let left = message.substring(0, index);
        let right = message.substring(index);

        message = left + ' ' + right;

        console.log(message);
    }

    function reverse(str) {
        if (message.includes(str)) {
            let index = message.indexOf(str);
            let second = message.substring(index, index + str.length).split('').reverse().join('');
            let first = message.substring(0, index);
            let third = message.substring(index + str.length);
            
            message = first + third + second;

            console.log(message);
        } else {
            console.log('error');
        }
    }

    function change(char, charNew) {
        message = message.split(char).join(charNew);
        console.log(message);
    }
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]);

console.log();

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]);
