"use strict";
var mongoose = require('mongoose');
var commentSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    timeCreate: {
        type: Date,
        required: true
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('Comment', commentSchema);
