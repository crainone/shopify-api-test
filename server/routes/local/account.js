var routes = require('express').Router();
var Account = require('../../models/account');

routes.get('/', function(req, res) {
	Account.find(function(err, accounts) {
		if (err)
			res.status(404).send(err);
		res.status(200).json(accounts)
	});
});

routes.post('/', function(req, res) {
	var account = new Account();
    (req.body.author) ? account.author = req.body.author : null;
    (req.body.text) ? account.text = req.body.text : null;

	account.save(function(err) {
		if (err)
			res.status(404).send(err);
		res.status(200).json({ message: 'Account successfully added!' });
	});
});

routes.put('/:account_id', function(req, res) {
	Account.findById(req.params.account_id, function(err, account) {
		if (err)
			res.status(404).send(err);
		(req.body.author) ? account.author = req.body.author : null;
		(req.body.text) ? account.text = req.body.text : null;

		account.save(function(err) {
			if (err)
				res.status(404).send(err);
			res.status(200).json({ message: 'Account has been updated' });
		});
	});
});

routes.delete('/:account_id', function(req, res) {
	account.remove({ _id: req.params.account_id }, function(err, account) {
		if (err)
			res.status(404).send(err);
		res.status(200).json({ message: 'Account has been deleted' })
    })
});

module.exports = routes;