function problemTwo(array) {
    let n = array.shift();
    let pattern = /([A-Z][a-z]{2,} [A-Z][a-z]{2,})#+((([A-Z][a-z]+)&([A-Z][a-z]+)&([A-Z][a-z]+))|([A-Z][a-z]+)|(([A-Z][a-z]+)&([A-Z][a-z]+)))\d{2}([A-Z]\w+ (Ltd.|JSC))/;

    let result = [];

    for (let i = 0; i < n; i++) {

        let match = pattern.exec(array[i]);
        result.push(match);
    }

    for (let line of result) {
        if (line !== null) {
            let job = (line[2]).split('&').join(' ');
            console.log(`${line[1]} is ${(job)} at ${line[11]}`);
        }
    }
}

problemTwo([4,
    'Tanya Petrova##Dental&Assistants25Health Ltd.',
    'Kalina Mihova#Occupational&Therapy&Aides00Health Ltd.',
    'George Fill####Orderlies99Health JSC',
    'Lily petrova#Speech&Pathology&Assistants60Health Ltd.'
])
    ;
console.log('---');
problemTwo([4,
    'Peter PetrovPsychology&Teachers25School Ltd.',
    'Kalin kalinov#Special Education Teachers00 School Ltd.',
    'Lilyana Kuncheva#### Tutor999School JSC',
    'Kliment Genchev#Teacher&Assistants20School Ltd.'
]);
console.log('---');
problemTwo([2,
    'Mariya Ivanova#Photographer&&Machine25PhotoStudio12 Ltd.',
    'Monica Hristova####Nuclear&Engineer99Station JSC'
]);
