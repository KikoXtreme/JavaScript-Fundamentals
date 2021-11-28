function movies(array) {
    let movieList = [];

    for (let line of array) {

        if (line.includes('addMovie')) {
            let [command, ...movieName] = line.split(' ');
            let movieNameAsString = movieName.join(' ');
            let movieObject = {
                name: movieNameAsString,
            };
            movieList.push(movieObject);
        } else if (line.includes('directedBy')) {
            let tokens = line.split(' ');
            let movieNameTokens = [];
            let directorNameTokens = [];
            let directerByIndex = tokens.findIndex(x => x === 'directedBy');

            for (let i = 0; i < directerByIndex; i++) {
                movieNameTokens.push(tokens[i]);
            }
            for (let i = directerByIndex + 1; i < tokens.length; i++) {
                directorNameTokens.push(tokens[i]);
            }

            let name = movieNameTokens.join(' ');
            let director = directorNameTokens.join(' ');
            let movie = movieList.find(x => x.name === name);

            if (movie) {
                movie.director = director;
            }
        } else if (line.includes('onDate')) {
            let tokens = line.split(' ');
            let date = tokens.pop();
            tokens.pop();
            let name = tokens.join(' ');
            let movie = movieList.find(x => x.name === name);

            if (movie) {
                movie.date = date;
            }
        }
    }

    for (let movie of movieList) {
        if (movie.director && movie.date && movie.name) {
            console.log(JSON.stringify(movie));
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);