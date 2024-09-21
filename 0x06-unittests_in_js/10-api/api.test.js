const request = require("request");
const { expect } = require("chai");

describe("API intergration test", () => {
  const API_URL = "http://localhost:7865";

  it("GET / returns correct response", (done) => {
    request.get(`${API_URL}/`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.be.equal("Welcome to the payment system");
      done();
    });
  });

  it("GET /cart/:id returns correct response", (done) => {
    request.get(`${API_URL}/cart/12`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.be.equal("Payment methods for cart 12");
      done();
    });
  });

  it("GET/ cart/:id returns 404 response for negative number values in :id", (done) => {
    request.get(`${API_URL}/cart/-47`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it("GET /cart/:id returns 404 response for non-numeric values in :id", (done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

   it("POST /login returns valid response", (done) => {
     request.post(
       `${API_URL}/login`,
       { json: { userName: "Pinkbrook" } },
       (_err, res, body) => {
         expect(res.statusCode).to.be.equal(200);
         expect(body).to.be.equal("Welcome Pinkbrook");
         done();
       }
     );
   });

  it('GET /available_payments returns valid response', (done) => {
    request.get(`${API_URL}/available_payments`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(JSON.parse(body))
      .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });
});