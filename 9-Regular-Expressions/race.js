function race(array) {
    let namePattern = /[A-Za-z]/g;
    let distancePattern = /[0-9]/g;

    let nameInitial = array.shift().split(', ');
    let racers = {};
    for (let names of nameInitial) {
        racers[names] = 0;
    }

    while (array[0] !== "end of race") {
        let line = array.shift();

        let letters = line.match(namePattern);
        let digits = line.match(distancePattern);

        let names = letters.join('');
        let distanceNums = digits.map(Number);
        let distance = 0;

        for (let line of distanceNums) {
            distance += line;
        }

        if (racers[names] !== undefined) {
            racers[names] += distance;
        }
    }
    let sorted = Object.entries(racers).sort((a, b) => b[1] - a[1]);

    if (sorted[0]) {
        console.log(`1st place: ${sorted[0][0]}`);
    }
    if (sorted[1]) {
        console.log(`2nd place: ${sorted[1][0]}`);
    }
    if (sorted[2]) {
        console.log(`3rd place: ${sorted[2][0]}`);
    }
}

race([
    "George, Peter, Bill, Tom",
    "G4e@55or%6g6!68e!!@",
    "R1@!3a$y4456@",
    "B5@i@#123ll",
    "G@e54o$r6ge#",
    "7P%et^#e5346r",
    "T$o553m&6",
    "end of race"
]);