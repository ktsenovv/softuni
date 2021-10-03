function companyUsers(input) {
    list = {};

    for (let line of input) {
        let [company, employeeID] = line.split(' -> ');

        if (!list.hasOwnProperty(company)) {
            list[company] = [];
        }

        if (!list[company].includes(employeeID)) {
            list[company].push(employeeID);
        }
    }

    sortedCompanies = Object.keys(list).sort((a, b) => a.localeCompare(b));

    for (let company of sortedCompanies) {
        let result = '';
        result += company + '';

        for (let employeeID of list[company]) {
            result += `\n-- ${employeeID}`;
        }

        console.log(result);
    }
}

companyUsers([
'SoftUni -> AA12345',
'SoftUni -> BB12345',
'Microsoft -> CC12345',
'HP -> BB12345'
]);