function stringSubstring(word, text) {
    word = word.toLowerCase();
    text = text.toLowerCase();
    token = text.split(' ');

    for (el of token) {

        if (el === word) {
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`)
}

stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');