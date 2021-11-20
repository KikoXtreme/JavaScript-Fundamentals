function train(array) {
    let train = array.shift().split(' ').map(Number);
    let maxCapacity = Number(array.shift());

    for (let i = 0; i < array.length; i++) {
        let commands = array[i].split(' ');

        if (commands[0] === 'Add') {
            train.push(Number(commands[1]));
        } else {
            for (let j = 0; j < train.length; j++) {
                let passangers = Number(commands[0]);

                if (train[j] + passangers <= maxCapacity) {
                    train[j] += passangers;
                    break;
                }
            }
        }
    }
    console.log(train.join(' '));
}

train(['32 54 21 12 4 0 23', '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);