function addRemoveElements(commands) {
    let result = [];
    let counter = 1;

    for (let command of commands) {
        if (command === 'add') {
            result.push(counter++)
        } else if (command === 'remove') {
            result.pop(counter++)
        }
    }
 
    if (result.length === 0) {
        console.log('Empty')
    } else {
        console.log(result.join('\n'));
    }
}

addRemoveElements(['add',
    'add',
    'add',
    'add']
);

console.log();

addRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
);

console.log();

addRemoveElements(['remove',
    'remove',
    'remove']
);