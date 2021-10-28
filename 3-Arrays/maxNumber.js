function maxNumber(array) {
    let topIntereg = [];

    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];
        let isTop = true;

        for (let j = i + 1; j < array.length; j++) {
            let nextNum = array[j];

            if (nextNum >= currentNumber) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            topIntereg.push(currentNumber);
        }
    }
    console.log(topIntereg.join(' '));
}

maxNumber([1, 4, 3, 2]);