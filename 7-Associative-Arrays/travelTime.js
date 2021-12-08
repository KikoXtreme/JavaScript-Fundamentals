function travelTime(array) {
    let destinations = {};

    for (let line of array) {
        let [country, city, cost] = line.split(' > ');

        if (!Object.keys(destinations).includes(country)) {
            destinations[country] = {};
        }

        if (!Object.keys(destinations[country]).includes(city)) {
            destinations[country][city] = Number(cost);
        }

        if (Number(cost) < destinations[country][city]) {
            destinations[country][city] = Number(cost);
        }
    }

    let sortedCountries = Object.entries(destinations).sort((a, b) => a[0].localeCompare(b[0]));
        // || Object.values(a[1]).reduce((x, y) => x + y) - Object.values(b[1]).reduce((x, y) => x + y));

    for (let [country, city] of sortedCountries) {
        let townsAsArray = Object.entries(city).map(x => `${x[0]} -> ${x[1]}`);

        console.log(`${country} -> ${townsAsArray.join(' ')}`);
    }
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);