function addressBook(input) {
    let adrsBook = {};

    for (let line of input) {
        let [name, address] = line.split(':');
        adrsBook[name] = address;
    }

    let sorted = Object.entries(adrsBook);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let key in sorted) {
        console.log(sorted[key].join(' -> '));
    }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);