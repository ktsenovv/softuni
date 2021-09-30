function movies(list) {
    let moviesList = [];

    for (let command of list) {
        let tokens = command.split(' ');

        if (command.includes('addMovie')) {
            let [addMovieCommand, ...movieName] = command.split(' ');
            let movieNameString = movieName.join(' ');
            let movieObject = {
                name: movieNameString,
                director: '',
                date: ''
            };
            moviesList.push(movieObject);
        } else if (command.includes('directedBy')) {
            let tokens = command.split(' ');
            let movieNameTokens = [];
            let directorNameTokens = [];
            let directedByID = tokens.findIndex(x => x === 'directedBy');

            for (let i = 0; i < directedByID; i++) {
                movieNameTokens.push(tokens[i]);
            }
            for (let i = directedByID + 1; i < tokens.length; i++) {
                directorNameTokens.push(tokens[i]);
            }

            let name = movieNameTokens.join(' ');
            let director = directorNameTokens.join(' ');

            let movie = moviesList.find(x => x.name === name);
            if (movie) {
                movie.director = director;
            }
        } else {
            let tokens = command.split(' ');
            let date = tokens.pop();
            tokens.pop();

            let name = tokens.join(' ');

            let movie = moviesList.find(x => x.name === name);
            if (movie) {
                movie.date = date;
            }
        }
    }

    for (let movie of moviesList) {
        if (movie.director && movie.name && movie.date) {
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