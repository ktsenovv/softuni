function sortArrayByCriteria(input) {
    let sorted = input.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });

    console.log(sorted.join('\n'));
}

sortArrayByCriteria(['alpha',
    'beta',
    'gamma']);

console.log();

sortArrayByCriteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']);

console.log();

sortArrayByCriteria(['test',
    'Deny',
    'omen',
    'Default']);