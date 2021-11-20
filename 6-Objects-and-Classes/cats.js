function solve(catsAsStr) {
    let cats = [];
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for(let i = 0; i < catsAsStr.length; i++){
        let catData = catsAsStr[i].split(' ');
        let [name, age] = [catData[0], catData[1]];

        let cat = new Cat(name, age);
        cats.push(cat);
    }

    for (let cat of cats){
        cat.meow();
    }
}

solve(['Mellow 2', 'Tom 5']);

// function solve(catsAsStr) {
//     class Cat {
//         constructor(name, age) {
//             this.name = name;
//             this.age = age;
//         }

//         meow() {
//             console.log(`${this.name}, age ${this.age} says Meow`);
//         }
//     }

//     let cats = [];
//     for(let catData of catsAsStr){
//         let [name, age] = catData.split(' ');

//         let cat = new Cat(name, age);
//         cats.push(cat);

//         cat.meow()
//     }
// }

// solve(['Mellow 2', 'Tom 5']);