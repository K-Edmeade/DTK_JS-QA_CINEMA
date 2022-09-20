const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../index');
const expect = chai.expect;

describe('Testing the discussion routes', function() {

    it('Should complete getAll request with status 200', function(done) {
        chai
        .request(app)
        .get('/discussion/getAll')
        .end(function(err, response) {
          expect(err).to.be.null;
          expect(response).to.have.status(200);
          done();
        });
    });


    it('Should complete post request with status 201', function(done) {
        const data =        {
            "name" : "Commenter43",
            "comment" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit ac mi vitae egestas. Vivamus tincidunt at velit nec scelerisque. Quisque et laoreet odio. Mauris faucibus finibus libero sit amet.",
            "movie" : "Avatar",
            "rating" : 8
        }

        chai
        .request(app)
        .post('/discussion/create')
        .send(data)
        .end(function(err, response) {
          expect(err).to.be.null;
          expect(response).to.have.status(201);
          done();
        });
    }).timeout(50000);

});