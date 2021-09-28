function gladiatorInventory(input) {
    let inventory = input.shift().split(' ');

    for (let command of input) {
        command = command.split(' ');
        let action = command[0];
        let item = command[1];

        if(action === 'Buy') {
            if (!inventory.includes(item)) {
                inventory.push(item);
            }
        } else if (action === 'Trash') {
            if (inventory.includes(item)) {
                inventory.splice(inventory.indexOf(item), 1);
            }
        } else if (action === 'Repair') {
            if (inventory.includes(item)) {
                temp = inventory.splice(inventory.indexOf(item), 1);
                inventory.push(temp.join(''));
            }
        } else if (action === 'Upgrade') {
            item = item.split('-');
            let itemName = item[0];
            let itemUpgrade = item[1];
            if (inventory.includes(itemName)) {
                inventory.splice(inventory.indexOf(itemName) + 1, 0, `${itemName}:${itemUpgrade}`);
            }
        }
    }

    console.log(inventory.join(' '));
}

gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']);