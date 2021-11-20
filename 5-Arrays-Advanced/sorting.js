function sorting(array) {
    let result = [];
    let arrayL = array.length

    for (let i = 0; i < arrayL; i++) {
        let number = 0;
        if (i % 2 === 0) {
            number = Math.max(...array);
        } else {
            number = Math.min(...array);
        }
        result.push(number);
        array.splice(array.indexOf(number), 1);
    }
    console.log(result.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);