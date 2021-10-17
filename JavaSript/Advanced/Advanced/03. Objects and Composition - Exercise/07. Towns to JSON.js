function townsToJson(input) {
    const towns = [];
    input.shift();

    for (let line of input) {
        let [townStr, latitudeStr, longitudeStr] = line.split(' | ');
        let currentTown = townStr.split('| ')[1];
        let currentLatitude = Number(Number(latitudeStr).toFixed(2));
        let currentLongitude = Number(Number(longitudeStr.split(' |')[0]).toFixed(2));
        
        towns.push({
            Town: currentTown,
            Latitude: currentLatitude,
            Longitude: currentLongitude
        });
    }

    console.log(JSON.stringify(towns));
}

townsToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);

console.log();

townsToJson(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']);