function listProcessor(input) {
    let commandProcessor = (function () {
        let list = [];
        return {
            add: (str) => list.push(str),
            remove: (str) => list = list.filter(x => x != str),
            print: () => console.log(list.join(','))
        }
    })();
 
    for (let line of input) {
        let [command, str] = line.split(' ');
        commandProcessor[command](str);
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);

console.log();

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);