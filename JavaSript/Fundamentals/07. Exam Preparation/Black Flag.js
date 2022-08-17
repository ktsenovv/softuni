function blackFlag(input) {
    let plunderDays = Number(input.shift());
    let dailyPlunder = Number(input.shift());
    let expectedPlunder = Number(input.shift());

    let totalPlunder = 0;

    for (let i = 1; i <= plunderDays; i++) {
        totalPlunder += dailyPlunder;

        if (i % 3 === 0) {
            totalPlunder += (dailyPlunder * 0.5);
        }

        if (i % 5 === 0) {
            totalPlunder *= 0.70
        }
    }

    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`)
    } else {
        console.log(`Collected only ${(totalPlunder / expectedPlunder * 100).toFixed(2)}% of the plunder.`);
    }
}