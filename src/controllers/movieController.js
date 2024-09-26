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

    res.end()
})

export default router;
