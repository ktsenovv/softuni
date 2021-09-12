function salary(input) {
    let tabs = Number(input[0]);
    let salary = Number(input[1]);

    for(let i = 1; i <= tabs+1; i++)
    {
    	let browser = input[i];
        
    	if(browser == 'Facebook') {
            salary -= 150;
        } else if(browser == 'Instagram') {
            salary -= 100;
        } else if(browser == 'Reddit') {
            salary -= 50;
        }
        
	    if(salary <= 0) break;
    }

    if(salary > 0) {
        console.log(salary);
    } else {
        console.log(`You have lost your salary.`);
    }
}