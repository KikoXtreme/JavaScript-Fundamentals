function problemThree(priceRating, entry, itemType) {
    let sumLeft = 0;
    let sumRight = 0;

    for (let i = 0; i < entry; i++) {
        if (itemType === "cheap") {
            if (priceRating[i] < priceRating[entry] && priceRating[i] > 0) {
                sumLeft += priceRating[i];
            } else if (priceRating[i] < priceRating[entry] && priceRating[i] < 0) {
                sumLeft += priceRating[i];
            } else if (priceRating[i] < priceRating[entry]) {
                sumLeft += priceRating[i];
            }
        } else if (itemType === "expensive") {
            if (priceRating[i] >= priceRating[entry] && priceRating[i] > 0) {
                sumLeft += priceRating[i];
            } else if (priceRating[i] >= priceRating[entry] && priceRating[i] < 0) {
                sumLeft += priceRating[i];
            } else if (priceRating[i] >= priceRating[entry]) {
                sumLeft += priceRating[i];
            }
        }
    }

    for (let i = entry + 1; i < priceRating.length; i++) {
        if (itemType === "cheap") {
            if (priceRating[i] < priceRating[entry] && priceRating[i] > 0) {
                sumRight += priceRating[i];
            } else if (priceRating[i] < priceRating[entry] && priceRating[i] < 0) {
                sumRight += priceRating[i];
            } else if (priceRating[i] < priceRating[entry]) {
                sumRight += priceRating[i];
            }
        } else if (itemType === "expensive") {
            if (priceRating[i] >= priceRating[entry] && priceRating[i] > 0) {
                sumRight += priceRating[i];
            } else if (priceRating[i] >= priceRating[entry] && priceRating[i] < 0) {
                sumRight += priceRating[i];
            } else if (priceRating[i] >= priceRating[entry]) {
                sumRight += priceRating[i];
            }
        }
    }

    if (sumLeft >= sumRight) {
        console.log(`Left - ${sumLeft}`);
    } else {
        console.log(`Right - ${sumRight}`);
    }
}

problemThree([1, 5, 1], 1, "cheap");
problemThree([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");

// function problemThree(priceRatings, entry, typeOfItems) {
//     let sumLeft = 0;
//     let sumRight = 0;

//     for (let i = 0; i < entry; i++) {
//         sumLeft += priceRatings[i];
//     }
//     for (let i = entry + 1; i < priceRatings.length; i++) {
//         sumRight += priceRatings[i];
//     }

//     if (sumLeft >= sumRight){
//         console.log(`Left - ${sumLeft}`);
//     } else{
//         console.log(`Right - ${sumRight}`);
//     }
// }

// problemThree([1, 5, 1], 1, "cheap");
// problemThree([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");