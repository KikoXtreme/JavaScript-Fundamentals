function activationKeys(array) {
    let result = array.shift();

    while (array[0] !== 'Generate') {
        let tokens = array.shift().split('>>>');
        let command = tokens[0];

        if (command === 'Contains') {
            if (result.includes(tokens[1])) {
                console.log(`${result} contains ${tokens[1]}`);
            } else {
                console.log('Substring not found!');
            }
        } else if (command === 'Flip') {
            let upDownCommand = tokens[1];
            let startIndex = Number(tokens[2]);
            let endIndex = Number(tokens[3]);

            if (upDownCommand === 'Upper') {
                let left = result.substring(0, startIndex);
                let middle = result.substring(startIndex, endIndex).toUpperCase();
                let right = result.substring(endIndex);

                result = left + middle + right;
                console.log(result);
            } else if (upDownCommand === 'Lower') {

                let left = result.substring(0, startIndex);
                let middle = result.substring(startIndex, endIndex).toLowerCase();
                let right = result.substring(endIndex);

                result = left + middle + right;
                console.log(result);
            }
        } else if (command === 'Slice') {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            let left = result.substring(0, startIndex);
            let right = result.substring(endIndex);

            result = left + right;
            console.log(result);
        }
    }
    console.log(`Your activation key is: ${result}`);
}

activationKeys([
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"
]);
console.log('-----');
activationKeys([
    "134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"
]);