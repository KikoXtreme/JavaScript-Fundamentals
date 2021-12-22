function furniture(array) {
    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)/g;
    let total = 0;
    let result = [];

    while (array[0] !== 'Purchase') {
        let line = array.shift()
        let match = pattern.exec(line);

        if (match !== null) {
            let name = match.groups['name'];
            let price = Number(match.groups['price']);
            let qty = Number(match.groups['qty']);

            total += price * qty
            result.push(name);
            match = pattern.exec(line)
        }
    }

    console.log('Bought furniture:');
    for (let line of result) {
        console.log(line);
    }
    console.log(`Total money spend: ${total.toFixed(2)}`);
}

furniture([
    ">>Sofa<<312.23!3",
    ">>TV<<300!5",
    ">Invalid<<!5",
    "Purchase"
]);