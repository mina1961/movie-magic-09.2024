import uniqid from 'uniqid';

import movieData from '../data/movieData.js' // import movieData 
const getAll = () => movieData.getAll();

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