function thePianist(array) {
    let catalog = {};
    let n = Number(array.shift());

    for (let i = 0; i < n; i++) {
        let [piece, composer, key] = array.shift().split('|');
        catalog[piece] = {
            composer,
            key,
        };
    }

    while (array[0] !== 'Stop') {
        let line = array.shift().split('|');
        let command = line[0];
        let piece = line[1];

        if (command === 'Add') {
            if (catalog[piece] !== undefined) {
                console.log(`${piece} is already in the collection!`)
            } else {
                catalog[piece] = {
                    composer: line[2],
                    key: line[3],
                };
                console.log(`${piece} by ${line[2]} in ${line[3]} added to the collection!`);
            }
        } else if (command === 'Remove') {
            if (catalog[piece] === undefined) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            } else {
                delete catalog[piece];
                console.log(`Successfully removed ${piece}!`);
            }
        } else if (command === 'ChangeKey') {
            if (catalog[piece] === undefined) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            } else {
                catalog[piece].key = line[2];
                console.log(`Changed the key of ${piece} to ${line[2]}!`)
            }
        }
    }

    let sorted = Object.entries(catalog).sort((a, b) => {
        let nameA = a[0];
        let nameB = b[0];

        let composerA = a[1].composer;
        let composerB = b[1].composer;

        return nameA.localeCompare(nameB) || composerA.localeCompare(composerB);
    });

    for (let [piece, composer] of sorted) {
        console.log(`${piece} -> Composer: ${composer.composer}, Key: ${composer.key}`);
    }
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);
console.log('-----')
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);