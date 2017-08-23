var express = require('express');
var app = express();
var config = require('config');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes');

//Input formats
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: false }));

//URLs
app.use(express.static('public'));
app.use('/api', routes); //API for use with the new app

//DB
mongoose.connect(config.dbHost.url, { useMongoClient: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var server = app.listen(config.port, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

if(config.util.getEnv('NODE_ENV') !== 'production') {
	module.exports = server;
}