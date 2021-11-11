function houseParty(array) {
    let partyList = [];

    for (let i = 0; i < array.length; i++) {
        let listArray = array[i].split(' ');
        let name = listArray.shift();
        let command = listArray[1];

        if (command === 'going!') {
            if (partyList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                partyList.push(name);
            }
        } else {
            if (partyList.includes(name)) {
                partyList.pop()
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(partyList.join('\n'));
}

houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
