function plantDiscovery(input) {
    plantsNum = input.shift();
    plants = {};

    let actions = {
        'Rate': rate,
        'Update': update,
        'Reset': reset
    };

    for (let i = 0; i < plantsNum; i++) {
        let [plantName, plantRarity] = input.shift().split('<->');

        plants[plantName] = {
            rarity: Number(plantRarity),
            ratings: [],
            avgRating: 0
        };
    }

    while (input[0] != 'Exhibition') {
        let [command, params] = input.shift().split(': ');
        let action = actions[command];
        action(params);
    }
    
    let sorted = Object.entries(plants).sort((a, b) => { return (b[1].rarity - a[1].rarity) || (b[1].avgRating - a[1].avgRating); });

    console.log('Plants for the exhibition:');
    for (let [name, plant] of sorted) {
        console.log(`- ${name}; Rarity: ${plant.rarity}; Rating: ${plant.avgRating.toFixed(2)}`);
    }

    function rate(line) {
        let [name, rating] = line.split(' - ');
        if (plants[name] != undefined) {
            plant = plants[name]
            plant.ratings.push(Number(rating));

            let total = 0;
            for (let rating of plant.ratings) {
                total += rating;
            }

            plant.avgRating = total / plant.ratings.length;
        } else {
            console.log('error');
        }
    }

    function update(line) {
        let [name, rarity] = line.split(' - ');

        if (plants[name] != undefined) {
            plant = plants[name];
            plant.rarity = Number(rarity);
        } else {
            console.log('error');
        }
    }

    function reset(name) {
        if (plants[name] != undefined) {
            let plant = plants[name];
            plant.ratings.length = 0;
            plant.avgRating = 0;
        } else { 
            console.log('error');
        }
    }
}

plantDiscovery(['3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition']);

console.log('');

plantDiscovery(['2',
    'Candelabra<->10',
    'Oahu<->10',
    'Rate: Oahu - 7',
    'Rate: Candelabra - 6',
    'Exhibition']);