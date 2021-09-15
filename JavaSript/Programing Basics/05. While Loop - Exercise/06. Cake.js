function cake(input) {
    let cake_width = Number(input[0]);
    let cake_lenght = Number(input[1]);
    
    let cake_whole = cake_width * cake_lenght;
    let index = 2;
    
    while(true)
    {
        let pieces = input[index];
        index++;
        
        if(pieces == 'STOP')
        {
            console.log(`${cake_whole} pieces are left.`);
            break;
        }
        
        cake_whole = cake_whole - Number(pieces);
        
        if(cake_whole < 0)
        {
            console.log(`No more cake left! You need ${Math.abs(cake_whole)} pieces more.`);
            break;
        }
    }
}