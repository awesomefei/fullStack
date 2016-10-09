"use strict";
var mongoose = require('mongoose');
var URL = 'mongodb://admin:Secret123!@ds035806.mlab.com:35806/awesomefile';
var Database = (function () {
    function Database() {
    }
    Database.connect = function () {
        mongoose.connect(URL);
        var db = mongoose.connection;
        db.on('err', function () {
            console.log('connection err');
        });
        db.once('open', function () {
            console.log('connected to database!!!');
        });
    };
    return Database;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Database;
