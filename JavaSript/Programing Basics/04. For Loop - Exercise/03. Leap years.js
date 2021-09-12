function leapYears(input) {
    year1 = Number(input[0]);
    year2 = Number(input[1]);

    for(let i=year1; i <= year2; i += 4) {
        console.log(i);
    }
}