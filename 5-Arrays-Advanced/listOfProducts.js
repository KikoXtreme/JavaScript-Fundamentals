function listOfProducts(array) {
    array.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < array.length; i++) {
        let currentFruit = array[i];
        console.log(`${i + 1}.${currentFruit}`);
    }
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);

// function listOfProducts(array) {
//     array.sort();

//     for (let i = 0; i < array.length; i++) {
//         let currentFruit = array[i];
//         console.log(`${i + 1}.${currentFruit}`);
//     }
// }

// listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);