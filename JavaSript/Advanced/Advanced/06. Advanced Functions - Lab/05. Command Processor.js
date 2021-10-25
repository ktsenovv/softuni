function commandProcessor() {
    let result = '';

    return {
        append: (str) => result += str,
        removeStart: (num) => result = result.slice(num),
        removeEnd: (num) => result = result.slice(0, -num),
        print: () => console.log(result)
    }
}

let firstZeroTest = commandProcessor();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

console.log();

let secondZeroTest = commandProcessor();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();