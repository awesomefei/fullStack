"use strict";
var mongoose = require('mongoose');
var directorSchema = new mongoose.Schema({
    knownFor: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Movie'
        }],
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: false
    },
    agent: {
        type: String,
        required: false
    },
    career: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('Director', directorSchema);
