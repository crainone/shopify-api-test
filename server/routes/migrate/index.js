var routes = require('express').Router();
var config = require('config');
var request = require('request');

routes.post('/', function (req, res, next) {
    request({
        uri: config.shopSource + '/admin/products/count.json'
    }).pipe(res);
})

routes.get('/', function(req, res) {
	res.json({ message: 'API Initialized!'});
});

module.exports = routes;