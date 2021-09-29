function convertJSON(name, lastName, hairColor) {
    let obj = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    }

    let text = JSON.stringify(obj);
    console.log(text);
}

convertJSON('George',
    'Jones',
    'Brown');