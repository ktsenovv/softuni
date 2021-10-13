function previousDay(year, month, day) {
    const date = new Date(`${year}-${month}-${day}`);
    date.setDate(day - 1);

    const y = date.getFullYear();
    const m = date.getMonth();
    const d = date.getDate();

    console.log(`${y}-${m + 1}-${d}`);
}

previousDay(2016, 9, 30);
console.log();
previousDay(2016, 10, 1);