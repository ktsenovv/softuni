function cinemaTickets(input) {
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;

    while(true) {
        let soldTickets = 0;
        let movie = input.shift();
        
        if(movie == 'Finish') {
            break;
        }

        let capacity = Number(input.shift());

        while(capacity > soldTickets) {
            let ticketType = input.shift();

            if(ticketType == 'End') {
                break;
            }

            switch(ticketType) {
                case 'student': studentTickets++; break;
                case 'standard': standardTickets++; break;
                case 'kid': kidTickets++; break;
            }

            soldTickets++;
        }

        console.log(`${movie} - ${((soldTickets / capacity) * 100).toFixed(2)}% full.`);
    }

    let totalTickets = studentTickets + standardTickets + kidTickets;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentTickets / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTickets / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTickets / totalTickets) * 100).toFixed(2)}% kids tickets.`);
}