function mergeArrays(firstArray, secondArray) {
    let thirdArray = [];

    for (let i = 0; i < firstArray.length; i++) {
        let num = 0;

        if (i % 2 === 0) {
            num = Number(firstArray[i]) + Number(secondArray[i]);
        } else {
            num = firstArray[i] + secondArray[i];
        }
        thirdArray.push(num)
    }
    console.log(thirdArray.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);