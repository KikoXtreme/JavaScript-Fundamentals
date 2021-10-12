function thePyramidOfKingDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let step = 0;
    let innerArea = 0;
    let outerArea = 0;

    for (let i = base; i >= 1; i -= 2) {
        step++;

        if (step % 5 === 0 && i > 2) {
            innerArea = (i - 2) * (i - 2);
            stone += innerArea * increment;
            outerArea = (4 * i) - 4;
            lapisLazuli += outerArea * increment;
        } else if (i <= 2) {
            gold += (i * i) * increment;
        } else {
            innerArea = (i - 2) * (i - 2);
            stone += innerArea * increment;
            outerArea = (4 * i) - 4;
            marble += outerArea * increment;
        }
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(step * increment)}`);
}

thePyramidOfKingDjoser(11, 1);