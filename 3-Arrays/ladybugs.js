function ladybugs(input) {
    let locations = input[1].split(' ');
    let field = [];

    for (let cell = 0; cell < input[0]; cell++) {

        if (locations.includes(`${cell}`)) {
            field[cell] = 1;
        } else {
            field[cell] = 0;
        }
    }

    for (i = 2; i < input.length; i++) {
        let action = input[i].split(' ');
        let location = Number(action[0]);
        let direction = action[1];
        let movement = Number(action[2]);
        action = direction === 'right' ? '+' : '-';

        switch (action) {
            case '-': newLocation = location - movement; break;
            default: newLocation = location + movement; break;
        }

        if (field[location] !== 1 || location >= field.length) {
            continue;
        }

        field[location] = 0;

        for (j = newLocation; j < field.length; j++) {
            if (field[newLocation] === 0) {
                field[newLocation] = 1;
                break;
            } else {
                switch (action) {
                    case '-': newLocation -= movement; break;
                    default: newLocation += movement; break;
                }
                if (newLocation >= field.length) {
                    break;
                }
            }
        }
    }
    console.log(field.join(' '));
}

ladybugs([3, '0 1', '0 right 1', '2 right 1']);
// ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);