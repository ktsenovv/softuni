function extractEmails(input) {
    let pattern = /(^|(?<=\s))(([a-zA-Z0-9]+)([\.\-_]?)([A-Za-z0-9]+)(@)([a-zA-Z]+([\.\-_][A-Za-z]+)+))(\b|(?=\s))/g;
    let result = [];

    let match = pattern.exec(input);

    while (match != null) {
        result.push(match[0]);

        match = pattern.exec(input);
    }

    console.log(result.join('\n'));
}

extractEmails('Please contact us at: support@github.com.');
console.log('');
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');
console.log('');
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.');