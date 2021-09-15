function walking(input) {
    let steps_target = 10000;
    let steps_sum = 0;
    let index = 0;
    
    while(true)
    {
        let inp = input[index];
        index++;

        if(inp == 'Going home')
        {
            let steps_final = Number(input[index]);
            steps_sum += steps_final;
            break;
        }
        else
        {
            let steps_current = Number(inp);
            steps_sum += steps_current;
            
            if(steps_sum >= steps_target) {
                break;
            }
        }
    }
    
    if(steps_sum >= steps_target) {
        console.log(`Goal reached! Good job!`);
        console.log(`${steps_sum - steps_target} steps over the goal!`);
    } else {
        console.log(`${steps_target - steps_sum} more steps to reach goal.`);
    }
}