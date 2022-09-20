const mocha = require("mocha");
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../index');
const expect = chai.expect;

describe('Testing the booking routes', function() {


    it('Should complete get/:id request with status 200', function(done) {
        chai
        .request(app)
        .get('/booking/get/631f438dd05e565ba9740014')
        .end(function(err, response) {
          expect(err).to.be.null;
          expect(response).to.have.status(200);
          done();
        });
    });

    it('Should complete post request with status 201', function(done) {
        const data =    {
            "firstName" : "John",
            "lastName" : "Smith",
            "adultTickets" : 2,
            "childrenTickets" : 2,
            "concession" : 2,
            "price" : 32.99,
            "movieBooking" : [{
                "movie" : "Avatar",
                "day" : "Tuesday",
                "time" : "18:00"
            }],
            "payment" : [{
                "cardNumber" : 1234567890987654,
                "expiringDate" : "12/27",
                "cvv" : 123
            }]
        }

        chai
        .request(app)
        .post('/booking/create')
        .send(data)
        .end(function(err, response) {
          expect(err).to.be.null;
          expect(response).to.have.status(201);
          done();
        });
    }).timeout(50000);

});