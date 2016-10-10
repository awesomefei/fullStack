"use strict";
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var userSchema = new mongoose.Schema({
    orders: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order'
        }],
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    },
    admin: {
        type: Boolean,
        required: false,
    }
});
userSchema.method('setPassword', function (password) {
    var salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(password, salt);
});
userSchema.method('validatePassword', function (password) {
    return bcrypt.compareSync(password, this.password);
});
userSchema.method('generateToken', function () {
    return jwt.sign({
        id: this._id,
        username: this.username,
        admin: this.admin
    }, 'SuperSecret');
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('User', userSchema);
