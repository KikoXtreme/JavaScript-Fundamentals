function smallestTwoNumbers(array) {
    let result = array.sort((a, b) => a - b);

    console.log(array[0], array[1]);
}

smallestTwoNumbers([30, 15, 50, 5]);

// function smallestTwoNumbers(array) {
//     let result = array.sort((a, b) => a - b).slice(0, 2).join(' ');
    
//     console.log(result);
// }

// smallestTwoNumbers([30, 15, 50, 5]);