function convertToJSON(name, lastName, hairColor) {
    let obj = {
        name,
        lastName,
        hairColor
    };

    let jsonFile = JSON.stringify(obj);
    console.log(jsonFile)
}

convertToJSON('George', 'Jones', 'Brown');