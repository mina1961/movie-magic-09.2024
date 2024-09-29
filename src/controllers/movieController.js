import { Router } from "express";
import movieService from "../services/movieService.js";

const router = Router();


// URL is movies/create
router.get('/create', (req, res) => {
    res.render('movies/create');
})

router.post('/create', async (req, res) => {

    const moviData = req.body
    // save movie data in db

    await movieService.create(moviData);

    res.redirect('/')
});

router.get('/search', async (req, res) => {
   
    const filter = req.query;
    const movies = await movieService.getAll(filter);
    res.render('home', { isSearch: true, movies, filter });
});

router.get('/:movieId/details', async (req, res) => {

    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId)
    //prepare view data
    movie.ratingView = getRatingData(movie.rating)
    res.render('movies/details', { movie });
});

function getRatingData(rating) {
    
    return "&#x2605;".repeat(rating)
}

export default router;
