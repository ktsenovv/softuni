function hotelRoom(input) {
    let month = input[0].toLowerCase();
    let days = Number(input[1]);
    let studio = 0;
    let apartment = 0;
    
    if(month == 'may' || month == 'october')
    {
        studio = 50;
        apartment = 65;
        
        if(days > 7 && days <= 14) studio = studio - (studio * 0.05);
        else if(days > 14) studio = studio - (studio * 0.30);
    }
    else if(month == 'june' || month == 'september')
    {
        studio = 75.20;
        apartment = 68.70;
        
        if(days > 14) studio = studio - (studio * 0.20);
    }
    else if(month == 'july' || month == 'august')
    {
        studio = 76;
        apartment = 77;
    }
    
    if(days > 14) apartment = apartment - (apartment * 0.10);
    
    console.log(`Apartment: ${(apartment * days).toFixed(2)} lv.`);
    console.log(`Studio: ${(studio * days).toFixed(2)} lv.`)
}