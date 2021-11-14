function processOddNumbers(array) {
    let result = array
        .filter((num, i) => i % 2 === 1)
        .map(x => x * 2)
        .reverse()
        .join(' ');

    console.log(result);
}

processOddNumbers([10, 15, 20, 25]);