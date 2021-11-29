function addressBookTask(array) {
    let addressBook = {};

    for (let line of array) {
        let tokens = line.split(':');
        let name = tokens[0];
        let address = tokens[1];
        addressBook[name] = address;
    }
    let sortedEntries = Object.entries(addressBook);
    sortedEntries.sort((a, b) => a[0].localeCompare(b[0]));

    for (let key of sortedEntries) {
        console.log(`${key[0]} -> ${key[1]}`);
    }
}

addressBookTask(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);