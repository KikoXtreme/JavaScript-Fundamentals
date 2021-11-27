function employees(array) {

    for (let employee of array) {
        let employeeData = {
            name: employee,
            personalNumber: employee.length
        };
        console.log(`Name: ${employeeData.name} -- Personal Number: ${employeeData.personalNumber}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);