function pirates(array) {
    let country = {};

    while (array[0] !== 'Sail') {
        let [city, population, gold] = array.shift().split('||');
        population = Number(population);
        gold = Number(gold);

        if (!Object.keys(country).includes(city)) {
            country[city] = {
                population,
                gold,
            }
        } else {
            country[city].population += population;
            country[city].gold += gold;
        }
    }

    let _ = array.shift();

    while (array[0] !== 'End') {
        let line = array.shift().split('=>');
        let command = line[0];
        let city = line[1];

        if (command === 'Plunder') {
            let population = Number(line[2]);
            let gold = Number(line[3]);

            country[city].population -= population;
            country[city].gold -= gold;
            console.log(`${city} plundered! ${gold} gold stolen, ${population} citizens killed.`);

            if ((country[city].population <= 0) || (country[city].gold <= 0)) {
                console.log(`${city} has been wiped off the map!`);
                delete country[city];
            }

        } else if (command === 'Prosper') {
            let gold = Number(line[2]);
            if (gold < 0) {
                console.log('Gold added cannot be a negative number!');
            } else {
                country[city].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${city} now has ${country[city].gold} gold.`);
            }
        }
    }

    let sorted = Object.entries(country).sort((a, b) => {
        let goldA = a[1].gold;
        let goldB = b[1].gold;

        let cityA = a[0];
        let cityB = b[0];

        return (goldB - goldA) || (cityA.localeCompare(cityB));
    });

    console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);

    for (let line of sorted) {

        console.log(`${line[0]} -> Population: ${line[1].population} citizens, Gold: ${line[1].gold} kg`);
    }
}

pirates([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"
]);
console.log('-----');
pirates([
    "Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"
]);