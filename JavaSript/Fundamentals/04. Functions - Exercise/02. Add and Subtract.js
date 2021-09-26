function addSubtract(numOne, numTwo, numThree) {
    function sum(numOne, numTwo) {
        return numOne + numTwo;
    }

    function subtract(numOne, numTwo, numThree) {
        return sum(numOne, numTwo) - numThree;
    }

    console.log(subtract(numOne, numTwo, numThree));
}

addSubtract(42, 58, 100);