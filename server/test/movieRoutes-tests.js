const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../index');
const expect = chai.expect;

describe('Testing the movie routes', function() {

    it('Should complete getAll request with status 200', function(done) {
        chai
        .request(app)
        .get('/movie/getAll')
        .end(function(err, response) {
          expect(err).to.be.null;
          expect(response).to.have.status(200);
          done();
        });
    });


    it('Should complete getAllCurrent request with status 200', function(done) {
        chai
        .request(app)
        .get('/movie/getAllCurrent')
        .end(function(err, response) {
          expect(err).to.be.null;
          expect(response).to.have.status(200);
          done();
        });
    });

    it('Should complete getAllNew request with status 200', function(done) {
        chai
        .request(app)
        .get('/movie/getAllNew')
        .end(function(err, response) {
          expect(err).to.be.null;
          expect(response).to.have.status(200);
          done();
        });
    });

    it('Should complete get/:id request with status 200', function(done) {
        chai
        .request(app)
        .get('/movie/get/631f436bd05e565ba974000a')
        .end(function(err, response) {
          expect(err).to.be.null;
          expect(response).to.have.status(200);
          done();
        });
    });

    
  });