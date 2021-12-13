function censoredWords(string, word) {
    let result = string.split(word).join('*'.repeat(word.length));
    console.log(result);
}

censoredWords("A small sentence with some words", "small");