function theImitationGame(input) {
    const actions = {
        'ChangeAll': change,
        'Insert': insert,
        'Move': move
    }

    let result = input.shift();

    while (input[0] != 'Decode') {
        let tokens = input.shift().split('|');
        let command = tokens[0];
        let action = actions[command];
        action(tokens[1], tokens[2]);
    }

    console.log('The decrypted message is: ' + result);

    function change(oldChar, newChar) {
        result = result.split(oldChar).join(newChar);
    }

    function insert(index, char) {
        index = Number(index);
        let left = result.substring(0, index);
        let right = result.substring(index);
        result = left + char + right;
    }

    function move(index) {
        index = Number(index);
        let left = result.substring(0, index);
        let right = result.substring(index);
        result = right + left;
    }
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
  ]);

theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]);