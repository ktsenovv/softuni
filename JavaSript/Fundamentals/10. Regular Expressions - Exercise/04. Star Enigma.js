function starEnigma(input) {
    let numberMessages = Number(input.shift());
    let patternStar = /[star]/g;
    let planets = [];

    for (let command of input) {
        let counter = 0;
        let chars = command.split('');

        for (let i = 0; i < chars.length; i++) {
            let currentChar = chars[i].toLowerCase();

            if (currentChar.match(patternStar)) {
                counter++;
            }
        }
 
        for (let i = 0; i < chars.length; i++) {
            chars[i] = String.fromCharCode(chars[i].charCodeAt(0) - counter);
        }
 
        planets.push(chars.join(''));
    }

    let attackedCount = 0;
    let destroyedCount = 0;
    let attackedPlanets = [];
    let destroyedPlanets = [];
    
    let patternPlanet = /@(?<name>[A-Za-z]+)[^@:!\->]*:(?<population>\d+)[^@:!\->]*!(?<command>[A|D])![^@:!\->]*\->(?<soldier>\d+)/g;
    let planetInfo = patternPlanet.exec(planets);

    while (planetInfo !== null) {
        let name = planetInfo.groups['name'];
        let attackCommand = planetInfo.groups['command'];
 
        switch (attackCommand) {
            case "A":
                attackedCount++
                attackedPlanets.push(name);
                break;
 
            case "D":
                destroyedCount++;
                destroyedPlanets.push(name);
                break;
        }
 
        planetInfo = patternPlanet.exec(planets);
    }

    attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));
 
    console.log(`Attacked planets: ${attackedCount}`);

    if (attackedPlanets.length > 0) {
        for (let planet of attackedPlanets) {
            console.log(`-> ${planet}`);
        }
    }

    console.log(`Destroyed planets: ${destroyedCount}`);

    if (destroyedPlanets.length > 0) {
        for (let planet of destroyedPlanets) {
            console.log(`-> ${planet}`);
        }
    }
}

starEnigma(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);
console.log('');
starEnigma(["3", "tt(''DGsvywgerx>6444444444%H%1B9444", "GQhrr|A977777(H(TTTT", "EHfsytsnhf?8555&I&2C9555SR"]);