import mongoose from 'mongoose';

const movie = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    posterPath: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        default: 0,
    },
});

const Movie = mongoose.model('movies', movie);

export default Movie;