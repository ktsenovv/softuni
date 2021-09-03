function booksList(input) {
    let numPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let numDays = Number(input[2]);

    let totalTimePerBook = numPages / pagesPerHour;
    let hoursNeeded = totalTimePerBook / numDays;

    console.log(hoursNeeded);
}