//Mocks up the shopify server. Data here represents what's available for migration

var routes = require('express').Router();
var remoteData = require('./data');

//fields=id,images,title
routes.get('/admin/products.json', (req, res) => {
  res.status(200).json({ type : 'fake server', products : remoteData.products});
});

routes.get('/admin/products/count.json', (req, res) => {
  res.status(200).json({ type : 'fake server', count : remoteData.products.length });
});

routes.get('/admin/products/:product_id.json', (req, res) => {
  res.status(404).json({ type : 'fake server', errors : "Not Found" });
  res.status(200).json({ type : 'fake server', product : remoteData.products[0] });
});

routes.post('/admin/products.json', (req, res) => {
  res.status(200).json({ type : 'fake server', message: 'Connected!' });
});

routes.put('/admin/products/:product_id.json', (req, res) => {
  res.status(200).json({ type : 'fake server', message: 'Connected!' });
});

routes.delete('/admin/products/:product_id.json', (req, res) => {
  res.status(200).json({ type : 'fake server', message: 'Connected!' });
});

module.exports = routes;