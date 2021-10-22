function spiceMustFlow(startYield) {
    let days = 0;
    let total = 0;

    while (startYield >= 100) {
        total += (startYield - 26);
        startYield -= 10;
        days++;

        if (startYield < 100) {
            break;
        }
    }
    if (total > 26) {
        total -= 26;
    }

    console.log(days);
    console.log(total);
}

spiceMustFlow(111);