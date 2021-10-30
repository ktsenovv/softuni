function tickets(arr, sortBy) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    const data = [];
    for (let line of arr) {
        let [destination, price, status] = line.split('|');
        let ticket = new Ticket(destination, price, status);
        data.push(ticket);
    }

    switch (sortBy) {
        case 'destination': data.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price': data.sort((a, b) => a.price - b.price);
            break;
        case 'status': data.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }

    return data;
};

tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination');