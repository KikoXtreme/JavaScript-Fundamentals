function printAndSum(firstNum, lastNum) {
    let numRow = '';
    let sum = 0;

    for (let i = firstNum; i <= lastNum; i++) {
        numRow += i + ' ';
        sum += i;
    }
    console.log(numRow);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);