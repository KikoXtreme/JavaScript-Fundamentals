function revealWords(words, string) {
    words = words.split(', ');

    for (let word of words) {
        let match = '*'.repeat(word.length);
        string = string.replace(match, word);
    }
    console.log(string);
}

revealWords('great', 'softuni is ***** place for learning new programming languages');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');


// function revealWords(words, string) {
//     string = ` ${string} `;
//     words = words.split(', ');

//     for (let word of words) {
//         let match = ` ${'*'.repeat(word.length)} `;
//         word = ` ${word} `
//         string = string.replace(match, word);
//     }
//     console.log(string);
// }


// function revealWords(words, string) {
//     let word = words.split(', ');
//     let sentence = string.split(' ');

//     for (let eachWord of word) {

//         for (let i = 0; i < sentence.length; i++) {

//             if ('*'.repeat(eachWord.length) === sentence[i]) {
//                 sentence[i] = eachWord;
//             }
//         }
//     }
//     console.log(sentence.join(' '));
// }