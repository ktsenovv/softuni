function arrayModifier(input) {
    let inputArr = input.shift().split(' ').map(Number);
    let betterInput = input.slice(0, input.indexOf('end'));
 
    for (const line of betterInput) {
       let [command, index, index2] = line.split(' ');
       index = Number(index);
       index2 = Number(index2);
 
       switch (command) {
          case 'swap':
             let el1 = inputArr[index];
             let el2 = inputArr[index2];
 
             inputArr[index] = el2;
             inputArr[index2] = el1;
             break;
 
          case 'multiply':
             inputArr[index] *= inputArr[index2]
             break;
 
          case 'decrease':
             for (let i = 0; i < inputArr.length; i++) {
                inputArr[i] -= 1;
             }
             break;
       }
    }
    console.log(inputArr.join(', '));
 }

 arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]
  );