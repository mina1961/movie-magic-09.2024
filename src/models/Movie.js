import { Shema, model } from 'mongoose';

const movieSchema = new Shema({
    title: String,
    genre: String,
    director: String,
    year: Number,
    imageUrl: String,
    reting: Number,
    description: String
});

const Movie = model('Movie', movieSchema);

export default Movie;