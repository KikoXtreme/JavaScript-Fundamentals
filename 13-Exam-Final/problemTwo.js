function problemTwo(array) {
    let pattern = /\|([A-Z]{4,})\|:#([A-Za-z]+ [A-Za-z]+)#/;
    let n = array.shift();

    let result = [];

    for (let i = 0; i < n; i++) {

        let match = pattern.exec(array[i]);
        result.push(match);
    }

    for (let line of result) {

        if (line === null) {
            console.log('Access denied!');
        } else {
            console.log(`${line[1]}, The ${line[2]}`);
            console.log(`>> Strength: ${line[1].length}`);
            console.log(`>> Armor: ${line[2].length}`);
        }
    }
}

problemTwo(['3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#'
]);
console.log('-----');
problemTwo(['3',
    '|STEFAN|:#H1gh Overseer#',
    '|IVAN|:#Master detective#',
    '|KARL|: #Marketing lead#'
]);

// function problemTwo(array) {
//     let pattern = /\|([A-Z]{4,})\|:#([A-Za-z]+ [A-Za-z]+)#/g;
//     let n = array.shift();

//     let result = [];

//     for (let i = 0; i < n; i++) {

//         let match = array[i].match(pattern);

//         match = pattern.exec(match);
//         result.push(match);
//     }

//     for (let line of result) {

//         if (line === null) {
//             console.log('Access denied!');
//         } else {
//             console.log(`${line[1]}, The ${line[2]}`);
//             console.log(`>> Strength: ${line[1].length}`);
//             console.log(`>> Armor: ${line[2].length}`);
//         }
//     }
// }