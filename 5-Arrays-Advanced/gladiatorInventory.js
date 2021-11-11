function gladiatorInventory(array) {
    let inventory = array[0].split(' ');

    for (let i = 1; i < array.length; i++) {
        let command = array[i];
        let action = command.split(' ');

        if (action[0] === 'Buy') {
            if (!inventory.includes(action[1])) {
                inventory.push(action[1]);
            }
        } else if (action[0] === 'Trash') {
            if (inventory.includes(action[1])) {
                let result = [];
                result = inventory.filter(x => x !== action[1]);
                inventory = result;
            }
        } else if (action[0] === 'Repair') {
            if (inventory.includes(action[1])) {
                let result = [];
                result = inventory.filter(x => x !== action[1]);
                result.push(action[1]);
                inventory = result;
            }
        } else if (action[0] === 'Upgrade') {
            let equipmentAll = action[1].split('-');
            let equipment = equipmentAll[0];
            let upgrade = equipmentAll[1];
            if (inventory.includes(equipment)) {
                let index = inventory.indexOf(equipment)
                inventory.splice(index + 1, 0, `${equipment}:${upgrade}`);
            }
        }
    }
    console.log(inventory.join(' '));
}

gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);
gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']);