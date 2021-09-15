function vacation(input) {
    let money_excursion = Number(input[0]);
    let money_available = Number(input[1]);
    
    let days = 0;
    let spend = 0;
    let index = 2;
    
    while(true)
    {
        let operation = input[index];
        index++;
        let money = Number(input[index]);
        index++
        
        days++;
        
        if(operation == 'save')
        {
            spend = 0;
            money_available += money;
        } else if(operation == 'spend') {
            spend++;
            money_available -= money;
            
            if(money > money_available) {
                money_available = 0;
            }
        }
        
        if(money_available >= money_excursion)
        {
            console.log(`You saved the money for ${days} days.`);
            break;
        }
        
        if(spend >= 5)
        {
            console.log(`You can't save the money.`);
            console.log(days);
            break;
        }
    }
}