var routes = require('express').Router();
var product = require('./product');
var account = require('./account');

routes.use('/product', product);
routes.use('/account', account);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;