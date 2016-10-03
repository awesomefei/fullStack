"use strict";
var mongoose = require('mongoose');
var movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    introduction: {
        type: String,
        required: true
    },
    celebs: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Celeb'
        }],
    rate: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    trailerUrl: {
        type: String,
        required: true
    },
    comments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }]
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('Movie', movieSchema);
