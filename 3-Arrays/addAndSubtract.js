function addAndSubtract(array) {
    let newArray = [];
    let sumOriginal = 0;
    let sumNew = 0;

    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];
        sumOriginal += currentNumber;

        if (currentNumber % 2 === 0) {
            currentNumber += i;
        } else {
            currentNumber -= i;
        }
        newArray.push(currentNumber);
        sumNew += newArray[i];
    }
    console.log(newArray);
    console.log(sumOriginal);
    console.log(sumNew);
}

addAndSubtract([5, 15, 23, 56, 35]);
// addAndSubtract([-5, 11, 3, 0, 2]);