function volleyball(input) {
    let year = input[0];
    let p = Number(input[1]);
    let h = Number(input[2]);
    
    let weeksinsf = 48 - h;
    let numplaysinsf = weeksinsf * (3.0 / 4);
    let numplaysinbc = h;
    let numplaysinp = p * (2.0 / 3);
    
    let numplaystotal = numplaysinsf + numplaysinbc + numplaysinp;
    
    if(year == 'leap') numplaystotal = numplaystotal + (numplaystotal * 0.15);
    
    console.log(Math.floor(numplaystotal));
}