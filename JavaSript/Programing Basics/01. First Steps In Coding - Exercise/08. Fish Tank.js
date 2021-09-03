function fishTank(input) {
    let lengthCM = Number(input[0]);
    let widthCM = Number(input[1]);
    let heightCM = Number(input[2]);
    let percent = Number(input[3]);

    let capacity = lengthCM * widthCM * heightCM;
    let capacityTL = capacity * 0.001;
    let percentC = percent * 0.01;

    let total = capacityTL * (1 - percentC);
    console.log(total);
}