function storeProvision(currentStock, newProducts) {
    let store = [];

    for (let i = 0; i < currentStock.length - 1; i += 2) {
        let currentProduct = currentStock[i];
        let quantity = Number(currentStock[i + 1]);

        let productObject = {
            currentProduct,
            quantity,
        }
        store.push(productObject);
    }

    for (let i = 0; i < newProducts.length - 1; i += 2) {
        let currentProduct = newProducts[i];
        let quantity = Number(newProducts[i + 1]);

        let productObject = {
            currentProduct,
            quantity,
        }

        let indexOfProduct = store.findIndex(x => x.currentProduct === currentProduct);

        if (indexOfProduct === -1) {
            store.push(productObject);
        } else {
            store[indexOfProduct].quantity += quantity;
        }
    }

    for (let object of store) {
        console.log(`${object.currentProduct} -> ${object.quantity}`);
    }
}

storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);