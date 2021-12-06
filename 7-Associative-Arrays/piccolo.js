function piccolo(array) {
    let cars = [];

    for (let line of array) {
        let [direction, carNumber] = line.split(', ');

        if (direction === 'IN') {
            if (!cars.includes(carNumber)) {
                cars.push(carNumber);
            }
        } else {
            if (cars.includes(carNumber)){
                cars.splice(cars.indexOf(carNumber), 1);
            }
        }
    }

    let sortedCars = cars.sort((a, b) => a.localeCompare(b));

    if (sortedCars.length <= 0) {
        console.log('Parking Lot is Empty');
    } else {
        for (let car of sortedCars) {
            console.log(car);
        }
    }
}

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
)