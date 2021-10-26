function breakfastRobot() {
    const supply = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };
    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    function commandProcessor(input) {
        const [command, recipeIngredient, quantity] = input.split(' ');

        if (command === 'restock') {
            supply[recipeIngredient] += Number(quantity);
            return 'Success';
        } else if (command === 'prepare') {
            function cookMeal(recipe, quantity) {
                for (const ingredient in recipes[recipe]) {
                    const neededIngredient = recipes[recipe][ingredient] * quantity;
                    if (neededIngredient > supply[ingredient]) {
                        return `Error: not enough ${ingredient} in stock`;
                    }
                }

                for (const ingredient in recipes[recipe]) {
                    const neededIngredient = recipes[recipe][ingredient] * quantity;
                    supply[ingredient] -= neededIngredient;
                }

                return 'Success';
            }
            return cookMeal(recipeIngredient, quantity);
        } else {
            return Object.keys(supply)
                .map(key => `${key}=${supply[key]}`)
                .join(' ');
        }
    }

    return commandProcessor;
}

let manager = breakfastRobot();/*
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10")); // Success
console.log(manager("restock flavour 10")); // Success
console.log(manager("prepare apple 1")); // Success
console.log(manager("restock fat 10")); // Success
console.log(manager("prepare burger 1")); // Success
console.log(manager("report")); // protein=0 carbohydrate=4 fat=3 flavour=55*/

console.log(manager("prepare turkey 1")); // Error: not enough protein in stock
console.log(manager("restock protein 10")); // Success
console.log(manager("prepare turkey 1")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10")); // Success
console.log(manager("prepare turkey 1")); // Error: not enough fat in stock
console.log(manager("restock fat 10")); // Success
console.log(manager("prepare turkey 1")); // Error: not enough flavour in stock
console.log(manager("restock flavour 10")); // Success
console.log(manager("prepare turkey 1")); // Success
console.log(manager("report")); // protein=0 carbohydrate=0 fat=0 flavour=0