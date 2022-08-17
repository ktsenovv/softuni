function manOWar(input) {
    let pirateShip = input.shift().split(`>`).map(Number);
    let warShip = input.shift().split(`>`).map(Number);
    let maxHealth = Number(input.shift());
    let token = input.shift();
    let isDead = false;
   
    while (token != `Retire`) {
        if (isDead === true) {
            break;
        }

        let splittedToken = token.split(` `);
        let comand = splittedToken[0];
        let indexOne = splittedToken[1];
        let indexTwo = splittedToken[2];
        let indexThree = splittedToken[3];
   
        if (comand === `Fire`) {
            let index = Number(indexOne);
            let damage = Number(indexTwo);

            if (index >= 0 && index < warShip.length) {
                warShip[index] = warShip[index] - damage;
                
                if (warShip[index] <= 0) {
                    isDead = true;
                    console.log(`You won! The enemy ship has sunken.`);
                    return;
                }
            }
        } else if (comand === `Defend`) {
            let startIndex = Number(indexOne);
            let endIndex = Number(indexTwo);
            let damage = Number(indexThree);
            
            if ((startIndex >= 0 && startIndex < pirateShip.length) && (endIndex >= startIndex && endIndex <= pirateShip.length - 1)) {
                for (let i = startIndex; i <= endIndex; i++) {
                    pirateShip[i] -= damage;
                    
                    if (pirateShip[i] <= 0) {
                        isDead = true;
                        console.log(`You lost! The pirate ship has sunken.`);
                        return;
                    }
                }
            }
        } else if (comand === `Repair`) {
            let index = Number(indexOne);
            let health = Number(indexTwo);
            
            if (index >= 0 && index < pirateShip.length) {
                if (pirateShip[index] + health < maxHealth) {
                    pirateShip[index] = pirateShip[index] + health;
                } else {
                    pirateShip[index] = maxHealth;
                }
            }
        } else if (comand === `Status`) {
            let lessThan20Perc = maxHealth * 0.2;
            let coundSections = 0;
            
            for (let i = 0; i < pirateShip.length; i++) {
                if (pirateShip[i] < lessThan20Perc) {
                    coundSections++;
                }
            }
            console.log(`${coundSections} sections need repair.`);
        }
   
        token = input.shift();
    }
   
    if (!isDead) {
        let warShipPoint = warShip.reduce((acc, el) => acc + el, 0);
        let pirateShipPoints = pirateShip.reduce((acc, el) => acc + el, 0);
        
        console.log(`Pirate ship status: ${pirateShipPoints}`);
        console.log(`Warship status: ${warShipPoint}`);
    }
}