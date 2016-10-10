"use strict";
var mongoose = require('mongoose');
var orderSchema = new mongoose.Schema({
    foods: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Food'
        }],
    state: {
        type: String,
        enum: ['completed', 'uncompleted']
    },
    date: {
        type: Date,
        required: true
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('Order', orderSchema);
