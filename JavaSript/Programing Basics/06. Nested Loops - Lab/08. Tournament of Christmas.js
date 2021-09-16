function xmasTournament(input) {
    let tournamentDays = Number(input.shift());
    let totalMoney = 0;
    let day = 0;
    let winsTotal = 0;
    let losesTotal = 0;

    while(day < tournamentDays) {
        let money = 0;
        let winsPDay = 0;
        let losesPDay = 0;

        while(true) {
            let sport = input.shift();

            if(sport == 'Finish') {
                break;
            }

            let winOrLose = input.shift();

            if(winOrLose == 'win') {
                money += 20;
                winsPDay++;
            } else {
                losesPDay++;
            }
        }

        if(winsPDay > losesPDay) {
            money = money + (money * 0.10);
        }
        
        totalMoney += money;
        winsTotal += winsPDay;
        losesTotal += losesPDay;
        day++;
    }

    if(winsTotal > losesTotal) {
        totalMoney += (totalMoney * 0.20);
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}