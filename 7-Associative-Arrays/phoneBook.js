function phoneBook(array) {
    let phonebook = {};

    for (let line of array) {
        let commands = line.split(' ');
        let name = commands[0];
        let number = commands[1];
        phonebook[name] = number;
    }

    for (let key in phonebook) {
        console.log(`${key} -> ${phonebook[key]}`);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);