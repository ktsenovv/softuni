function heroesOfCodeAndLogicSeven(input) {
    let heroesNum = input.shift();
    let heroes = {};

    let actions = {
        'CastSpell': castSpell,
        'TakeDamage': takeDamge,
        'Recharge': recharge,
        'Heal': heal
    };

    for (let i = 0; i < heroesNum; i++) {
        let [name, hitPoints, manaPoints] = input.shift().split(' ');
        hitPoints = Number(hitPoints);
        manaPoints = Number(manaPoints);

        heroes[name] = {
            hitPoints,
            manaPoints
        };
    }

    while(input[0] != 'End') {
        let tokens = input.shift().split(' - ');
        let command = tokens[0];
        let action = actions[command];
        action(tokens[1], tokens[2], tokens[3]);
    }

    let sorted = Object.entries(heroes).sort((a, b) => { return (b[1].hitPoints - a[1].hitPoints) || (a[0].localeCompare(b[0])); });

    for (let [heroName, hero] of sorted) {
        console.log(`${heroName}\nHP: ${hero.hitPoints}\nMP: ${hero.manaPoints}`);
    }

    function castSpell(heroName, manaPoints, spellName) {
        manaPoints = Number(manaPoints);

        if (manaPoints > heroes[heroName].manaPoints) {
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
        } else {
            heroes[heroName].manaPoints -= manaPoints;
            console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].manaPoints} MP!`);
        }
    }

    function takeDamge(heroName, damage, attacker) {
        damage = Number(damage);

        heroes[heroName].hitPoints -= damage;

        if (heroes[heroName].hitPoints > 0) {
            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hitPoints} HP left!`);
        } else {
            delete heroes[heroName];
            console.log(`${heroName} has been killed by ${attacker}!`);
        }
    }

    function recharge(heroName, amount) {
        amount = Number(amount);
        let oldMP = heroes[heroName].manaPoints;

        heroes[heroName].manaPoints += amount;

        if (heroes[heroName].manaPoints > 200) {
            heroes[heroName].manaPoints = 200;
            amount = heroes[heroName].manaPoints - oldMP;
        }

        console.log(`${heroName} recharged for ${amount} MP!`);
    }

    function heal(heroName, amount) {
        amount = Number(amount);
        let oldHP = heroes[heroName].hitPoints;

        heroes[heroName].hitPoints += amount;

        if (heroes[heroName].hitPoints > 100) {
            heroes[heroName].hitPoints = 100;
            amount = heroes[heroName].hitPoints - oldHP;
        }

        console.log(`${heroName} healed for ${amount} HP!`);
    }
}

heroesOfCodeAndLogicSeven([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);

console.log();

heroesOfCodeAndLogicSeven([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
]);