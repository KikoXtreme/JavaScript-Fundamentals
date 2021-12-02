function cardGame(array) {
    let symbols = { 'J': 11, 'Q': 12, 'K': 13, 'A': 14, 'S': 4, 'H': 3, 'D': 2, 'C': 1 };
    let players = {};
    let results = {};

    for (let line of array) {
        let tokens = line.split(': ');
        let playerName = tokens[0];
        let playerCards = tokens[1].split(', ');

        if (!Object.keys(players).includes(playerName)) {
            players[playerName] = [];
        }

        players[playerName] = players[playerName].concat(playerCards);
    }

    for (let [playerName, playerCards] of Object.entries(players)) {
        results[playerName] = 0;

        for (let i = 0; i < playerCards.length; i++) {
            let card = playerCards[i];
            if (playerCards.indexOf(card) === i) {

                let cardAsArray = card.split('');
                let type = cardAsArray.pop();
                let power = cardAsArray.join('');
                let cardPoints = 0;

                if (Object.keys(symbols).includes(power)) {
                    cardPoints = symbols[power] * symbols[type];
                } else {
                    cardPoints = Number(power) * symbols[type];
                }
                results[playerName] += cardPoints;
            }
        }
    }

    for (let [name, score] of Object.entries(results)) {

        console.log(`${name}: ${score}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);