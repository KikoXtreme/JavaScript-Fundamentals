function replaceRepeatingChars(string) {
    let token = string.split('');
    let result = [];

    for (let i = 0; i < token.length; i++) {

        if (token[i] !== token[i + 1]) {
            result.push(token[i])
        }
    }
    console.log(result.join(''));
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');