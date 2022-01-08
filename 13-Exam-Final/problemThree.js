function problemThree(array) {
    let zoo = {};
    let areas = {};

    while (array[0] !== 'EndDay') {
        let [command, tokens] = array.shift().split(': ');
        let [name, food, area] = tokens.split('-');
        food = Number(food);

        if (command === 'Add') {
            if (!Object.keys(zoo).includes(name)) {
                zoo[name] = {
                    food,
                    area,
                }
            } else {
                zoo[name].food += food;
            }

            if (!Object.keys(areas).includes(area)) {    //areas[area] === undefined
                areas[area] = [];
            }

            if (!areas[area].includes(name)) {
                areas[area].push(name)
            }

        } else if (command === 'Feed') {

            if (Object.keys(zoo).includes(name)) {
                zoo[name].food -= food;

                if (zoo[name].food <= 0) {

                    let entries = Object.entries(areas);
                    for (let [_, detils] of entries) {
                        if (detils.includes(name)) {
                            let index = detils.indexOf(name);
                            detils.splice(index, 1);
                        }
                    }
                    console.log(`${name} was successfully fed`);
                    delete zoo[name];
                }
            }
        }
    }
    console.log(zoo)
    let sorted = Object.entries(zoo).sort((a, b) => {
        let foodA = a[1].food;
        let foodB = b[1].food;

        let nameA = a[0];
        let nameB = b[0];

        return (foodB - foodA) || (nameA.localeCompare(nameB));
    });

    let sortedPlace = Object.entries(areas).sort((a, b) => {
        let areaA = a[1].food;
        let areaB = b[1].food;

        let areaNameA = a[0];
        let areaNameB = b[0];

        return (areaB - areaA) || (areaNameA.localeCompare(areaNameB));
    });

    console.log('Animals:');
    for (let line of sorted) {

        console.log(` ${line[0]} -> ${line[1].food}g`);
    }
    console.log('Areas with hungry animals:');
    for (let line of sortedPlace) {
        if (line[1].length > 0) {
            console.log(` ${line[0]}: ${line[1].length}`);
        }
    }
}

problemThree([
    "Add: Adam-4500-ByTheCreek",
    "Add: Maya-7600-WaterfallArea",
    "Add: Maya-1230-WaterfallArea",
    "Feed: Jamie-2000",
    "EndDay"
]);
console.log('-------');
problemThree([
    "Add: Jamie-600-WaterfallArea",
    "Add: Maya-6570-WaterfallArea",
    "Add: Adam-4500-ByTheCreek",
    "Add: Bobbie-6570-WaterfallArea",
    "Feed: Jamie-2000",
    "Feed: Adam-2000",
    "Feed: Adam-2500",
    "EndDay"
]);

// function problemThree(input) {
//     let zoo = {};
//     let areas = {};
//     let actions = {
//         "Add": add,
//         "Feed": feed
//     }

//     while (input[0] != 'EndDay') {
//         let tokens = input.shift().split(': ');
//         let command = tokens.shift();
//         let action = actions[command];
//         action(tokens);
//     }

//     let sorted = Object.entries(zoo).sort(compareAnimals);
//     console.log('Animals:');
//     for (let [animalName, animalDetails] of sorted) {
//         console.log(` ${animalName} -> ${animalDetails.neededFoodQuantity}g`);
//     }

//     console.log('Areas with hungry animals:');
//     let sortedAreas = Object.entries(areas).sort(comapreAreas);
//     for (let [area, animals] of sortedAreas) {
//         if (animals.length > 0) {
//             console.log(` ${area}: ${animals.length}`);
//         }
//     }

//     function comapreAreas(a, b) {
//         let areaAlength = a[1].length;
//         let areaBlength = b[1].length;

//         return (areaBlength - areaAlength) || (a[0].localeCompare(b[0]));
//     }

//     function compareAnimals(a, b) {
//         let animalANeededFood = a[1].neededFoodQuantity;
//         let animalBNeededFood = b[1].neededFoodQuantity;

//         return (animalBNeededFood - animalANeededFood) || (a[0].localeCompare(b[0]));
//     }

//     function add(tokens) {
//         let [name, neededFoodQuantity, area] = tokens[0].split('-');
//         neededFoodQuantity = Number(neededFoodQuantity);

//         if (zoo[name] == undefined) {
//             zoo[name] = {
//                 neededFoodQuantity,
//                 area
//             }
//         } else {
//             zoo[name].neededFoodQuantity += neededFoodQuantity;
//         }

//         if (areas[area] == undefined) {
//             areas[area] = [];
//         }

//         if (!areas[area].includes(name)) {
//             areas[area].push(name);
//         }

//     }

//     function feed(tokens) {
//         let [name, food] = tokens[0].split('-');
//         food = Number(food);

//         if (zoo[name] != undefined) {
//             zoo[name].neededFoodQuantity -= food

//             if (zoo[name].neededFoodQuantity <= 0) {
//                 delete zoo[name];
//                 let entries = Object.entries(areas);
//                 for (let [animal, details] of entries) {
//                     if (details.includes(name)) {
//                         let idx = details.indexOf(name);
//                         details.splice(idx, 1);
//                     }
//                 }
//                 console.log(`${name} was successfully fed`);
//             }
//         }
//     }
// }