function rightPlace(string, char, finalStr) {
    let currentStr = '';

    for (let i = 0; i < string.length; i++) {

        if (string[i] === '_') {
            currentStr += char;
        } else {
            currentStr += string[i];
        }
    }

    if (currentStr === finalStr) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'I', 'Strong');