function nationalCourt(input) {
    let [firstEmployeeEfficiency, secondEmployeeEfficiency, thirdEmployeeEfficiency, peopleCount] = input.map(Number);

    let hour = 0;
    let employeeEfficiency = firstEmployeeEfficiency + secondEmployeeEfficiency + thirdEmployeeEfficiency;

    while (peopleCount > 0) {
        hour++;

        if (hour % 4 !== 0) {
            peopleCount -= employeeEfficiency;
        }
    }

    console.log(`Time needed: ${hour}h.`);
}

nationalCourt(['5', '6', '4', '20']);
nationalCourt(['1', '2', '3', '45']);
nationalCourt(['3', '2', '5', '40']);