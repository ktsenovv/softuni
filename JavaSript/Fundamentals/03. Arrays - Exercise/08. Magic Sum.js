function magicSum(arr, sum) {
    sumArray = [];

    for (let i = 0; i < arr.length; i++) {
        let curNum = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let tempSum = arr[i] + arr[j];
            
            if(tempSum == sum && arr[j]) {
                console.log(`${arr[i]} ${arr[j]}`);
            }
        }
    }
}

magicSum([1, 2, 3, 4, 5, 6], 6);