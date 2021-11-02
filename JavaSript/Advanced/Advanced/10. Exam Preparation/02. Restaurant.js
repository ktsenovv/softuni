class Restaurant {
    constructor(budget) {
        this.budgetMoney = Number(budget);
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        for (let line of products) {
            let [product, quantity, price] = line.split(' ');
            price = Number(price);
            quantity = Number(quantity);

            if (price <= this.budgetMoney) {
                if (this.stockProducts.hasOwnProperty(product) == false) {
                    this.stockProducts[product] = quantity;
                } else {
                    this.stockProducts[product] += quantity;
                }
                this.stockProducts[product] = quantity;
                this.budgetMoney -= price;
                this.history.push(`Successfully loaded ${quantity} ${product}`);
            } else {
                this.history.push(`There was not enough money to load ${quantity} ${product}`);
            }
        }

        return this.history.join('\n');
    }

    addToMenu(mealName, neededProducts, price) {
        const meal = {
            products: [],
            price: Number(price)
        }

        for (let item of neededProducts) {
            let product = {
                name: item.split(' ')[0],
                quantity: item.split(' ')[1]
            };
            meal.products.push(product);
        }

        if (this.menu.hasOwnProperty(mealName) == false) {
            this.menu[mealName] = meal;
            let mealsCount = Object.keys(this.menu).length;
            let plural = (mealsCount == 1) ? `` : `s`;
            return `Great idea! Now with the ${mealName} we have ${mealsCount} meal${plural} in the menu, other ideas?`;
        } else {
            return `The ${mealName} is already in the our menu, try something different.`
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length == 0) {
            return 'Our menu is not ready yet, please come later...';
        } else {
            let result = [];
            for (let meal in this.menu) {
                result.push(`${meal} - $ ${this.menu[meal].price}`);
            }
            return result.join('\n');
        }
    }

    makeTheOrder(mealName) {
        if (this.menu.hasOwnProperty(mealName) == false) {
            return `There is not ${mealName} yet in our menu, do you want to order something else?`
        } else {
            let meal = this.menu[mealName];
            let price = meal.price;
            let products = meal.products;
            
            for (const product of products) {
                let name = product.name;
                let quantity = product.quantity;
                if (this.stockProducts[name] == undefined || this.stockProducts[name] < quantity) {
                    return `For the time being, we cannot complete your order (${mealName}), we are very sorry...`;
                } else {
                    this.stockProducts[name] -= quantity;
                    this.budgetMoney += price;

                    return `Your order (${mealName}) will be completed in the next 30 minutes and will cost you ${price}.`
                }
            }
        }
    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1', 'Blueberry 500 1500']));
console.log();
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log();
console.log(kitchen.showTheMenu());
console.log();
console.log(kitchen.makeTheOrder('frozenYogurt'));

/*
Successfully loaded 30 Yogurt
Successfully loaded 50 Honey
Successfully loaded 20 Strawberries
Successfully loaded 5 Banana
There was not enough money to load 500 Blueberry

Great idea! Now with the frozenYogurt we have 1 meal in the menu, other ideas?
Great idea! Now with the Pizza we have 2 meals in the menu, other ideas?

frozenYogurt - $ 9.99
Pizza - $ 15.55

Your order (frozenYogurt) will be completed in the next 30 minutes and will cost you 9.99.
*/