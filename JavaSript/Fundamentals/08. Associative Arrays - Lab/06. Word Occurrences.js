function wordOccurrences(input) {
    let map = new Map();

    for (let word of input) {
        if (!map.has(word)) {
            map.set(word, 1);
        } else {
            let currNum = map.get(word);
            let newNum = currNum += 1;
            map.set(word, newNum);
        }
    }

    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

    for (let key in sorted) {
        console.log(`${sorted[key].join(' -> ')} times`);
    }
}

wordOccurrences(['Here', 'is', 'the', 'first', 'sentence',
    'Here', 'is', 'another', 'sentence', 'And',
    'finally', 'the', 'third', 'sentence']);