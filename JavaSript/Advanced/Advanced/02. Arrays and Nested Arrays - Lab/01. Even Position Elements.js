function evenPosition(input) {
    console.log(input.filter((v, i) => i % 2 == 0).join(' '));
}

evenPosition(['20', '30', '40', '50', '60']);
console.log();
evenPosition(['5', '10']);