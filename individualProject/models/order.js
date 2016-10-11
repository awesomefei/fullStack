"use strict";
var mongoose = require('mongoose');
var orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
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
        required: false,
        default: new Date()
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('Order', orderSchema);
