function songsPlay(array) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let numberOfSongs = array.shift();
    let typeSongs = array.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = array[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);

    }

    if (typeSongs === 'all') {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.type === typeSongs);
        filtered.forEach((i) => console.log(i.name));
    }
}

songsPlay([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);