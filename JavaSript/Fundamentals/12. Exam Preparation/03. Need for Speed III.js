function needForSpeedThree(input) {
    let carsNum = input.shift();
    let cars = {};

    let actions = {
        'Drive': drive,
        'Refuel': refuel,
        'Revert': revert
    };

    for (let i = 0; i < carsNum; i++) {
        let [name, mileage, fuel] = input.shift().split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);

        cars[name] = {
            mileage,
            fuel
        };
    }

    while (input[0] != 'Stop') {
        let tokens = input.shift().split(' : ');
        let command = tokens[0];
        let action = actions[command];
        action(tokens[1], tokens[2], tokens[3]);
    }

    let sorted = Object.entries(cars).sort((a, b) => { return (b[1].mileage - a[1].mileage) || (a[0].localeCompare(b[0])); });

    for (let [carName, car] of sorted) {
        console.log(`${carName} -> Mileage: ${car.mileage} kms, Fuel in the tank: ${car.fuel} lt.`);
    }

    function drive(carName, distance, fuel) {
        distance = Number(distance);
        fuel = Number(fuel);

        if (fuel < cars[carName].fuel) {
            cars[carName].mileage += distance;
            cars[carName].fuel -= fuel;

            console.log(`${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

            if (cars[carName].mileage >= 100000) {
                delete cars[carName];
                console.log(`Time to sell the ${carName}!`);
            }
        } else {
            console.log('Not enough fuel to make that ride');
        }
    }

    function refuel(carName, fuel) {
        fuel = Number(fuel);
        let fuelDiff = fuel;
        let oldFuel = cars[carName].fuel;

        cars[carName].fuel += fuel;

        if (cars[carName].fuel > 75) {
            cars[carName].fuel = 75;
            fuelDiff = cars[carName].fuel - oldFuel;
        }

        console.log(`${carName} refueled with ${fuelDiff} liters`);
    }

    function revert(carName, kilometers) {

        totalMileage = kilometers - cars[carName].mileage;

        cars[carName].mileage -= kilometers;

        if (cars[carName].mileage < 10000) {
            cars[carName].mileage = 10000;
        } else {
            console.log(`${carName} mileage decreased by ${kilometers} kilometers`);
        }
    }
}

needForSpeedThree([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ]);

console.log();

needForSpeedThree([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);