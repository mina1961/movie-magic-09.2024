import { Router } from "express";
import castService from "../services/castService.js";

const router = Router();

router.get('/create', (req, res) => {
    res.render('casts/create');
});

router.post('/create', async (req, res) => {
    const cast = req.body;
    console.log(cast);

    await castService.create(cast);

    res.redirect('/');
    
})

export default router;