function basketballTournament(input) {
    let winsCount = 0;
    let losesCount = 0;
    let gamesCount = 0;
    let tournamentName = '';

    while(tournamentName !== 'End of tournaments') {
        tournamentName = input.shift();
        let numGames = Number(input.shift());

        for(let i=1; i <= numGames; i++) {
            let t1Points = input.shift();
            let t2Points = input.shift();

            if(t1Points > t2Points) {
                console.log(`Game ${i} of tournament ${tournamentName}: win with ${t1Points - t2Points} points.`);
                winsCount++;
            } else {
                console.log(`Game ${i} of tournament ${tournamentName}: lost with ${Math.abs(t1Points - t2Points)} points.`);
                losesCount++;
            }

            gamesCount++;
        }
    }

    console.log(`${((winsCount / gamesCount) * 100).toFixed(2)}% matches win`);
    console.log(`${((losesCount / gamesCount) * 100).toFixed(2)}% matches lost`);
}