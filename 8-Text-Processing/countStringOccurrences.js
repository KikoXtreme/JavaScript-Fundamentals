function countStringOccurrences(string, word) {
    let splitWords = string.split(' ');
    let counter = 0;

    for (let line of splitWords) {

        if (line === word) {
            counter++;
        }
    }
    console.log(counter);
}

countStringOccurrences("This is a word and it also is a sentence", "is");

// function countStringOccurrences(string, word) {
//     console.log(string.split(' ').filter(x => x === word).length);
// }