function catWalking(input) {
    let minutesWalkingPerDay = Number(input[0]);
    let numWakingsPerDay = Number(input[1]);
    let numCaloriesPerDay = Number(input[2]);

    let minutesWalking = minutesWalkingPerDay * numWakingsPerDay;
    let totalCalories = minutesWalking * 5;
    let atleastCalories = numCaloriesPerDay * 0.50;

    if(totalCalories >= atleastCalories)
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCalories}.`);
    else
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCalories}.`);
}