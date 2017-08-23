var Product = require('../models/product');

exports.getAll = function(req, res) {
	Product.find(function(err, products) {
		if (err)
			res.status(404).send(err);
		res.status(200).json(products)
	});
};

exports.getOne = function(req, res) {
	Product.findById(req.params.product_id, function(err, product) {
		if (err)
			res.status(404).send(err);
		res.status(200).json(product)
	});
}

exports.add = function(req, res) {
	var product = new Product();
    (req.body.author) ? product.author = req.body.author : null;
    (req.body.text) ? product.text = req.body.text : null;

	product.save(function(err) {
		if (err)
			res.status(404).send(err);
		res.status(200).json({ message: 'Product successfully added!' });
	});
}

exports.update = function(req, res) {
	Product.findById(req.params.product_id, function(err, product) {
		if (err)
			res.status(404).send(err);
		(req.body.author) ? product.author = req.body.author : null;
		(req.body.text) ? product.text = req.body.text : null;

		product.save(function(err) {
			if (err)
				res.status(404).send(err);
			res.status(200).json({ message: 'Product has been updated' });
		});
	});
}

exports.delete = function(req, res) {
	product.remove({ _id: req.params.product_id }, function(err, product) {
		if (err)
			res.status(404).send(err);
		res.status(200).json({ message: 'Product has been deleted' })
    })
}