function negativePositiveNums(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];

        if (currentNumber < 0) {
            result.unshift(currentNumber);
        } else {
            result.push(currentNumber);
        }
    }

    for (let j = 0; j < result.length; j++) {
        console.log(result[j]);
    }
}

negativePositiveNums([7, -2, 8, 9]);

// function negativePositiveNums(array) {
//     let result = [];

//     for (let i = 0; i < array.length; i++) {
//         let currentNumber = array[i];

//         if (currentNumber < 0) {
//             result.unshift(currentNumber);
//         } else {
//             result.push(currentNumber);
//         }
//     }
//     console.log(result.join('\n'));
// }

// negativePositiveNums([7, -2, 8, 9]);