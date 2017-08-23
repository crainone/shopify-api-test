var mongoose = require('mongoose');
var migrate = require('./MigrateController');
var config = require('config');

describe('migrateController', function() {
	before(function() {
		mongoose.Promise = global.Promise;
		mongoose.connect(config.dbHost.url, { useMongoClient: true })
		var db = mongoose.connection;
		db.on('error', console.error.bind(console, 'MongoDB connection error:'));
		mongoose.connection.on('error', function(err) {
			console.error('MongoDB error: %s', err);
		});
	});

    it('should start the migration', function(done){
		this.timeout(60000);
		migrate.start({body: {shop_name: 'crainone-api-test2'}}, null, done);
    });
	
	it('should ignore bad requests', function(done) {
		migrate.start({body: {}}, null, done);
	});
	
	it('should skip existing migrations', function(done) {
		migrate.start({body: {shop_name: 'crainone-api-test'}}, null, done);
	});
});
