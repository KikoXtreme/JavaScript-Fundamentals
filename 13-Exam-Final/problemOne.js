function problemOne(array) {
    let result = array.shift();

    while (array[0] !== 'Finish') {
        let line = array.shift().split(' ');
        let command = line[0];

        if (command === 'Replace') {
            let currentChar = line[1];
            let newChar = line[2];

            result = result.split(currentChar).join(newChar);
            console.log(result);

        } else if (command === 'Cut') {
            let index = Number(line[1]);
            let endIndex = Number(line[2]);

            if ((index >= 0 && index < result.length) && (endIndex >= 0 && endIndex < result.length)) {

                let left = result.substring(0, index);
                let right = result.substring(endIndex + 1);
                result = left + right;
                console.log(result);
            } else {
                console.log('Invalid indices!');
            }

        } else if (command === 'Make') {
            let upDown = line[1];

            if (upDown === 'Upper') {
                result = result.toUpperCase();
                console.log(result);
            } else if (upDown === 'Lower') {
                result = result.toLowerCase();
                console.log(result);
            }

        } else if (command === 'Check') {
            let string = line[1];

            if (result.includes(string)) {
                console.log(`Message contains ${string}`);
            } else {
                console.log(`Message doesn't contain ${string}`);
            }

        } else if (command === 'Sum') {

            let index = Number(line[1]);
            let endIndex = Number(line[2]);

            if ((index >= 0 && index < result.length) && (endIndex >= 0 && endIndex < result.length)) {

                let chars = result.substring(index, endIndex + 1);
                let points = 0;
                for (let char of chars) {
                    points += char.charCodeAt(0);
                }

                console.log(points);
            } else {
                console.log('Invalid indices!');
            }
        }
    }
}

problemOne([
    "ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"
]);
console.log('-----');
problemOne([
    "HappyNameDay",
    "Replace p r",
    "Make Lower",
    "Cut 2 23",
    "Sum -2 2",
    "Finish"
]);