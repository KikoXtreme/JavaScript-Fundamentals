function specialNumbers(num) {

    for (let i = 1; i <= num; i++) {
        let numAsStr = i.toString();
        let sum = 0;

        for (let j = 0; j < numAsStr.length; j++) {
            sum += Number(numAsStr[j]);
        }

        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

specialNumbers(15);

// function specialNumbers(num) {

//     for (let i = 1; i <= num; i++) {
//         let sum = 0;
//         let currentNum = i;

//         while (currentNum !== 0) {
//             sum += currentNum % 10;
//             currentNum = parseInt(currentNum / 10);
//         }

//         if (sum === 5 || sum === 7 || sum === 11) {
//             console.log(`${i} -> True`);
//         } else {
//             console.log(`${i} -> False`);
//         }
//     }
// }

// specialNumbers(15);