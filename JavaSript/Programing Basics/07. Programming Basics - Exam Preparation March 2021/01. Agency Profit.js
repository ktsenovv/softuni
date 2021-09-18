function agencyProfit(input) {
    let avioName = input[0];
    let numAdultTickets = Number(input[1]);
    let numKidTickets = Number(input[2]);
    let ticketPriceAdult = Number(input[3]);
    let serviceFee = Number(input[4]);

    let ticketPriceKid = ticketPriceAdult - (ticketPriceAdult * 0.70) + serviceFee;
    ticketPriceAdult += serviceFee;

    let totalTicketsPrice = (numKidTickets * ticketPriceKid) + (numAdultTickets * ticketPriceAdult);
    
    console.log(`The profit of your agency from ${avioName} tickets is ${(totalTicketsPrice * 0.20).toFixed(2)} lv.`);
}