const request = require("supertest");
const { expect } = require("chai");
const app = require("./api"); // Import your Express app

describe("GET /", () => {
  // Test for status code 200
  it("should return status code 200", (done) => {
    request(app).get("/").expect(200, done);
  });

  // Test for the correct response text
  it("should return a welcome message", (done) => {
    request(app).get("/").expect("Welcome to the payment system", done);
  });

  // Test for the correct content type
  it("should return content type text/html", (done) => {
    request(app)
      .get("/")
      .expect("Content-Type", /text\/html/, done);
  });
});
