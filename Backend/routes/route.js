import express from 'express';
import Movie from '../models/schemas.js';

const router = express.Router();

router.get('/movies', async(req, res) => {
    try {
        let limit = Number(req.query.limit) || 10;
        const data = await Movie.find().sort({count: -1}).limit(limit);
        res.json(data);
    }
    catch(err) {
        console.error(err);
        res.status(500).json({error: 'Server error'});
    }
});

router.post('/trending', async(req, res) => {
    try {
        const {movie_id, title, poster_path} = req.body;
        if (!movie_id) {
            return res.status(500).json({error: 'Movie is required'});
        }
        const data = await Movie.findOneAndUpdate(
            {movie_id},
            {
                $setOnInsert: {
                    title,
                    poster_path,
                },
                $inc: {count: 1},
            },
            {upsert: true},
        );
        return res.json(data);
    }
    catch(err) {
        console.error(err);
        res.status(500).json({error: 'Server error'});
    }
});

export default router;