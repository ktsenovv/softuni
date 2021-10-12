function stringLength(param1, param2, param3) {
    let sumLength = param1.length + param2.length + param3.length;
    let averageLenght = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLenght);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');