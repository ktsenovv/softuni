function fcoins(input) {
    let money = Number(input[0]) * 100;

    let rest = 0;
    let coins = 0;
    
    while(money > 0)
    {
        // 2 lv
        rest = money % 200;
        coins += Math.floor(money / 200);
        money = money - coins * 200;
        
        // 1 lv
        money = rest;
        rest = money % 100;
        coins += Math.floor(money / 100);
        money = money - coins * 100;
        
        // 0.50 lv
        money = rest;
        rest = money % 50;
        coins += Math.floor(money / 50);
        money = money - coins * 50;
        
        // 0.20 lv
        money = rest;
        rest = money % 20;
        coins += Math.floor(money / 20);
        money = money - coins * 20;
        
        // 0.10 lv
        money = rest;
        rest = money % 10;
        coins += Math.floor(money / 10);
        money = money - coins * 10;
        
        // 0.05 lv
        money = rest;
        rest = money % 5;
        coins += Math.floor(money / 5);
        money = money - coins * 5;
        
        // 0.02 lv
        money = rest;
        rest = money % 2;
        coins += Math.floor(money / 2);
        money = money - coins * 2;
        
        // 0.01 lv
        money = rest;
        rest = money % 1;
        coins += Math.floor(money / 1);
        money = money - coins * 1;
    }
    console.log(coins);
}