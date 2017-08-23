var chai = require('chai');
var chaiHttp = require('chai-http');
var should = require('should');
var server = require('../index.js');

chai.should();
chai.use(chaiHttp);

describe('api', function() {
    it('should start the migration', function(done){
		done();
    });
	
	it('should ignore bad requests', function(done) {
		done();
	});
	
	it('should skip existing migrations', function(done) {
		done();
	});
});