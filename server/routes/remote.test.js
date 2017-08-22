var chai = require('chai');
var chaiHttp = require('chai-http');
var should = require('should');
var remote = require('./remote').remote;
var server = require('../index.js');

chai.should();
chai.use(chaiHttp);

describe('remote', function() {
    it('return a count of products from the fake api', function(done){
        chai.request(server)
            .get('/remote/products/count.json')
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
			.get('/remote')
			.send()
			.end(function(err, res) {
				res.should.have.status(404);
				done();
			});
	});

});