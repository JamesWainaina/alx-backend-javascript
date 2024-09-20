
const { expect } = require('chai');
const getPaymentTokenAPI = require('./6-payment_token');

describe('getPaymentTokenfromAPI', () => {
    it('getPaymentTokenFromAPI(success), where success == true', (done) => {
        getPaymentTokenAPI(true)
        .then((res) => {
            expect(res).to.deep.equal({data: 'Successful response from the API'});
            done();
        });
    });
});