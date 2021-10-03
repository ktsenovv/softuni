function oddOccurrences(string) {
    let occurrances = {};
    let listOfStrings = string.split(' ');

    for (let string of listOfStrings) {
        let stringToLower = string.toLowerCase();

        if(!Object.keys(occurrances).includes(stringToLower)) {
            occurrances[stringToLower] = 0;
        }

        occurrances[stringToLower] += 1;
    }

    let resultString = '';
    
    for (let [key, value] of Object.entries(occurrances)) {
        
        if (value % 2 !== 0) {
            resultString += `${key} `;
        }
    }

    console.log(resultString);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');