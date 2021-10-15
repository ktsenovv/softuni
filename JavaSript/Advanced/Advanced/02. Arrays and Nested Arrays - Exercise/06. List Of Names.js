function listOfNames(input) {
    input.sort((a, b) => a.localeCompare(b))
        .forEach((element, index) => {
            console.log(`${index+1}.${element}`);
        });
}

listOfNames(["John", "Bob", "Christina", "Ema"]);