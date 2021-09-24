function ladyBugs(input) {
    let fieldSize = input.shift();
    let bugsPosition = input.shift().split(' ');
    let finalBugsArray = new Array(fieldSize).fill(0);

    for (const position of bugsPosition) {
        let currentBug = Number(position);

        if (currentBug < 0 || currentBug >= fieldSize) {
            continue;
        }

        finalBugsArray[currentBug] = 1;
    }
    
    for (let i = 0; i < input.length; i++) {
        command = input[i].split(' ');
        bugID = Number(command[0]);
        direction = command[1];
        move = Number(command[2]);

        if (bugID < 0 || bugID >= finalBugsArray.length || finalBugsArray[bugID] !== 1) {
            continue;
        }

        finalBugsArray[bugID] = 0;
    
        if (direction === 'left') {
            move = -move;
        }

        bugID += move;

        while (bugID >= 0 && bugID < finalBugsArray.length) {
            if (finalBugsArray[bugID] === 0) {
                finalBugsArray[bugID] = 1;
                break;
            }
            bugID += move;
        }
    }

    console.log(finalBugsArray.join(' '));
}

ladyBugs([ 5, '3',
    '3 left 2',
    '1 left -2']);