function houseParty(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        let currentGuest = input[i];
        let name = input[i].split(' ', 1).join('');

        if (currentGuest.includes('is going!')) {
            if (!result.includes(name)) {
                result.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (result.includes(name)) {
                result = result.filter(el => el !== name);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(result.join('\n'));
}

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);