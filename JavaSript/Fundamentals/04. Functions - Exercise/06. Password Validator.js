function passwordValidator(password) {
    function validateLength(str) {
        if (str.length >= 6 && str.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function validateLettersDigits(str) {
        for (let char of str) {
            let charCode = char.charCodeAt(0);

            if (!(charCode >= 48 && charCode <= 57) && !(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122)) {
                return false;
            }
        }

        return true;
    }

    function validateMinDigits(str) {
        let count = 0;

        for (let char of str) {
            let charCode = char.charCodeAt(0);

            if (charCode >= 48 && charCode <= 57) {
                count++;
            }
        }

        return count >= 2;
    }

    let validLength = validateLength(password);
    let validLettersDigits = validateLettersDigits(password);
    let validMinDigits = validateMinDigits(password);

    if (validLength && validLettersDigits && validMinDigits) {
        console.log('Password is valid');
    }

    if (!validLength) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (!validLettersDigits) {
        console.log('Password must consist only of letters and digits');
    }

    if (!validMinDigits) {
        console.log('Password must have at least 2 digits');
    }
}

passwordValidator('Pa$s$s');