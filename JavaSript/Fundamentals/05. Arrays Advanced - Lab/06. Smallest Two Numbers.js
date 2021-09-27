function smallestTwoNumbers(input) {
    let sortedInAsc = input.sort((a, b) => {return a - b;}).slice(0, 2);
    console.log(sortedInAsc.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);