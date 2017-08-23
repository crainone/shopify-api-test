var routes = require('express').Router();
var product = require('../../controllers/ProductController');

routes.get('/', product.getAll);
routes.get('/:product_id', product.getOne);
routes.post('/', product.add);
routes.put('/:product_id', product.update);
routes.delete('/:product_id', product.delete);

module.exports = routes;