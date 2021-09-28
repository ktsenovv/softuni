function sortTwoCriteria(input) {
    input.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(input.join('\n'));
}

sortTwoCriteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']);