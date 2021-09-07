function tradeCommissions(input) {
    let city = input[0];
    let sells = Number(input[1]);
    let comission = 0;

    if(city == "Sofia")
    {
        if(sells >= 0 && sells <= 500) comission = 0.05;
        else if(sells > 500 && sells <= 1000) comission = 0.07;
        else if(sells > 1000 && sells <= 10000) comission = 0.08;
        else if(sells > 10000) comission = 0.12;
        
        if(sells < 0) console.log("error");
        else console.log((sells * comission).toFixed(2));
    } else if(city == "Varna") {
        if(sells >= 0 && sells <= 500) comission = 0.045;
        else if(sells > 500 && sells <= 1000) comission = 0.075;
        else if(sells > 1000 && sells <= 10000) comission = 0.1;
        else if(sells > 10000) comission = 0.13;
        
        if(sells < 0) console.log("error");
        else console.log((sells * comission).toFixed(2));
    } else if(city == "Plovdiv") {
        if(sells >= 0 && sells <= 500) comission = 0.055;
        else if(sells > 500 && sells <= 1000) comission = 0.08;
        else if(sells > 1000 && sells <= 10000) comission = 0.12;
        else if(sells > 10000) comission = 0.145;
        
        if(sells < 0) console.log("error");
        else console.log((sells * comission).toFixed(2));
    } else {
        console.log("error");
    }
}