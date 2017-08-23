var mongoose = require('mongoose');
var config = require('config');
var request = require('request-promise');
var Product = require('../models/product');
var Account = require('../models/account');

var main_next;

exports.start = function (req, res, next) {
	let shopName = req.body.shop_name;
	if(!shopName || shopName == '') {
		next();
		return;
	}
	console.log('Loading shop ' + shopName);
	
	main_next = next;
	//TODO: This should spin off
	getRequestedAccount(shopName);
}

function getRequestedAccount(accountId) {
	console.log('Looking for account ' + accountId);
	let search = {'name': accountId};
	
	Account.find(search)
		.then(result => createAccountIfNecessary(result, accountId))
		.then(loadAccountProducts)
		.then(doSomething)
		.catch(failureCallback);
}

function createAccountIfNecessary(result, accountId) {
	console.log("createOrUpdateAccount:" + result);
	if(!result || !result.name || result.name != accountId) {
		result = new Account();
		result.name = accountId;
		result.user = "caitlin.rainone@gmail.com";
		result.pass = "SimpleS!m0n";
		return result.save();
	}
	return result;
}


function loadAccountProducts(result) {
	console.log("loadAccountProducts:" + result);
	if(result.name && result.name != '') {
		return request({  
			method: 'GET',
			uri: config.shopSource.protocol + 
				result.name + '.' + 
				config.shopSource.host + ":" + 
				config.shopSource.port + 
				config.shopSource.path + 
				'/admin/products.json'
		});
	}
	return result;
}

function doSomething(result) {
	console.log("doSomething:" + result);
	return result;
}

function failureCallback(result) {
	console.log("failureCallback:" + result);
	return result;
}

function loadAccount(account) {
	console.log('Got account ' + account);
	next();
}