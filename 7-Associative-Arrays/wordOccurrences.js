function wordOccurrences(array) {
    let map = new Map();

    for (let word of array) {
        let wordOccurrence = 1;
        if (map.has(word)) {
            wordOccurrence += map.get(word)
        }
        map.set(word, wordOccurrence);
    }

    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

    for (let [word, times] of sorted) {
        console.log(`${word} -> ${times} times`);
    }
}

wordOccurrences([
    "Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence",
    "And", "finally", "the", "third", "sentence"
]);