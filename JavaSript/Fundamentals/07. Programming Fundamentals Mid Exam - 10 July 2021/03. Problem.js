function solve(input) {
    let list = input.shift().split(', ');
    let line = input.shift();

    while (line != 'End') {
        let [command, phone] = line.split(' - ');

        if (command === 'Add') {
            if (!list.includes(phone)) {
                list.push(phone);
            }
        } else if (command === 'Remove') {
            let ID = list.indexOf(phone);
            
            if (ID > -1) {
                list.splice(ID, 1);
            }
        } else if (command === 'Bonus phone') {
            let [oldPhone, newPhone] = phone.split(':');

            let ID = list.indexOf(oldPhone);
            
            if (ID > -1) {
                list.splice(ID+1, 0, newPhone);
            }
        } else if (command === 'Last') {
            let ID = list.indexOf(phone);
            
            if (ID > -1) {
                itemx = list.splice(ID, 1);
                list.push(itemx);
            }
        }

        line = input.shift();
    }

    console.log(list.join(', '));
}

solve(["HuaweiP20, XiaomiNote",
"Remove - Samsung",
"Bonus phone - XiaomiNote:Iphone5",
"Last - HuaweiP10",
"End"]);