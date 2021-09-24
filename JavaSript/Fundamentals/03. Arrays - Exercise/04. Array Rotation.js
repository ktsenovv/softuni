function arrayRotation(input, rotations) {
    for (let i = 0; i < rotations % input.length; i++) {
        let first = input.shift();
        input[input.length] = first;
    }

    console.log(input.join(' '));
}

arrayRotation([32, 21, 61, 1], 4);