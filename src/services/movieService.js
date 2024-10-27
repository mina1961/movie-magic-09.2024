
import Movie from '../models/Movie.js';

//TODO: filter in db not in memory

const getAll = (filter = {}) => {
    let moviesQuery = Movie.find();

    if (filter.search) {
        moviesQuery = moviesQuery.filter(movie => movie.title.toLowerCase().includes(filter.search.toLowerCase()));
    };
    if (filter.genre) {
        //moviesQuery = moviesQuery.filter(movie => movie.genre.toLowerCase() === filter.genre.toLowerCase());
        moviesQuery.find({ genre: filter.genre.toLowerCase() });
        //moviesQuery.where('genre').equals(filter.genre.toLowerCase());
    };
    if (filter.year) {
        moviesQuery.find({ year: filter.year });
        //moviesQuery.where('year').equals(filter.year);
    };
    return moviesQuery;
}


const create = (movie) => Movie.create(movie);

const getOne = (movieId) => Movie.findById(movieId).populate('casts');

const attach = (movieId, castId) => {
    // const movie = await Movie.findById(movieId);
    // movie.casts.push(castId);
    // return movie.save();

    return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
}

export default {
    getAll,
    create,
    getOne,
    attach
}