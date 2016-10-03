"use strict";
var mongoose = require('mongoose');
var tagWithCelebSchema = new mongoose.Schema({
    itemId: {
        type: String,
        required: true
    },
    celebId: {
        type: String,
        required: true
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('TagWithCeleb', tagWithCelebSchema);
