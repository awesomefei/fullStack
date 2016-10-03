"use strict";
var mongoose = require('mongoose');
var celebSchema = new mongoose.Schema({
    knownfor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    },
    like: {
        type: Number,
        required: false
    },
    dislike: {
        type: Number,
        required: false
    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: false
    },
    agent: {
        type: String,
        required: false
    },
    spouse: {
        type: String,
        required: false
    },
    career: {
        type: String,
        required: false
    },
    website: {
        type: String,
        required: false
    },
    comments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }]
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('Celeb', celebSchema);
