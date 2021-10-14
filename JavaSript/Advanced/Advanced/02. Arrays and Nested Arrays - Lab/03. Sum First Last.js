function firstLast(input) {
    console.log(Number(input.shift()) + Number(input.pop()));
}

firstLast(['20', '30', '40']);
console.log();
firstLast(['5', '10']);