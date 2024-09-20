const sinon = require("sinon");
const assert = require("assert");

const Utils = require("./utils.js");
const sendPaymentRequestToApi = require("./4-payment.js");
const { expect } = require("chai");

describe("sendPaymentRequestToApi()", () => {
  it("should call console.log with the right arguments", () => {
    // create a stub  for the Utils.calculateNumber function
    const calculateNumberStub = sinon.stub(Utils, "calculateNumber").returns(10);

    // create a spy to intercept the console.log
    const consoleLogSpy = sinon.spy(console, "log");

    // call the function
    sendPaymentRequestToApi(100, 20);

    // assert that Utils.calculateNumber was called correctly
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;

    // Assert that the Utils.calculateNumber was called only once
    expect(calculateNumberStub.callCount).to.equal(1);

    // Assert that Utils.calculateNumber was called with the correct message
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;

    //Assert that the console.log was called only once
    expect(consoleLogSpy.callCount).to.equal(1);

    //Restore the stub to its original state
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
