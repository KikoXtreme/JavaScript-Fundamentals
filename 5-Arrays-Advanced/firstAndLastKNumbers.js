function firstAndLastKNumbers(array) {
    let k = array.shift();
    let firstLine = array.slice(0, k);
    let secondLine = array.slice(array.length - k, array.length);

    console.log(firstLine.join(' '));
    console.log(secondLine.join(' '));
}

firstAndLastKNumbers([2, 7, 8, 9]);