function carFactory(obj) {
    function engine(horsePower) {
        const engine = {};

        if (horsePower <= 90) {
            engine.power = 90;
            engine.volume = 1800;
        } else if (horsePower <= 120) {
            engine.power = 120;
            engine.volume = 2400;
        } else if (horsePower <= 200) {
            engine.power = 200;
            engine.volume = 3500;
        }

        return engine;
    }

    function wheels(wheelSize) {
        let newSize = wheelSize % 2 == 0 ? wheelSize - 1 : wheelSize;
        return [,,,,].fill(newSize);
    }

    return {
        model: obj.model,
        engine: engine(obj.power),
        carriage: { type: obj.carriage, color: obj.color },
        wheels: wheels(obj.wheelsize)
    };
}

console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }));

console.log();

console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }));