var express = require('express');
var app = express();
var config = require('config');
var bodyParser = require('body-parser');
var api = require('./routes/api').api;
var remote = require('./routes/remote').remote;

//Input formats
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: false }));

//URLs
app.use(express.static('public'));
app.use('/api', api); //API for use with the new app

if(config.util.getEnv('NODE_ENV') !== 'production') {
	app.use('/remote', remote); //Fake shopify API endpoints
}

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

if(config.util.getEnv('NODE_ENV') !== 'production') {
	
}
module.exports = server;