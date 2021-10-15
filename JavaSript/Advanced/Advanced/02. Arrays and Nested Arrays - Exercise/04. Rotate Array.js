function rotateArray(arr, num) {
    for (let i = 0; i < num; i++) {
        let lastItem = arr.pop();
        arr.unshift(lastItem);
    }

    console.log(arr.join(' '));
}

rotateArray(['1',
    '2',
    '3',
    '4'],
    2
);

console.log();

rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
);