function tickets(arr: string[], sortBy: string) {
    class Ticket {
        destination: string;
        price: number;
        status: string;

        constructor(destination: string, price: number, status: string) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const data: Ticket[] = [];
    for (let line of arr) {
        const [destination, price, status] = line.split('|');
        const ticket = new Ticket(destination, Number(price), status);
        data.push(ticket);
    }

    const sortFunctions: { [key: string]: () => Ticket[] } = {
        'destination': () => data.sort((a, b) => a.destination.localeCompare(b.destination)),
        'price': () => data.sort((a, b) => a.price - b.price),
        'status': () => data.sort((a, b) => a.status.localeCompare(b.status))
    };

    if (sortFunctions[sortBy]) {
        console.log(sortFunctions[sortBy]());
    } else {
        console.log('Invalid sort parameter')
    }
}

console.log('- Sort By: Destination -');

tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
],
    'destination'
);

console.log('- Sort By: Price -');

tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
],
    'price'
);

console.log('- Sort By: Status -');

tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
],
    'status'
);