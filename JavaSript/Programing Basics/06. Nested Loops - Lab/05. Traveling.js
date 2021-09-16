function traveling(input) {
    index = 0;
    while(true)
    {
        let dest = input[index];
        index++;
        
        if(dest == 'End') {
            break;
        }
        
        let budget = Number(input[index]);
        index++;
        let budget_cur = 0;
        while(budget_cur < budget)
        {
            let money = Number(input[index]);
            index++;
            budget_cur += money;
        }
        console.log(`Going to ${dest}!`);
    }
}