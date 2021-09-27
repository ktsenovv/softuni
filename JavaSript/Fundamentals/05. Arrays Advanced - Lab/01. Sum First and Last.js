function sumFirstLast(input) {
    console.log(Number(input.shift()) + Number(input.pop()));
}

sumFirstLast(['5', '10']);