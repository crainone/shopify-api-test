var chai = require('chai');
var chaiHttp = require('chai-http');
var should = require('should');
var api = require('./api').api;
var server = require('../index.js');

chai.should();
chai.use(chaiHttp);

describe('api', function() {
    it('should start the migration', function(done){
        chai.request(server)
            .post('/api/migrate')
            .send()
            .end(function(err, res) {
		        res.should.have.status(200);
		        res.body.should.be.a('object'); //or a json?
		        res.body.response_type.should.be.eql('fake server');
		        res.body.count.should.be.eql(11);
		        done();
	        });
    });
	
	it('should ignore bad requests', function(done) {
		chai.request(server)
			.get('/api')
			.send()
			.end(function(err, res) {
				res.should.have.status(404);
				done();
			});
	});
});