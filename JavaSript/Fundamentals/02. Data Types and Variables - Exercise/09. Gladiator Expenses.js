function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetCounter = 0;
    let swordCounter = 0;
    let shieldCounter = 0;
    let sum = 0;

    for (let i = 1; i <= lostFights; i++) {
        helmetCounter++;
        swordCounter++;

        // Broken Helmet
        if (helmetCounter === 2) {
            helmetCounter = 0;
            sum += helmetPrice;
        }

        // Broken Sword
        if (swordCounter === 3) {
            swordCounter = 0;
            sum += swordPrice;
        }

        // Broken Shield
        if (helmetCounter === 0 && swordCounter === 0) {
            shieldCounter++;
            sum += shieldPrice;
        }

        // Broken Armor
        if (shieldCounter == 2) {
            shieldCounter = 0;
            sum += armorPrice;
        }
    }

    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}

gladiatorExpenses(23, 12.50, 21.50, 40, 200);