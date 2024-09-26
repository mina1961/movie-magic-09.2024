import uniqid from 'uniqid';

import movieData from '../data/movieData.js' // import movieData 
const getAll = async (filter = {}) => {
    let movies = await movieData.getAll();

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
    

const create = (movie) => {
    movie.id = uniqid();
    movie.rating = Number(movie.rating);
    return movieData.create(movie);
};

const getOne = async (movieId) => {
    const movie = await movieData.getAll();
    const resultMovie = movie.find(m => m.id === movieId);
    return resultMovie;
}

export default { 
    getAll,
    create,
    getOne
}