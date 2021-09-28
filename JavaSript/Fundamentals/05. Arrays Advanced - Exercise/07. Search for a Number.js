function searchNumber(numbers, actions) {
    let [numsToTake, numsToDelete, numToSearch] = actions;

    let result = numbers.splice(0, numsToTake);
    result = result.slice(numsToDelete);
    result = result.reduce(function(number, value) { return number + (value === numToSearch); }, 0);

    console.log(`Number ${numToSearch} occurs ${result} times.`);
}

searchNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);