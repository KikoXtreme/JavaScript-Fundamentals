function passwordValidator(pass) {

    function passLength(input) {
        if (input.length >= 6 && input.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function containsLettersAndDigits(input) {
        let isValid = true;

        for (let i = 0; i < input.length; i++) {
            let lettersAndDigits = input[i].charCodeAt(0);

            if ((lettersAndDigits >= 48 && lettersAndDigits <= 57) ||
                (lettersAndDigits >= 65 && lettersAndDigits <= 90) ||
                (lettersAndDigits >= 97 && lettersAndDigits <= 122)) {
                isValid = true
            } else {
                isValid = false;
                break;
            }
        }
        return isValid;
    }

    function atLeastTwoDigits(input) {
        let counter = 0;

        for (let i = 0; i < input.length; i++) {
            let lettersAndDigits = input[i].charCodeAt(0);

            if (lettersAndDigits >= 48 && lettersAndDigits <= 57) {
                counter++;
            }
        }

        if (counter >= 2) {
            return true;
        } else {
            return false;
        }
    }

    let isLength = passLength(pass);
    let lettersDigits = containsLettersAndDigits(pass);
    let twoDigits = atLeastTwoDigits(pass);

    if (isLength && lettersDigits && twoDigits) {
        console.log('Password is valid');
    }

    if (!isLength) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (!lettersDigits) {
        console.log('Password must consist only of letters and digits');
    }

    if (!twoDigits) {
        console.log('Password must have at least 2 digits');
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');