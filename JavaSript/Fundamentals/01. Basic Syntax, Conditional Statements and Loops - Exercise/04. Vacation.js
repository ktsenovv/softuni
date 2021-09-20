function vacation(peopleCount, groupType, dayOfTheWeek) {
    let totalPrice = 0;

    if(groupType === 'Business' && peopleCount >= 100) {
        peopleCount -= 10;
    }

    if(groupType === 'Students' && dayOfTheWeek === 'Friday') {
        totalPrice = peopleCount * 8.45;
    } else if(groupType === 'Students' && dayOfTheWeek === 'Saturday') {
        totalPrice = peopleCount * 9.80;
    } else if(groupType === 'Students' && dayOfTheWeek === 'Sunday') {
        totalPrice = peopleCount * 10.46;
    } else if(groupType === 'Business' && dayOfTheWeek === 'Friday') {
        totalPrice = peopleCount * 10.90;
    } else if(groupType === 'Business' && dayOfTheWeek === 'Saturday') {
        totalPrice = peopleCount * 15.60;
    } else if(groupType === 'Business' && dayOfTheWeek === 'Sunday') {
        totalPrice = peopleCount * 16;
    } else if(groupType === 'Regular' && dayOfTheWeek === 'Friday') {
        totalPrice = peopleCount * 15;
    } else if(groupType === 'Regular' && dayOfTheWeek === 'Saturday') {
        totalPrice = peopleCount * 20;
    } else if(groupType === 'Regular' && dayOfTheWeek === 'Sunday') {
        totalPrice = peopleCount * 22.50;
    }

    if(groupType === 'Students' && peopleCount >= 30) {
        totalPrice *= 0.85;
    } else if(groupType === 'Regular' && peopleCount >= 10 && peopleCount <= 20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}