function pieceOfPie(arr, firstPie, lastPie) {
    const indexFirstPie = arr.indexOf(firstPie);
    const indexLastPie = arr.indexOf(lastPie);

    return arr.slice(indexFirstPie, indexLastPie + 1);
}

console.log(pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'));

console.log();

console.log(pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'));