function thePianist(input) {
    let catalog = {};

    let n = Number(input.shift());

    let actions = {
        'Add': add,
        'Remove': remove,
        'ChangeKey': change
    };

    for (let i = 0; i < n; i++) {
        let [name, composer, key] = input.shift().split('|');

        catalog[name] = {
            composer,
            key
        };
    }

    while (input[0] != 'Stop') {
        let tokens = input.shift().split('|');
        let command = tokens[0];
        let name = tokens[1];

        let action = actions[command];
        action(name, tokens[2], tokens[3])
    }

    let sorted = Object.entries(catalog).sort((a, b) => {
        return a[0].localeCompare(b[0]) || a[1].composer.localeCompare(b[1].composer);
    });

    for (let [name, piece] of sorted) {
        console.log(`${name} -> Composer: ${piece.composer}, Key: ${piece.key}`);
    }

    function add(name, composer, key) {
        if (!catalog[name]) {
            catalog[name] = {
                composer,
                key
            }
            console.log(`${name} by ${composer} in ${key} added to the collection!`);
        } else {
            console.log(`${name} is already in the collection!`);
        }
    }

    function remove(name) {
        if (catalog[name]) {
            delete catalog[name];
            console.log(`Successfully removed ${name}!`);
        } else {
            console.log(`Invalid operation! ${name} does not exist in the collection.`);
        }
    }

    function change(name, newKey) {
        if (catalog[name]) {
            catalog[name].key = newKey;
            console.log(`Changed the key of ${name} to ${newKey}!`);
        } else {
            console.log(`Invalid operation! ${name} does not exist in the collection.`);
        }
    }
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
]);

console.log();

thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);