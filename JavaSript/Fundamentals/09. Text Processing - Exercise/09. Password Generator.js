function passwordGenerator(input) {
    let strOne = input.shift();
    let strTwo = input.shift();
    let word = input.shift();
    let text = strOne + strTwo;
    let result = '';

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    counter = 0;

    for (char of text) {
        if (vowels.includes(char)) {
            result += word[counter].toUpperCase();

            if(counter == word.length - 1) {
                counter = 0;
            } else {
                counter++;
            }
        } else {
            result += char;
        }
    }

    console.log('Your generated password is ' + result.split('').reverse().join(''));
}

passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);
passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);