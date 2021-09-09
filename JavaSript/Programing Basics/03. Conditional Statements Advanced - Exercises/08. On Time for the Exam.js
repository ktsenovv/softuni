function onTimeForTheExam(input) {
    let exam_h = Number(input[0]);
    let exam_m = Number(input[1]);
    let arival_h = Number(input[2]);
    let arival_m = Number(input[3]);
    
    let exam_inm = exam_h * 60 + exam_m;
    let arival_inm = arival_h * 60 + arival_m;
    
    let difference = exam_inm - arival_inm;
    
    if(difference >= 0 && difference <= 30) console.log("On time");
    else if(difference > 30) console.log("Early");
    else if(difference < 0) console.log("Late");
    
    if(difference >= 1)
    {
        let hh = difference / 60;
        let mm = difference % 60;
        if(difference < 60) console.log(`${difference} minutes before the start`);
        else console.log(`${Math.floor(hh)}:${mm < 10 ? '0' + mm : mm} hours before the start`);
    }
    else if(difference <= -1)
    {
        let hh = Math.abs(difference) / 60;
        let mm = Math.abs(difference) % 60;
        if(difference > -60) console.log(`${Math.abs(difference)} minutes after the start`);
        else console.log(`${Math.floor(hh)}:${mm < 10 ? '0' + mm : mm} hours after the start`);
    }
}