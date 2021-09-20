function rounding(number, persicion) {
    if(persicion > 15) {
        persicion = 15;
    }

    console.log(`${parseFloat(number.toFixed(persicion))}`);
}