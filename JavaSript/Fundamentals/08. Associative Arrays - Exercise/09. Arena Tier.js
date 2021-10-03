function arenaTier(input) {
    let gladiators = {};

    for (let line of input) {
        if (line === 'Ave Cesar') {
            break;
        } else if (line.includes(' -> ')) {
            let [gladiator, technique, skill] = line.split(' -> ');
            skill = Number(skill);

            if (!gladiators.hasOwnProperty(gladiator)) {
                gladiators[gladiator] = {};
                gladiators[gladiator][technique] = skill;
            } else {
                if (!gladiators[gladiator].hasOwnProperty(technique)) {
                    gladiators[gladiator][technique] = skill;
                } else {
                    let oldSkill = gladiators[gladiator][technique];
                    
                    if (skill > oldSkill) {
                        gladiators[gladiator][technique] = skill;
                    }
                }
            }
        } else if (line.includes(' vs ')) {
            let [gladiatorOne, gladiatorTwo] = line.split(' vs ');

            if (gladiators.hasOwnProperty(gladiatorOne) && gladiators.hasOwnProperty(gladiatorTwo)) {
                let gladiatorOneSkill = gladiators[gladiatorOne];
                let gladiatorTwoSkill = gladiators[gladiatorTwo];
                
                for (let skillOne in gladiatorOneSkill) {
                    for (let skillTwo in gladiatorTwoSkill) {
                        if (skillOne === skillTwo) {
                            if (gladiatorOneSkill[skillOne] > gladiatorTwoSkill[skillTwo]) {
                                delete gladiators[gladiatorTwo];
                            } else if (gladiatorOneSkill[skillOne] < gladiatorTwoSkill[skillTwo]) {
                                delete gladiators[gladiatorOne];
                            }
                        }
                    }
                }
            }
        }
    }
    
    let sorted = [];

    for (let gladiator of Object.entries(gladiators)) {
      let name = gladiator[0];
      let pow = Object.entries(gladiator[1]);
      let sum = pow.map(a => a[1]).reduce((a, b) => a + b);
      sorted.push([name, pow, sum]);
    }

    sorted.sort((a, b) => b[2] - a[2] || a[0].localeCompare(b[0]))
    
    for (let part of sorted) {
      console.log(`${part[0]}: ${part[2]} skill`);
      part[1]
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .map(x => console.log(`- ${x[0]} <!> ${x[1]}`))
    }
}

arenaTier([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ]
    );