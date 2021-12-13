function pascalCaseSplitter(string) {
    let result = string[0];
    let lowerStr = string.toLocaleLowerCase();

    for (let i = 1; i < string.length; i++) {

        if (string[i] !== lowerStr[i]) {
            result += ', ';
        }
        result += string[i];
    }
    console.log(result);
}

// function pascalCaseSplitter(string) {
//     let result = [];
//     let lowerStr = string.toLocaleLowerCase();
//     let words = '';

//     for (let i = 0; i < string.length; i++) {

//         if (string[i] !== lowerStr[i]) {

//             if (words.length > 0) {
//                 result.push(words);
//             }
//             words = string[i];
//         } else {
//             words += string[i];
//         }
//     }
//     if (words.length > 0) {
//         result.push(words);
//     }
//     console.log(result.join(', '));
// }

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');