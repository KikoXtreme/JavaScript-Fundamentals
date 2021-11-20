function searchForANumber(firstArray, secondArray) {
    let numsTaken = secondArray[0];
    let numsDeleted = secondArray[1];
    let numLookedFor = secondArray[2];
    let counter = 0;

    let resultArray = firstArray.splice(0, numsTaken);

    for (let i = 0; i < numsDeleted; i++) {
        resultArray.shift()
    }

    for (let i = 0; i < resultArray.length; i++) {
        currentNum = resultArray[i];

        if (currentNum === numLookedFor) {
            counter++;
        }
    }
    console.log(`Number ${numLookedFor} occurs ${counter} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);