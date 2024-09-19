const assert = require('assert');
const calculateNumber = require('./0-calcul');



describe('calculateNumber', function(){
  const testCalculateNumber = ({a, b , expected}) => {
    const result = calculateNumber(a, b);
    assert.equal(result, expected);
  };

  it("correctly adds 1 and 2", function () {
    testCalculateNumber({a: 1, b: 2, expected: 3 });
  });
  it("correctly adds 1.3 and 3.7", function () {
    testCalculateNumber({a: 1.3, b: 3.7, expected: 5 });
  });
});