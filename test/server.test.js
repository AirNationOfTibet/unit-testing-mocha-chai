var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
chai.use(chaiHttp); // Enables http testing

describe('Our server tests', function(){
    var app;

    before(function(done) {
        app = require('../server/server.js');
        done();
    });
    describe('Palindrome route', function () {
        it('should return true when passed "racecar"', function(done) {
            chai.request(app)
                .get('/palindrome/racecar')
                .end(function(err, response) {
                    expect(response).to.be.json;
                    expect(response).to.have.status(200);
                    expect(response.body.result).to.equal(true);
                    done();
                })
        });
    });
    describe('Index route', function () {
        it('should return html when requesting index', function (done) {
            chai.request(app)
                .get('/')
                .end(function (err, response) {
                    expect(response).to.be.html;
                    expect(response).to.have.status(200);
                    done();
                })
        });
    });
});