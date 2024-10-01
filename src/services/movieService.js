
import Movie from '../models/Movie.js';

const getAll = async (filter = {}) => {
    let movies = await Movie.find();

    //TODO: Refactor using db filtration
    if (filter.search) {
        movies = movies.filter(movie => movie.title.toLowerCase().includes(filter.search.toLowerCase()));
    };
    if (filter.genre) {
        movies = movies.filter(movie => movie.genre.toLowerCase() === filter.genre.toLowerCase());
    };
    if (filter.year) {
        movies = movies.filter(movie => movie.year === filter.year);
    };
    return movies;
}


const create = (movie) => Movie.create(movie);


const getOne = (movieId) =>  Movie.findById(movieId);
 
export default {
    getAll,
    create,
    getOne
}