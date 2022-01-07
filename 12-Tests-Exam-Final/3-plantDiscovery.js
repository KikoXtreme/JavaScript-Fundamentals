function plantDiscovery(array) {
    let catalog = {};
    let n = Number(array.shift());

    for (let i = 0; i < n; i++) {
        let [name, rarity] = array.shift().split('<->');
        catalog[name] = {
            rarity: Number(rarity),
            ratings: [],
            avgRating: 0,
        };
    }

    while (array[0] !== 'Exhibition') {
        let [command, params] = array.shift().split(': ');

        if (command === 'Rate') {
            let [name, rating] = params.split(' - ');
            if (catalog[name] !== undefined) {
                catalog[name].ratings.push(Number(rating));
                let total = 0;
                for (let rating of catalog[name].ratings) {
                    total += rating;
                }
                catalog[name].avgRating = total / catalog[name].ratings.length;
            } else {
                console.log('error');
            }

        } else if (command === 'Update') {
            let [name, rarity] = params.split(' - ');
            if (catalog[name] !== undefined) {
                catalog[name].rarity = Number(rarity);
            } else {
                console.log('error');
            }

        } else if (command === 'Reset') {
            let [name] = params.split(' - ');
            if (catalog[name] !== undefined) {
                catalog[name].ratings.length = 0;
                catalog[name].avgRating = 0;
            } else {
                console.log('error');
            }

        }
    }

    let sorted = Object.entries(catalog).sort((a, b) => {
        let rarityA = a[1].rarity;
        let rarityB = b[1].rarity;

        let avgRatingA = a[1].avgRating;
        let avgRatingB = b[1].avgRating;

        return (rarityB - rarityA) || (avgRatingB - avgRatingA);
    });

    console.log('Plants for the exhibition:');
    for (let [name, plant] of sorted) {
        console.log(`- ${name}; Rarity: ${plant.rarity}; Rating: ${plant.avgRating.toFixed(2)}`);
    }
}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);
console.log('-----');
plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"]);