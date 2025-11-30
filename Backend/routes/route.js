import express from 'express';
import Movie from '../models/schemas.js';

const router = express.Router();

router.get('/trend', async(req, res) => {
    const data = await Movie.find().sort({count: -1}).limit(5);

    res.json(data);
});

export default router;