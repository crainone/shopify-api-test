var routes = require('express').Router();
var local = require('./local');
var remote = require('./remote');
var migrate = require('./migrate');

routes.use('/local', local);
routes.use('/remote', remote);
routes.use('/migrate', migrate);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;