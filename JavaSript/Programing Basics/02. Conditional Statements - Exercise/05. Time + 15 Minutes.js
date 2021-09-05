function time(input) {
    hours = Number(input[0]);
    minutes = Number(input[1]);

    let minutesl = minutes + 15;

    if(minutesl > 59)
    {
        hours++;
        minutesl -= 60
    }

    if(hours > 23) {
        hours = 0;
    }

    if(minutesl < 10) {
        console.log(`${hours}:0${minutesl}`);
    } else {
        console.log(`${hours}:${minutesl}`);
    }
}