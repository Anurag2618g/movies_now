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
    index: {
        type: Int,
        required: true
    }
});

const Movie = mongoose.model('movies', movie);

export default Movie;