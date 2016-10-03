"use strict";
var mongoose = require('mongoose');
var tagSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    movies: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Movie'
        }]
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('Tag', tagSchema);
