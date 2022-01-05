function worldTour(array) {
    let result = array.shift();

    while (array[0] !== 'Travel') {
        let tokens = array.shift().split(':');
        let command = tokens[0];

        if (command === 'Add Stop') {
            let index = Number(tokens[1]);
            if (index >= 0 && index < result.length) {
                let left = result.substring(0, index);
                let right = result.substring(index);
                result = left + tokens[2] + right;
                // console.log(result);
            }

        } else if (command === 'Remove Stop') {
            let index = Number(tokens[1]);
            let lastIndex = Number(tokens[2]);
            if ((index >= 0 && index < result.length) && (lastIndex >= 0 && lastIndex < result.length)) {
                let left = result.substring(0, index);
                let right = result.substring(lastIndex + 1);
                result = left + right;
                // console.log(result);
            }

        } else if (command === 'Switch') {
            result = result.split(tokens[1]).join(tokens[2]);
            // console.log(result);
        }
        console.log(result);
    }
    console.log(`Ready for world tour! Planned stops: ${result}`);
}

worldTour([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
]);