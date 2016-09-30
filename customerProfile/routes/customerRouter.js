"use strict";
var express = require('express');
var customers = [
    { id: 1, firstName: 'Jack', secondName: 'Lee', age: 10,
        url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVcII_ls5EjWgX2jbqXTBWqnFJ9mmcueAip_XMZuXwDDZofULc'
    },
    { id: 2, firstName: 'Amy', secondName: 'Peter', age: 12,
        url: 'http://southparkstudios.mtvnimages.com/images/shows/south-park/episode-thumbnails/season-19/south-park-s19e03-the-city-part-of-town_4x3.jpg?'
    },
    { id: 3, firstName: 'Tom', secondName: 'Jerry', age: 13,
        url: 'http://1.images.southparkstudios.com/images/shows/south-park/episode-thumbnails/season-17/south-park-s17e10-the-hobbit_4x3.jpg?width=360&quality=0.8'
    },
];
var idCount = customers.length + 1;
var customerRouter = express.Router();
customerRouter.get('/', function (req, res) {
    res.send(customers);
});
customerRouter.get('/:id', function (req, res) {
    var customerId = req.params['id'];
    var filteredCustomer = customers.filter(function (e) {
        return e['id'] == customerId;
    });
    res.send(filteredCustomer[0]);
});
customerRouter.post('/', function (req, res) {
    if (!req.body.id) {
        req.body.id = idCount++;
        console.log("before array");
        customers.push(req.body);
        console.log("after customers");
        res.sendStatus(201);
    }
    else {
        console.log("I am in serverside eidt");
        var customer = customers.filter(function (e) {
            return e['id'] == req.body.id;
        })[0];
        customers[customers.indexOf(customer)] = req.body;
        res.sendStatus(200);
    }
});
customerRouter.delete('/:id', function (req, res) {
    console.log('hello word');
    console.log('id is ' + req.params['id']);
    var customerToDelete = customers.filter(function (e) {
        return e['id'] == req.params['id'];
    })[0];
    customers.splice(customers.indexOf(customerToDelete), 1);
    res.sendStatus(201);
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = customerRouter;
