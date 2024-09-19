const { expect } = require("chai");
const calculateNumber = require("./2-calcul_chai");


describe('calculateNumber', function(){
    const testCalculateNumber = ({ type, a, b, expected}) => {
        const result = calculateNumber(type, a, b);
        expect(result).to.equal(expected);
    }
    it('correctly adds 1 and 2', function() {
        testCalculateNumber({ type: 'SUM', a: 1, b: 2, expected: 3 });
    });

    it('correctly adds 1.3 and 3.7', function() {
        testCalculateNumber({ type: 'SUM', a: 1.3, b: 3.7, expected: 5 });
    });

    it('correctly subtracts -2 from 1', function() {
        testCalculateNumber({ type: 'SUBTRACT', a: 1, b: -2, expected: 3 });
    });

    it('correctly subtracts 3.7 from 1', function() {
        testCalculateNumber({ type: 'SUBTRACT', a: 1, b: 3.7, expected: -3 });
    });

    it('correctly divides 1 by 3', function() {
        testCalculateNumber({ type: 'DIVIDE', a: 1, b: 3, expected: 0.3333333333333333 });
    });

    it('correctly divides 1 by 0', function() {
        testCalculateNumber({ type: 'DIVIDE', a: 1, b: 0, expected: 'Error' });
    });
});