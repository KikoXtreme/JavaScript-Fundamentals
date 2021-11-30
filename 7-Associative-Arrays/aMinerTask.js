function aMinerTask(array) {
    let resorcesAll = {};

    for (let i = 0; i < array.length; i += 2) {
        let resource = array[i];
        let quantity = Number(array[i + 1]);

        if (resource in resorcesAll) {
            resorcesAll[resource] += quantity;
        } else {
            resorcesAll[resource] = quantity;
        }
    }

    for (let [resorce, quantity] of Object.entries(resorcesAll)) {
        console.log(`${resorce} -> ${quantity}`);
    }
}

aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);
console.log('---')
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);