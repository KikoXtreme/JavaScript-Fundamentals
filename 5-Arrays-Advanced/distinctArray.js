function distinctArray(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];

        if (!result.includes(currentNum)) {
            result.push(currentNum)
        }
    }
    console.log(result.join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);