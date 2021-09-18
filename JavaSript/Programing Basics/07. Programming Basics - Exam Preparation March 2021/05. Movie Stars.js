function movieStars(input) {
    let budget = Number(input.shift());

    while(budget > 0) {
        let actorName = input.shift();

        if(actorName === 'ACTION')
            break;

        if(actorName.length <= 15) {
            salary = Number(input.shift());
        } else {
            salary = budget * 0.20;
        }

        budget -= salary;
    }

    if(budget >= 0) {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    } else {
        console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
    }
}