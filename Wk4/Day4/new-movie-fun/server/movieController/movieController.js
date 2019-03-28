const movies = require("../data/data.json");
let myMovies = [];
let id = 0;
module.exports = {
    movieTime: (req, res, next) => {
        res.status(200).send(movies);
    },
    userAddMovie: (req, res) => {
        const {title, popularity, poster_path, overview, release_date} = req.body
        const newMovie = {
            id,
            title,
            popularity,
            poster_path,
            overview,
            release_date
        };
        myMovies.push(newMovie);
        id++;
        res.status(200).send(myMovies);

    },
    updateMovie: (req, res, next) => {},
    movieDelete: (req, res) => {
        const {id} = req.params;
        let index = myMovies.findIndex(movie => movie.id === +id) 

        if(index !== -1){
            myMovies.splice(index, 1);
            res.status(200).send(myMovies)
        }else {
            res.status(404).send( "Thou movie thouest hath been searching for has gone yonder, and is not hither.");
        }
    }
};