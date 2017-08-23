var routes = require('express').Router();
var migrate = require('../../controllers/MigrateController');

routes.post('/', migrate.start);

routes.get('/', function(req, res) {
	res.json({ message: 'API Initialized!'});
});

module.exports = routes;