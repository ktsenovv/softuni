function theatrePromotions(dayType, agePerson) {
    if (agePerson >= 0 && agePerson <= 18) {
        if (dayType === 'Weekday') {
            console.log(`12$`);
        } else if (dayType === 'Weekend') {
            console.log(`15$`);
        } else if (dayType === 'Holiday') {
            console.log(`5$`);
        }
    } else if (agePerson > 18 && agePerson <= 64) {
        if (dayType === 'Weekday') {
            console.log(`18$`);
        } else if (dayType === 'Weekend') {
            console.log(`20$`);
        } else if (dayType === 'Holiday') {
            console.log(`12$`);
        }
    } else if (agePerson > 64 && agePerson <= 122) {
        if (dayType === 'Weekday') {
            console.log(`12$`);
        } else if (dayType === 'Weekend') {
            console.log(`15$`);
        } else if (dayType === 'Holiday') {
            console.log(`10$`);
        }
    } else {
        console.log('Error!');
    }
}