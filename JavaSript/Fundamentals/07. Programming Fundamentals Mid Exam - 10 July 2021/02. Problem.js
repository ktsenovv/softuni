function solve(input) {
    let list = input.shift().split(', ');
    let line = input.shift();

    let countBlacklisted = 0;
    let countLosts = 0;

    while (line != 'Report') {
        let [command, idname, newName] = line.split(' ');

        if (command === 'Blacklist') {
            let ID = list.indexOf(idname);
            
            if (ID > -1 && ID < (list.length - 1)) {
                list[ID] = "Blacklisted";
                console.log(`${idname} was blacklisted.`);
                countBlacklisted++;
            } else {
                console.log(`${idname} was not found.`);
            }
        } else if (command === 'Error') {
            idname = Number(idname);

            if (idname > -1 && idname <= (list.length - 1) && list[idname] !== 'Blacklisted' && list[idname] !== 'Lost') {
                console.log(`${list[idname]} was lost due to an error.`);
                list[idname] = "Lost";
                countLosts++;
            }
        } else if (command === 'Change') {
            idname = Number(idname);

            if (idname > -1 && idname <= (list.length - 1)) {
                console.log(`${list[idname]} changed his username to ${newName}.`);
                list[idname] = newName;
            }
        }

        line = input.shift();
    }

    console.log(`Blacklisted names: ${countBlacklisted}`);
    console.log(`Lost names: ${countLosts}`);
    console.log(list.join(' '));
}

solve(["Mike, John, Eddie, William",
"Blacklist Maya",
"Error 1",
"Change 4 George",
"Report"]);