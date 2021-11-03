class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        money = Number(money);

        if (this.priceForTheCamp[condition] == undefined) {
            throw new Error(`Unsuccessful registration at the camp.`);
        }

        let part = this.listOfParticipants.some(p => p.name == name);
        if (part) {
            return `The ${name} is already registered at the camp.`;
        }

        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({
            name,
            condition,
            power: 100,
            wins: 0
        });

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        let part = this.listOfParticipants.find(p => p.name == name);
        if (!part) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        let index = this.listOfParticipants.indexOf(part);

        this.listOfParticipants.splice(index, 1);
        
        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let part1 = this.listOfParticipants.find(p => p.name == participant1);
        if (typeOfGame == 'WaterBalloonFights') {
            let part2 = this.listOfParticipants.find(p => p.name == participant2);

            if (!part1 || !part2) {
                throw new Error(`Invalid entered name/s.`);
            }

            if (part1.condition != part2.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if(part1.power > part2.power) {
                part1.wins++;

                return `The ${participant1} is winner in the game ${typeOfGame}.`;
            } else if (part1.power < part2.power) {
                part2.wins++;

                return `The ${participant2} is winner in the game ${typeOfGame}.`;
            } else {
                return `There is no winner.`
            }
        } else if (typeOfGame == 'Battleship') {
            if (!part1) {
                throw new Error(`Invalid entered name/s.`);
            }

            part1.power += 20;

            return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        }
    }

    toString() {
        let numberOfParticipants = this.listOfParticipants.length;
        const result = [`${this.organizer} will take ${numberOfParticipants} participants on camping to ${this.location}`];
        let sorted = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        for (let part of sorted) {
            result.push(`${part.name} - ${part.condition} - ${part.power} - ${part.wins}`);
        }
        return result.join('\n');
    }
}

/*
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));


The money is not enough to pay the stay at the camp.
The Petar Petarson was successfully registered.
The Petar Petarson is already registered at the camp.
Uncaught Error: Unsuccessful registration at the camp.


const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.unregisterParticipant("Petar"));
console.log(summerCamp.unregisterParticipant("Petar Petarson"));

/*
The Petar Petarson was successfully registered.
Uncaught Error: The Petar is not registered in the camp.
The Petar Petarson removed successfully.


const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

/*
The Petar Petarson was successfully registered.
The Petar Petarson successfully completed the game Battleship.
The Sara Dickinson was successfully registered.
Uncaught Error: Choose players with equal condition.
The Dimitur Kostov was successfully registered.
The Petar Petarson is winner in the game WaterBalloonFights.
*/

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());

/*
The Petar Petarson was successfully registered.
The Petar Petarson successfully completed the game Battleship.
The Sara Dickinson was successfully registered.
Uncaught Error: Choose players with equal condition.
The Dimitur Kostov was successfully registered.
The Petar Petarson is winner in the game WaterBalloonFights.
Jane Austen will take 3 participants on camping to Pancharevo Sofia 1137, Bulgaria
Petar Petarson - student - 120 - 1
Sara Dickinson - child - 100 - 0
Dimitur Kostov - student - 100 - 0
*/