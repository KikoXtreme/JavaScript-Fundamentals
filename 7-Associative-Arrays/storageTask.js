function storageTask(array) {
    let map = new Map();

    for (let line of array) {
        let tokens = line.split(' ');
        let product = tokens[0];
        let quantity = Number(tokens[1]);

        if (!map.has(product)) {
            map.set(product, quantity);
        } else {
            let currentQuantity = map.get(product);
            let newQuantity = currentQuantity += quantity;
            map.set(product, newQuantity);
        }
    }

    for (let keyValue of map) {
        console.log(`${keyValue[0]} -> ${keyValue[1]}`)
    }
}

storageTask(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);