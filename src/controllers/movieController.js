import { Router } from "express";
import movieService from "../services/movieService.js";
import castService from "../services/castService.js";


const router = Router();

function toArray(documents) {
    return documents.map(document => document.toObject());
}

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
    res.render('home', { isSearch: true, movies: toArray(movies), filter });
});

router.get('/:movieId/details', async (req, res) => {

    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId).lean();
    
    res.render('movies/details', { movie });
});

router.get('/:movieId/attach', async (req, res) => {
    const movie = await movieService.getOne(req.params.movieId).lean();
    const casts = await castService.getAll().lean();
    res.render('movies/attach', { movie, casts });
});

router.post('/:movieId/attach', async (req, res) => {
    const movieId = req.params.movieId;
    const castId = req.body.cast;

    await movieService.attach(movieId, castId);

    res.redirect(`/movies/${movieId}/details`);
    
})

export default router;


