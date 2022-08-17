function tresureHunt(input) {
    let tresure = input.shift().split('|');
    let total = 0;
    let isIDValid = (id, arr) => id >= 0 && id < arr.length;

    for (let line of input)
    {
        let [command, ...elements] = line.split(' ');

        if (command === 'Yohoho!') {
            break;
        }

        if (command === 'Loot') {
            for (let item of elements) {
                if (!tresure.includes(item)) {
                    tresure.unshift(item);
                }
            }
        } else if (command === 'Drop') {
            let id = Number(elements[0]);

            if (isIDValid(id, tresure)) {
                let dropped = tresure.splice(id, 1);
                tresure.push(...dropped);
            }
        } else if (command === 'Steal') {
            let id = Number(elements[0]);
            let stealedTresure = tresure.slice(-id);

            tresure.splice(-id);
            console.log(stealedTresure.join(', '));
        }
    }

    total = tresure.reduce((sum, tresure) => sum + tresure.length, 0) / tresure.length;

    if (tresure.length > 0) {
        console.log(`Average treasure gain: ${total.toFixed(2)} pirate credits.`);
    } else {
        console.log("Failed treasure hunt.");
    }
}