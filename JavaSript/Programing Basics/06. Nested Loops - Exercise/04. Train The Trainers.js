function trainTheTrainers(input) {
    let judges = Number(input.shift());

    let presScoreTotal = 0;
    let counter = 0;
    
    while(true)
    {
        let pres = input.shift();
        let presScore = 0;

        if(pres == "Finish")
        {
            let scoreSum = presScoreTotal / counter;
            console.log(`Student's final assessment is ${scoreSum.toFixed(2)}.`)
            break;
        }

        for(let i = 0; i < judges; i++)
        {
            let score = Number(input.shift());
            presScore += score;
            presScoreTotal += score;
            counter++;
        }
        console.log(`${pres} - ${(presScore / judges).toFixed(2)}.`);
    }
}