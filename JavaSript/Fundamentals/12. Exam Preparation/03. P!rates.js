function pirates(input) {
    let towns = {};

    let actions = {
        'Plunder': plunder,
        'Prosper': prosper
    };

    while (input[0] != 'Sail') {
        let [name, population, gold] = input.shift().split('||');
        population = Number(population);
        gold = Number(gold);

        if (!towns[name]) {
            towns[name] = {
                population,
                gold
            };
        } else {
            towns[name].population += population;
            towns[name].gold += gold;
        }
    }

    input.shift();

    while (input[0] != 'End') {
        let tokens = input.shift().split('=>');
        let command = tokens[0];
        let action = actions[command];
        action(tokens[1], tokens[2], tokens[3]);
    }

    let sorted = Object.entries(towns).sort((a, b) => { return (b[1].gold - a[1].gold) || (a[0].localeCompare(b[0])); });

    console.log(`Ahoy, Captain! There are ${Object.keys(towns).length} wealthy settlements to go to:`);
    for (let [townName, town] of sorted) {
        console.log(`${townName} -> Population: ${town.population} citizens, Gold: ${town.gold} kg`);
    }

    function plunder(townName, people, gold) {
        people = Number(people);
        gold = Number(gold);
        
        towns[townName].population -= people;
        towns[townName].gold -= gold;

        console.log(`${townName} plundered! ${gold} gold stolen, ${people} citizens killed.`);

        if (towns[townName].population <= 0 || towns[townName].gold <= 0) {
            delete towns[townName];
            console.log(`${townName} has been wiped off the map!`);
        }
    }

    function prosper(townName, gold) {
        gold = Number(gold);

        if (gold <= 0) {
            console.log(`Gold added cannot be a negative number!`);
        } else {
            towns[townName].gold += gold;
            console.log(`${gold} gold added to the city treasury. ${townName} now has ${towns[townName].gold} gold.`);
        }
    }
}

pirates([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"
]);

console.log();

pirates([
    "Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"
]);