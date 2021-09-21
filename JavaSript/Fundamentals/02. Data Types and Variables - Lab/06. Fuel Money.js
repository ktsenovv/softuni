function fuelMoney(distance, passenger, fuelPrice) {
    let increaseFuel = passenger * 0.100;
    let fuel = (distance / 100) * (7 + increaseFuel);
    let money = fuel * fuelPrice;

    console.log(`Needed money for that trip is ${money.toFixed(2)}lv.`);
}