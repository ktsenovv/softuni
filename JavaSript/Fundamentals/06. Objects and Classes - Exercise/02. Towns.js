function towns(input) {
    for (let tokens of input) {
        tokens = tokens.split(' | ');
        townName = tokens[0];
        townLatitude = Number(tokens[1]).toFixed(2);
        townLongitude = Number(tokens[2]).toFixed(2);

        let townData = {
            town: townName,
            latitude: townLatitude,
            longitude: townLongitude
        };

        console.log(townData);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);