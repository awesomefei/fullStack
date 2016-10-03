"use strict";
var mongoose = require('mongoose');
var homeMovieSchema = new mongoose.Schema({
    director: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Director'
        }],
    celebs: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Celeb'
        }],
    title: {
        type: String,
        required: true
    },
    introduction: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: false
    },
    imageUrl: {
        type: String,
        required: false
    },
    trailerUrl: {
        type: String,
        required: false
    },
    comments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }]
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('HomeMovie', homeMovieSchema);
