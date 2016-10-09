"use strict";
var mongoose = require('mongoose');
var drinkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        reuired: true
    },
    detail: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: false
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('Drink', drinkSchema);
