function firstLastKNumbers(input) {
    let num = input.shift();

    console.log(input.slice(0, num).join(' '));
    console.log(input.slice(input.length-num, input.length).join(' '));
}

firstLastKNumbers([3,
    6, 7, 8, 9]);