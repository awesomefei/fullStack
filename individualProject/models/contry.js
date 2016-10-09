"use strict";
var mongoose = require('mongoose');
var countrySchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('Country', countrySchema);
