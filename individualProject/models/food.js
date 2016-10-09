"use strict";
var mongoose = require('mongoose');
var foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        reuired: true
    },
    url: {
        type: String,
        required: false
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('Food', foodSchema);
