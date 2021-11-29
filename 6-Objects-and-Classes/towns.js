function towns(array) {

    for (let townInfo of array) {
        let action = townInfo.split(' | ');
        let town = action[0];
        let latitude = Number(action[1]).toFixed(2);
        let longitude = Number(action[2]).toFixed(2);

        let townData = {
            town,
            latitude,
            longitude
        }
        console.log(townData);
    }
}

towns([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);