function companyUsers(array) {
    let companyObject = {};

    for (let line of array) {
        let [company, id] = line.split(' -> ');

        if (!Object.keys(companyObject).includes(company)) {
            companyObject[company] = [];
        }

        if (!Object.keys(companyObject[company]).includes(id)) {
            companyObject[company][id] = id
            companyObject[company].push(id);
        }
    }

    let sorted = Object.entries(companyObject).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [company, id] of sorted) {
        console.log(company);

        for (let line of id) {
            console.log(`-- ${line}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);