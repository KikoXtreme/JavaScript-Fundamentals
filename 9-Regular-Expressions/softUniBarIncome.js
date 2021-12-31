function softUniBarIncome(array) {
    let pattern = /%([A-Z][a-z]+)%.*?<(\w+)>.*?\|(\d+)\|.*?(-?\d+(?:\.\d+)?)\$/g;
    let total = 0;
    while (array[0] !== "end of shift") {
        let line = array.shift();

        let match = pattern.exec(line);

        if (match !== null) {
            let [_, name, product, count, price] = match
            count = Number(count);
            price = Number(price);
            total += count * price;

            console.log(`${name}: ${product} - ${(count * price).toFixed(2)}`);
        }
        match = pattern.exec(line);
    }
    console.log(`Total income: ${total.toFixed(2)}`);
}

softUniBarIncome([
    "%George%<Croissant>|2|10.3$",
    "%Peter%<Gum>|1|1.3$",
    "%Maria%<Cola>|1|2.4$",
    "end of shift"
]);
softUniBarIncome([
    "%InvalidName%<Croissant>|2|10.3$",
    "%Peter%<Gum>1.3$",
    "%Maria%<Cola>|1|2.4",
    "%Valid%<Valid>valid|10|valid20$",
    "end of shift"
]);