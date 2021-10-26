function evenAndOddSubtraction(array) {
    let sumEven = 0;
    let sumOdd = 0;
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];

        if (currentNumber % 2 === 0) {
            sumEven += currentNumber;
        } else {
            sumOdd += currentNumber;
        }
    }

    total = sumEven - sumOdd;
    console.log(total);
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
// evenAndOddSubtraction([3,5,7,9]);
// evenAndOddSubtraction([2,4,6,8,10]);