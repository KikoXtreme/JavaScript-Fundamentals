function emojiDetector(array) {
    let emojiPattern = /(::|\*\*)([A-Z][a-z]{2,})(\1)/g;
    let thresholdPatterns = /\d/g;

    let threshold = 1;
    let coolEmojis = [];

    let digits = array[0].match(thresholdPatterns).map(Number);

    for (let x of digits) {
        threshold *= x;
    }

    let emojis = array[0].match(emojiPattern);

    for (let emoji of emojis) {
        let chars = emoji.slice(2, -2);
        let coolness = 0;
        for (let char of chars) {
            coolness += char.charCodeAt(0);
        }

        if (coolness >= threshold) {
            coolEmojis.push(emoji);
        }
    }
    console.log(`Cool threshold: ${threshold}`);
    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);

    for (let line of coolEmojis) {
        console.log(line)
    }
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);