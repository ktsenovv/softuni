function movingTarget(input) {
    let target = input.shift().split(` `).map(Number)

    function shoot(index, power) {
        if (!(target[index] === undefined)) {
            let ind = target[index]
            ind = ind - power

            if (ind <= 0) {
                target.splice(index, 1)
            } else {
                target.splice(index, 1, ind)
            }
        }
    }

    function add(index, value) {
        if (!(target[index] === undefined)) {
            target.splice(index, 0, value)
        } else {
            console.log(`Invalid placement!`)
        }
    }

    function strike(index, radius) {
        if (index + radius <= target.length - 1 && index - radius >= 0) {
            target.splice(index - radius, radius * 2 + 1);
        } else {
            console.log(`Strike missed!`);
        }
    }

    let token = input.shift()

    while (token !== `End`) {
        let currentComand = token.split(` `)

        let comand = currentComand[0]
        let indexx = Number(currentComand[1])
        let value = Number(currentComand[2])

        if (comand === `Shoot`) {
            shoot(indexx, value);
        } else if (comand === `Add`) {
            add(indexx, value);
        } else if (comand === `Strike`) {
            strike(indexx, value);
        }

        token = input.shift();
    }

    console.log(target.join(`|`));
}

movingTarget([
    '52 74 23 44 96 110',
    'Shoot 5 10',
    'Shoot 1 80',
    'Strike 2 1',
    'Add 22 3',
    'End'
]);