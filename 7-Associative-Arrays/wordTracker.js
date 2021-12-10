function wordTracker(array) {
    let vocabulary = array.shift().split(' ');
    // let firstWord = vocabulary[0];
    // let secondWord = vocabulary[1];
    let wordsObject = {};
    // words[firstWord] = 0;
    // words[secondWord] = 0;
    for (let word of vocabulary) {
        wordsObject[word] = 0;
    }

    for (let word of array) {
        if (Object.keys(wordsObject).includes(word)) {
            wordsObject[word]++;
        }
    }
    // [this, 3]
    // [sentence, 2]
    let sortedWords = Object.entries(wordsObject).sort((a,b)=> b[1] - a[1]);
    // for (let el of sortedWords){
    //     console.log(el.join(' - '));
    // }
    for (let [key, value] of sortedWords){
        console.log(`${key} - ${value}`);
    }
}

wordTracker(['this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);