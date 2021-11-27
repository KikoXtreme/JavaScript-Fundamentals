function inventory(array) {
    let heroes = [];

    for (let line of array) {
        let tokens = line.split(' / ');
        let hero = tokens[0];
        let level = Number(tokens[1]);
        let items = tokens[2].split(', ');

        let heroData = {
            hero,
            level,
            items,
        }

        heroes.push(heroData);
    }

    let sortedHeroes = heroes.sort((a, b) => a.level - b.level);

    for (let hero of sortedHeroes) {
        console.log(`Hero: ${hero.hero}`)
        console.log(`level => ${hero.level}`)
        console.log(`items => ${hero.items.sort((a,b)=> a.localeCompare(b)).join(', ')}`);

    }
}

inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);