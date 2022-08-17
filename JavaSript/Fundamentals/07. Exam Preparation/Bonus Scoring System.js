function bonusScoring(input) {
    let studentCount = Number(input.shift());
    let lectures = Number(input.shift());
    let bonus = Number(input.shift());
    let newInput = [];
    let result = 0;
	
    for (let i = 0; i < studentCount; i++) {
        let student = Number(input[i]);
        if (lectures !== 0 && bonus !== -5) {
            let currentBonus = Number(student) / lectures * (5 + bonus);
            newInput.push(currentBonus);
        }
    }
	
    input.sort((a, b) => b - a);
    biggest = input[0];
    newInput.sort((a, b) => b - a);
	
    if (newInput[0] !== undefined) {
        result = newInput[0];
    } else {
       biggest = 0; 
    }
	
    console.log(`Max Bonus: ${Math.ceil(result)}.`);
    console.log(`The student has attended ${biggest} lectures.`);
}

bonusScoring([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]
  );