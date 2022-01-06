function destinationMapper(string) {
    let pattern = /([=/])([A-Z][A-Za-z]{2,})\1/g;

    let match = pattern.exec(string);
    let travelPoints = 0;
    let result = [];

    while (match !== null) {
        let country = match[2];
        travelPoints += country.length;
        result.push(country);

        match = pattern.exec(string);
    }
    console.log(`Destinations: ${result.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
destinationMapper('ThisIs some InvalidInput');