function tickets(arr, sortBy) {
    var Ticket = /** @class */ (function () {
        function Ticket(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
        return Ticket;
    }());
    var data = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var line = arr_1[_i];
        var _a = line.split('|'), destination = _a[0], price = _a[1], status_1 = _a[2];
        var ticket = new Ticket(destination, Number(price), status_1);
        data.push(ticket);
    }
    var sortFunctions = {
        'destination': function () { return data.sort(function (a, b) { return a.destination.localeCompare(b.destination); }); },
        'price': function () { return data.sort(function (a, b) { return a.price - b.price; }); },
        'status': function () { return data.sort(function (a, b) { return a.status.localeCompare(b.status); }); }
    };
    if (sortFunctions[sortBy]) {
        console.log(sortFunctions[sortBy]());
    }
    else {
        console.log('Invalid sort parameter');
    }
}
console.log('- Sort By: Destination -');
tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination');
console.log('- Sort By: Price -');
tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'price');
console.log('- Sort By: Status -');
tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'status');
