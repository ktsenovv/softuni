function employees(employeesList) {
    for (let employee of employeesList) {
        let employeeData = {
            name: employee,
            pNumber: employee.length
        };

        console.log(`Name: ${employeeData.name} -- Personal Number: ${employeeData.pNumber}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);