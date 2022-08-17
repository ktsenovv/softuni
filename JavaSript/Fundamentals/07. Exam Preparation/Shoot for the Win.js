function shootForTheWin(input) {
    let targets = input.shift().split(' ').map(Number);
 
    let targetsToShoot = input.slice(0, -1).map(Number);
 
    for (let currentTarget of targetsToShoot) {
        if (targets[currentTarget] !== undefined && targets[currentTarget] !== -1) {
            let targetValue = targets[currentTarget];
            targets[currentTarget] = -1;
 
            targets = targets.map(e => {
                if(e === -1) return e;
 
                if (e > targetValue) {
                    return e - targetValue;
                }
                return  e + targetValue;
            });
        }
    }
 
    let shootTargets = targets.filter(e => e === -1).length;
 
    console.log(`Shot targets: ${shootTargets} -> ${targets.join(' ')}`);
}

shootForTheWin(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"]);