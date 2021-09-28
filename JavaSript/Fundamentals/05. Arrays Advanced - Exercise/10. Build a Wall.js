function buildAWall(input) {
    let parsedInput = input.map(Number);
    let dailyConcrete = [];
    let totalConcrete = 0;
    let costs = 0;
    let crews = parsedInput.filter(len => len < 30).length;

    while (crews !== 0) {
        let concreteByAllCrews = 0;
        
        for (let i = 0; i < parsedInput.length; i++) {
            if (parsedInput[i] !== 30) {
                parsedInput[i]++;
                concreteByAllCrews += 195;

                if (parsedInput[i] == 30) {
                    crews--;
                }
            }
        }

        totalConcrete += concreteByAllCrews;
        dailyConcrete.push(concreteByAllCrews);
    }

    costs = totalConcrete * 1900;
    console.log(dailyConcrete.join(", "));
    console.log(`${costs} pesos`);
}

buildAWall([17, 22, 17, 19, 17]);