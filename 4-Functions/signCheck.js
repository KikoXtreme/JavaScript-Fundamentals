function signCheck(firstNum, secondNum, thirdNum) {
    let result = '';

    if (firstNum > 0 && secondNum > 0) {
        if (thirdNum > 0) {
            result = 'Positive';
        } else {
            result = 'Negative';
        }
    } else if (firstNum > 0 && secondNum < 0) {
        if (thirdNum > 0) {
            result = 'Negative';
        } else {
            result = 'Positive';
        }
    } else if (firstNum < 0 && secondNum > 0) {
        if (thirdNum > 0) {
            result = 'Negative';
        } else {
            result = 'Positive';
        }
    } else if (firstNum < 0 && secondNum < 0) {
        if (thirdNum > 0) {
            result = 'Positive';
        } else {
            result = 'Negative';
        }
    }
    console.log(result);
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);