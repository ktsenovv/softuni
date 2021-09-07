function workingHours(input) {
    let hour = Number(input[0]);
    let day = input[1];
    let dayx = null;

    switch(day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday":
            dayx = true;
            break;
        case "Sunday":
            dayx = false;
            break;
    }
    if((hour >= 10 && hour <= 18) && dayx) {
        console.log("open");
    } else {
        console.log("closed");
    }
}