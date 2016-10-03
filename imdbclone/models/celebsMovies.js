"use strict";
var mongoose = require('mongoose');
var celebsMoviesSchema = new mongoose.Schema({
    movieId: {
        type: String,
        required: true
    },
    celebId: {
        type: String,
        required: true
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('CelebsMovies', celebsMoviesSchema);
