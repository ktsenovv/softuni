function sortArray(array, sort) {
    array.sort((a, b) => sort === 'asc' ? a - b : b - a);
    return array;
}

sortArray([14, 7, 17, 6, 8], 'asc');

console.log();

sortArray([14, 7, 17, 6, 8], 'desc');