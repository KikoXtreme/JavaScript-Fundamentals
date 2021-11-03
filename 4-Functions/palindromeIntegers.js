function palindromeIntegers(array) {

    for (let digit of array) {
        let numAsStr = digit.toString();
        let reversedNumAsStr = numAsStr.split('').reverse().join('');

        if (numAsStr === reversedNumAsStr) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

palindromeIntegers([123, 323, 421, 121]);

// function palindromeIntegers(array) {

//     for (let i = 0; i < array.length; i++) {
//         let currentNum = array[i];
//         let numAsStr = currentNum.toString();
//         let reversedNumAsStr = numAsStr.split('').reverse().join('');

//         if (numAsStr === reversedNumAsStr) {
//             console.log(true);
//         } else {
//             console.log(false);
//         }
//     }
// }

// palindromeIntegers([123, 323, 421, 121]);