function oddAndEvenSum(num) {
    let numAsStr = num.toString();
    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 0; i < numAsStr.length; i++) {
        let currentNum = Number(numAsStr[i]);

        if (currentNum % 2 === 0) {
            sumEven += currentNum;
        } else {
            sumOdd += currentNum;
        }
    }
    let result = `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;
    return result;
}

result = oddAndEvenSum(1000435);
console.log(result);
result = oddAndEvenSum(3495892137259234);
console.log(result);