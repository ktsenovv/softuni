function trekkingMania(input) {
    let groupsNum = Number(input.shift());
    let groupMusala = 0;
    let groupMonblan = 0;
    let groupKilimandjaro = 0;
    let groupK2 = 0;
    let groupEverest = 0;

    for(let i = 1; i <= groupsNum; i++) {
        let peoplePerGroup = Number(input.shift());

        if(peoplePerGroup <= 5) {
            groupMusala += peoplePerGroup;
        } else if(peoplePerGroup >= 6 && peoplePerGroup <= 12) {
            groupMonblan += peoplePerGroup;
        } else if(peoplePerGroup >= 13 && peoplePerGroup <= 25) {
            groupKilimandjaro += peoplePerGroup;
        } else if(peoplePerGroup >= 26 && peoplePerGroup <= 40) {
            groupK2 += peoplePerGroup;
        } else if(peoplePerGroup >= 41) {
            groupEverest += peoplePerGroup;
        }
    }

    let totalPeople = groupMusala + groupMonblan + groupKilimandjaro + groupK2 + groupEverest;

    console.log(`${(groupMusala / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(groupMonblan / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(groupKilimandjaro / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(groupK2 / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(groupEverest / totalPeople * 100).toFixed(2)}%`);
}