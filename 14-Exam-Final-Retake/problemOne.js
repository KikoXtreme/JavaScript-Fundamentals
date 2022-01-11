function problemOne(array) {
    let result = array.shift();
    let patternOne = /^[A-Za-z\d_]+$/g;
    let patternTwo = /[A-Z]/g;
    let patternThree = /[a-z]/g;
    let patternFour = /[0-9]/g;

    while (array[0] !== 'Complete') {
        let line = array.shift().split(' ');
        let command = line[0];

        if (command === 'Make') {
            if (line[1] === 'Upper') {
                let index = Number(line[2]);

                let letter = result.substring(index, index + 1).toUpperCase();

                let left = result.substring(0, index);
                let right = result.substring(index + 1);
                result = left + letter + right;
                console.log(result);

            } else if (line[1] === 'Lower') {
                let index = Number(line[2]);

                let letter = result.substring(index, index + 1).toLowerCase();

                let left = result.substring(0, index);
                let right = result.substring(index + 1);
                result = left + letter + right;
                console.log(result);
            }

        } else if (command === 'Insert') {
            let index = Number(line[1]);
            let left = result.substring(0, index);
            let right = result.substring(index);
            result = left + line[2] + right;
            console.log(result);

        } else if (command === 'Replace') {
            let index = line[1];

            let oldChars = index.charCodeAt(0);
            let newChars = oldChars + Number(line[2]);

            let letter = String.fromCharCode(newChars)

            result = result.split(index).join(letter);

            console.log(result);

        } else if (command === 'Validation') {
            if (result.length < 8) {
                console.log('Password must be at least 8 characters long!');
            }
            if (!patternOne.exec(result)) {
                console.log('Password must consist only of letters, digits and _!');
            }
            if (!patternTwo.exec(result)) {
                console.log('Password must consist at least one uppercase letter!');
            }
            if (!patternThree.exec(result)) {
                console.log('Password must consist at least one lowercase letter!');
            }
            if (!patternFour.exec(result)) {
                console.log('Password must consist at least one digit!');
            }
        }
    }
}

problemOne(['invalidpassword*',
    'Add 2 p',
    'Replace i -50',
    'Replace * 10',
    'Make Upper 2',
    'Validation',
    'Complete'
]);
console.log('---');
problemOne(['123456789',
    'Insert 3 R',
    'Replace 5 15',
    'Validation',
    'Make Lower 3',
    'Complete'
]);