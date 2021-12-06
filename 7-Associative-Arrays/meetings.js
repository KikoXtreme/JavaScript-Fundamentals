function meetings(array) {
    let meeting = {};

    for (let line of array) {
        let [weekdays, name] = line.split(' ');

        if (meeting.hasOwnProperty(weekdays)) {
            console.log(`Conflict on ${weekdays}!`);
        } else {
            meeting[weekdays] = name;
            console.log(`Scheduled for ${weekdays}`)
        }
    }

    for (let key in meeting) {
        console.log(`${key} -> ${meeting[key]}`)
    }
}

meetings([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
]);