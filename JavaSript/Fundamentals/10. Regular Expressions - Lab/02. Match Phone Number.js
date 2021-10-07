function matchPhoneNumber(input) {
    let pattern = /(\+359([ -])2(\2)(\d{3})(\2)(\d{4}))\b/g;
    let result = [];

    let match = pattern.exec(input);

    while (match != null) {
        result.push(match[0]);

        match = pattern.exec(input);
    }

    console.log(result.join(', '));
}

matchPhoneNumber('+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222');