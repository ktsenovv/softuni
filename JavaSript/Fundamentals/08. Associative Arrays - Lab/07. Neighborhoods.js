function neighborhoods(input) {
    let map = new Map();
    let neighborhoods = input.shift().split(', ');

    for (let neighborhood of neighborhoods) {
        map.set(neighborhood, []);
    }

    while (input.length > 0) {
        let current = input.shift().split(' - ');
        let neighborhood = current[0];
        let person = current[1];
        
        if (neighborhoods.includes(neighborhood)) {
            map.get(neighborhood).push(person);
        }
    }

    let sorted = Array.from(map).sort((a, b) => {return b[1].length - a[1].length;});

    for (let line of sorted) {
        let [neighborhood, person] = line;
        console.log(`${neighborhood}: ${person.length}`);
        for (let i = 0; i < person.length; i++) {
            console.log(`--${person[i]}`);
        }
    }
}

neighborhoods(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']);