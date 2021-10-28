function reverseAnArrayOfNumbers(num, array) {
    let result = [];

    for (let i = num - 1; i >= 0; i--) {
        result += (array[i]) + ' ';
    }
    console.log(result);
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);

// function reverseAnArrayOfNumbers(num, array) {
//     let newArray = [];

//     for (let i = 0; i <= num - 1; i++) {
//         newArray.push(array[i]);
//     }
//     let result = [];
//     for (let j = newArray.length - 1; j >= 0; j--) {
//         result.push(newArray[j]);
//     }
//     console.log(result.join(' '));
// }

// reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);