function dungeonestDark(arr) {
    let rooms = arr[0].split('|');
    let health = 100;
    let coins = 0;
    let died = false;
    
    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i].split(' ');
        let type = room[0];
        let points = Number(room[1]);

        if (type === 'potion') {
            if (health + points > 100) {
                points = 100 - health;
                health = 100;
              } else {
                health += points;
              }

            console.log(`You healed for ${points} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (type === 'chest') {
            coins += points;
            console.log(`You found ${points} coins.`);
        } else {
            health -= points;
            
            if(health <= 0) {
                console.log(`You died! Killed by ${type}.`);
                console.log(`Best room: ${++i}`);
                died = true;
                break;
            } else {
                console.log(`You slayed ${type}.`);
            }
        }
    }

    if(!died) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);