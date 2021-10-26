function equalSums(array) {
    let hasFound = false;

    for (let i = 0; i < array.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let leftIndex = 0; leftIndex < i; leftIndex++) {
            let currentNumber = array[leftIndex];
            leftSum += currentNumber;
        }

        for (let rightIndex = i + 1; rightIndex < array.length; rightIndex++) {
            let currentNumber = array[rightIndex];
            rightSum += currentNumber;

        }
        if (leftSum === rightSum) {
            console.log(i);
            hasFound = true;
            break;
        }
    }
    if (hasFound === false) {
        console.log('no');
    }
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);