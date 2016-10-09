"use strict";
var mongoose = require('mongoose');
var brunchSchema = new mongoose.Schema({
    foods: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Food'
        }],
    drinks: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Drink'
        }]
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('Brunch', brunchSchema);
