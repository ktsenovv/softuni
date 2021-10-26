function calculator() {
    return {
        elementOne: '',
        elementTwo: '',
        result: '',
        init(selector1, selector2, resultSelector) {
            elementOne = document.querySelector(selector1);
            elementTwo = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        },
        add() {
            result.value = Number(elementOne.value) + Number(elementTwo.value);
        },
        subtract() {
            result.value = Number(elementOne.value) - Number(elementTwo.value);
        }
    }
}

const calculate = calculator(); 
calculate.init('#num1', '#num2', '#result'); 