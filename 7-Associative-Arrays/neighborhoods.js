function neighborhoods(array) {
    let map = new Map();
    let neighborhood = array.shift().split(', ');

    for (let addressName of neighborhood) {
        map.set(addressName, []);
    }

    for (let i = 0; i < array.length; i++) {
        let currentaddress = array[i].split(' - ');
        let address = currentaddress[0];
        let person = currentaddress[1]

        if (neighborhood.includes(address)) {
            map.get(address).push(person);
        }
    }

    let sorted = Array.from(map).sort((a, b) => b[1].length - a[1].length);

    for (let [neighborhoodName, persons] of sorted) {
        console.log(`${neighborhoodName}: ${persons.length}`);

        for (let i = 0; i < persons.length; i++) {
            console.log(`--${persons[i]}`);
        }
    }
}

neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
);