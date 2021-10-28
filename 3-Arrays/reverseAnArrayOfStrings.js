function reverseAnArrayOfStrings(array) {
    let result = [];

    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }
    console.log(result.join(' '));
}

reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']);

// function reverseAnArrayOfStrings(array) {
//     let result = '';

//     for (let i = array.length - 1; i >= 0; i--) {
//         result += (array[i]) + ' ';
//     }
//     console.log(result);
// }

// reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']);