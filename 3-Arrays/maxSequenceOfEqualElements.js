function maxSequenceOfEqualElements(array) {
    let longestArray = []
    let counter = 0
    let final_counter = 0
    let number = 0
    let lastNum = 0
    let isAchieved = false

    for (let i = 0; i < array.length; i++) {

        for (let j = i; j < array.length; j++) {
            if (array[i] === array[j]) {
                counter++;
                number = array[i];

                if (counter === array.length) {
                    isAchieved = true;
                    break;
                }
            } else {
                if (final_counter < counter) {
                    final_counter = counter;
                    lastNum = number;
                    number = 0;
                    counter = 0;
                } else {
                    counter = 0;
                    number = 0;
                }
            }
        }
        if (isAchieved) {
            final_counter = counter;
            lastNum = number;
            break;
        }
    }
    for (let i = 0; i < final_counter; i++) {
        longestArray.push(lastNum);
    }
    console.log(longestArray.join(' '));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);