function problemThree(array) {
    let store = {};
    let total = 0;

    while (array[0] !== 'Complete') {
        let [command, quantity, food] = array.shift().split(' ');
        quantity = Number(quantity);

        if (command === 'Receive') {
            if (quantity > 0) {

                if (!Object.keys(store).includes(food)) {
                    store[food] = {
                        quantity,
                    }
                } else {
                    store[food].quantity += quantity;
                }
            }

        } else if (command === 'Sell') {

            if (!Object.keys(store).includes(food)) {
                console.log(`You do not have any ${food}.`);
            } else {
                store[food].quantity -= quantity;
                console.log(`You sold ${quantity} ${food}.`);
                total += quantity;

                if (store[food].quantity <= 0) {
                    delete store[food];
                }
            }
        }
    }
    let sorted = Object.entries(store).sort((a, b) => {
        let nameA = a[0];
        let nameB = b[0];

        return nameA.localeCompare(nameB);
    });

    for (let line of sorted) {
        console.log(`${line[0]}: ${line[1].quantity}`);
    }
    console.log(`All sold: ${total} goods`);
}

problemThree([
    'Receive 105 cookies',
    'Receive 10 donuts',
    'Sell 10 donuts',
    'Sell 1 bread',
    'Complete'
]);
console.log('---');
problemThree([
    'Receive 10 muffins',
    'Receive 23 bagels',
    'Sell 5 muffins',
    'Sell 10 bagels',
    'Complete'
]);

// function problemThree(array) {
//     let store = {};
//     let total = 0;

//     while (array[0] !== 'Complete') {
//         let [command, quantity, food] = array.shift().split(' ');
//         quantity = Number(quantity);

//         if (command === 'Receive') {
//             if (quantity >= 0) {

//                 if (!Object.keys(store).includes(food)) {
//                     store[food] = {
//                         quantity,
//                     }
//                 } else {
//                     store[food].quantity += quantity;
//                 }
//             }

//         } else if (command === 'Sell') {

//             if (!Object.keys(store).includes(food)) {
//                 console.log(`You do not have any ${food}.`);
//             } else {
//                 if (store[food].quantity < quantity) {
//                     console.log(`There aren't enough ${store[food]}. You sold the last ${store[food].quantity} of them.`);
//                     store[food].quantity -= quantity;
//                     delete store[food];
//                 } else {
//                     console.log(`You sold ${quantity} ${food}.`);
//                     store[food].quantity -= quantity;
//                     total += quantity;
//                 }

//                 if (store[food].quantity <= 0) {
//                     delete store[food];
//                 }
//             }
//         }
//     }
//     let sorted = Object.entries(store).sort((a, b) => {
//         let nameA = a[0];
//         let nameB = b[0];

//         return nameA.localeCompare(nameB);
//     });

//     for (let line of sorted) {

//         console.log(`${line[0]}: ${line[1].quantity}`);
//     }
//     console.log(`All sold: ${total} goods`);
// }

// problemThree([
//     'Receive 105 cookies',
//     'Receive 10 donuts',
//     'Sell 10 donuts',
//     'Sell 1 bread',
//     'Complete'
// ]);
// console.log('---');
// problemThree([
//     'Receive 10 muffins',
//     'Receive 23 bagels',
//     'Sell 5 muffins',
//     'Sell 10 bagels',
//     'Complete'
// ]);