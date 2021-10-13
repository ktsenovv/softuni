function wordsUppercase(string) {
    let result = string.toUpperCase()
    .match(/\w+/g)
    .join(', ');  
    
    console.log(result);
}

wordsUppercase('Hi, how are you?');
console.log();
wordsUppercase('hello');