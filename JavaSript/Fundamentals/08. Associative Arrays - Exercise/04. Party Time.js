function partyTime(input) {
    let indexOfParty = input.indexOf('PARTY');
    let digitList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let vip = [];
    let regular = [];

    for (let i = 0; i < indexOfParty; i++) {
        let currentGuest = input[i];

        if (digitList.includes(currentGuest[0])) {
            vip.push(currentGuest);
        } else {
            regular.push(currentGuest);
        }
    }

    for (let i = indexOfParty + 1; i < input.length; i++) {
        let currentGuest = input[i];

        if (vip.includes(currentGuest)) {
            vip.splice(vip.indexOf(currentGuest), 1);
        } else if (regular.includes(currentGuest)) {
            regular.splice(regular.indexOf(currentGuest), 1)
        }
    }

    let totalGuestsLeft = vip.length + regular.length;

    console.log(totalGuestsLeft);

    for (let guest of vip) {
        console.log(guest);
    }

    for (let guest of regular) {
        console.log(guest);
    }
}

partyTime([
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);