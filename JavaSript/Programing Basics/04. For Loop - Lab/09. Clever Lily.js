function cleverLily(input) {
    let age = Number(input[0]);
    let wmachinep = Number(input[1]);
    let toyp = Number(input[2]);
    
    let m = 0;
    let money = 0;
    let toys = 0;
    
    for(let i=1; i <= age; i++)
    {
        if (i % 2 == 0)
        {
            m += 10;
            money = money + m - 1;
        }
        else toys++;
    }
    
    toys *= toyp;
    money += toys;
    
    if(money >= wmachinep) {
        console.log(`Yes! ${(money - wmachinep).toFixed(2)}`);
    } else {
        console.log(`No! ${Math.abs(money - wmachinep).toFixed(2)}`);
    }
}