function problemTwo(array) {
    let arrayL = array.length;
    let name = array.shift().split('|');
    let exit = array[array.length - 1];
    let result = [];


    for (let i = 0; i < arrayL; i++) {
        let line = array[i].split(' ');

        if (line[0] === 'Add') {
            if (Number(line[2]) >= 0 && Number(line[2]) < name.length) { //+1?
                name.splice(Number(line[2]), 0, line[1]);
            }
        } else if (line[0] === 'Remove') {
            if (Number(line[1]) >= 0 && Number(line[1]) <= name.length) { //+1?
                name.splice(Number(line[1]), 1);
            }
        } else if (line.join(' ') === 'Check Even') {
            for (let j = 0; j < name.length; j++) {
                if (j % 2 === 0) {
                    result.push(name[j]);
                }
            }
            console.log(result.join(' '));

        } else if (line.join(' ') === 'Check Odd') {
            for (let j = 0; j < name.length; j++) {
                if (j % 2 !== 0) {
                    result.push(name[j]);
                }
            }
            console.log(result.join(' '));
        } else if (exit === 'Done') {
            break;
        }
        result = [];
    }
    console.log(`You crafted ${name.join('')}!`);
}

problemTwo(["pa|Do|ha|mm|er",
    "Remove 0",
    "Add om 1",
    "Check Even",
    "Done"]);
problemTwo(["As|hb|ri|ng|er",
    "Remove 10",
    "Add lo 5",
    "Check Odd",
    "Done"]);
problemTwo(["Ta|es|to|la|ch",
    "Add pa 8",
    "Add ha 2",
    "Remove 3",
    "Done"]);