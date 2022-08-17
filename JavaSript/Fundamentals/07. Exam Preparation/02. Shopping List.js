function shoppingList(input) {
    list = input.shift().split('!');

    for (let tokens of input) {
        let action = tokens.split(' ');
        let command = action[0];
        let item = action[1];

        if (command === 'Go') {
            break;
        } else if (command === 'Urgent') {
            if (!list.includes(item)) {
                list.unshift(item);
            } 
        } else if (command === 'Unnecessary') {
            let ID = list.indexOf(item);
            
            if (ID > -1) {
                list.splice(ID, 1);
            }
        } else if (command === 'Correct') {
            let ID = list.indexOf(item);
            let itemTwo = action[2];
            
            if (ID > -1) {
                list.splice(ID, 1, itemTwo);
            }
        } else if (command === 'Rearrange') {
            let ID = list.indexOf(item);
            
            if (ID > -1) {
                itemx = list.splice(ID, 1);
                list.push(itemx);
            }
        }
    }

    console.log(list.join(', '));
}

shoppingList(['Tomatoes!Potatoes!Bread', 'Unnecessary Milk', 'Urgent Tomatoes', 'Go Shopping!']);
shoppingList(['Milk!Pepper!Salt!Water!Banana', 'Urgent Salt', 'Unnecessary Grapes', 'Correct Pepper Onion', 'Rearrange Grapes', 'Correct Tomatoes Potatoes', 'Go Shopping!']);