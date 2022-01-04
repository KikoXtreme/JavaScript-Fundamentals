function problemOne(array) {
    let neededExperiance = array[0];
    let battleCounts = array[1];
    let experiencePerDay = 0;
    let counter = 0;

    for (let i = 1; i < array.length - 1; i++) {   //<-1
        let currentExperiance = array[i + 1];

        if (i % 3 === 0) {
            experiencePerDay += currentExperiance * 1.15;
        } else if (i % 5 === 0) {
            experiencePerDay += currentExperiance * 0.90;
        } else if (i % 15 === 0) {
            experiencePerDay += currentExperiance * 1.05;
        } else {
            experiencePerDay += currentExperiance
        }
        counter++;
        if (experiencePerDay >= neededExperiance){
            break;
        }
    }

    if (experiencePerDay >= neededExperiance){
        console.log(`Player successfully collected his needed experience for ${counter} battles.`);
    } else {
        console.log(`Player was not able to collect the needed experience, ${(neededExperiance - experiencePerDay).toFixed(2)} more needed.`);
    }

}

problemOne([500, 5, 50, 100, 200, 100, 30]);
problemOne([400, 5, 50, 100, 200, 100, 20]);