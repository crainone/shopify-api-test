'use strict'

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
	let search = {'name': shopName};
	let createAccountF = result => createAccount(result, shopName);
	let doneHandler = result => next(); //eat the result
	
	Account.find(search)
		.then(createAccountF, doSomething)
		.then(loadNewAccountProducts, doSomething)
		.then(addExistingProducts, doSomething)
		.then(doneHandler, doSomething)
		.catch(failureCallback);
}

function createAccount(result, accountId) {
	console.log("createAccount:" + result);
	if(!result || !result.name || result.name != accountId) {
		console.log("Creating account for " + result + "(" + accountId + ")");
		result = new Account();
		result.name = accountId;
		result.user = "caitlin.rainone@gmail.com";
		result.pass = "SimpleS!m0n";
		result.save(); //Don't worry about this coming back
	}
	return result;
}

function loadNewAccountProducts(result) {
	console.log("loadNewAccountProducts:" + result);
	let url = config.shopSource.protocol + 
				getSubdomain(result.name) + 
				config.shopSource.host + ":" + 
				config.shopSource.port + 
				config.shopSource.path + 
				'/admin/products.json';
	console.log("Hitting " + url + " for results");
	if(result.name && result.name != '') {
		return request({  
			method: 'GET',
			uri: url
		});
	}
	return result;
}

function addExistingProducts(result) {
	console.log("addExistingProducts:[JSON]");
	if(result) {
		let resultJSON = JSON.parse(result);
		console.log("addExistingProducts:" + resultJSON.products);
		//Kind of naive to just add them, but that's later:
		Product.create(resultJSON.products); //Don't worry about when this comes back either
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

function getSubdomain(accountName) {
	if(config.util.getEnv('NODE_ENV') !== 'production')
		return ""
	//TODO: sanitize here
	return result.name + ".";
}