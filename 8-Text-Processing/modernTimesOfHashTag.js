function modernTimesOfHashTag(string) {
    let words = string.split(' ');
    let isLetter = false;

    for (let word of words) {

        if (word.startsWith('#') && word.length > 1) {
            isLetter = true;
            word = word.substring(1);

            for (let letters of word) {
                let code = letters.charCodeAt();

                if (code < 65 || code > 90 && code < 97 || code > 122) {
                    isLetter = false;
                    break;
                }
            }
            if (isLetter) {
                console.log(word);
            }
        }
    }
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');