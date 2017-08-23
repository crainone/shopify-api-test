var routes = require('express').Router();
var account = require('../../controllers/AccountController');

routes.get('/', account.getAll);
routes.get('/:account_id', account.getOne);
routes.post('/', account.add);
routes.put('/:account_id', account.update);
routes.delete('/:account_id', account.delete);

module.exports = routes;