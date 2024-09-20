const request = require('supertest');
const { expect } = require('chai');
const app = require('./api');

describe('GET /', () => {

    it("should return status code 200", (done) => {
        request(app)
        .get('/')
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);
            done();
        });
    });

    it("should return a result", (done) => {
        request(app)
        .get('/')
        .expect('Welcome to the payment system')
        .end((err, res) => {
            if (err) return done(err);
            done();
        });
    });

    it ("should return a JSON object", (done) => {
        request(app)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .end((err, res) => {
            if (err) return done(err);
            done();
        });
    });
});