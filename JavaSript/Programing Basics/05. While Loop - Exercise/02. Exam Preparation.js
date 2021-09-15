function examPreparation(input) {
    let max_br = Number(input[0]);

    let average_rate = 0;
    let bad_rates = 0;
    let tasks = 0;
    let index = 1;
    
    while(true)
    {
        task_name = input[index];
        
        if(task_name == 'Enough')
        {
            average_rate /= tasks;
            console.log(`Average score: ${average_rate.toFixed(2)}`);
            console.log(`Number of problems: ${tasks}`);
            console.log(`Last problem: ${last_task}`);
            break;
        }
        
        index++;
        task_rate = Number(input[index]);
        index++;
        
        if(task_rate <= 4) {
            bad_rates++;
        }
        
        average_rate += task_rate;
        tasks++;
        last_task = task_name;
        
        if(max_br <= bad_rates)
        {
            console.log(`You need a break, ${bad_rates} poor grades.`);
            break;
        }
    }
}