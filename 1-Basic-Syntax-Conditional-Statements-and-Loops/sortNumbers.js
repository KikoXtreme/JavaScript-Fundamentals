function sortNumbers(firstNum, secondNum, thirdNum) {

    if (firstNum > secondNum && firstNum > thirdNum) {
        if (secondNum > thirdNum) {
            console.log(firstNum);
            console.log(secondNum);
            console.log(thirdNum);
        } else {
            console.log(firstNum);
            console.log(thirdNum);
            console.log(secondNum);
        }
    } else if (secondNum > firstNum && secondNum > thirdNum) {
        if (firstNum > thirdNum) {
            console.log(secondNum);
            console.log(firstNum);
            console.log(thirdNum);
        } else {
            console.log(secondNum);
            console.log(thirdNum);
            console.log(firstNum);
        }
    } else if (thirdNum > firstNum && thirdNum > secondNum) {
        if (firstNum > secondNum) {
            console.log(thirdNum);
            console.log(firstNum);
            console.log(secondNum);
        } else {
            console.log(thirdNum);
            console.log(secondNum);
            console.log(firstNum);
        }
    }
}

sortNumbers(2, 1, 3,);
sortNumbers(4, 2, 1,);