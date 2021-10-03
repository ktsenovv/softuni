function minerTask(input) {
    let list = {};
    let resource = '';

    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            resource = input[i];
            if (!list.hasOwnProperty(resource)) {
                list[resource] = 0;
            }
        } else {
            list[resource] += Number(input[i]);
        }
    }

    for (let [key, value] of Object.entries(list)) {
        console.log(`${key} -> ${value}`);
    }
}

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    );