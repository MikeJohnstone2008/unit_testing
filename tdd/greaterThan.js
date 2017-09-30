let greaterThan = require('../greaterThan');
let chai = require('chai');
let expect = chai.expect;
let assert = require('assert');

describe('Testing Greater of 2 Numbers: ', function () {
    context('when "4" and "7" are compared, ', function () {
        it('true is returned if the 2nd number, "7", is greater than the first number', function () {

            let isGreaterNumber = greaterThan(4, 7);
            expect(isGreaterNumber).to.equal(true);
            
        });
    });
    context('when "201" and "7" are compared, ', function () {
        it('false is returned if the 2nd number, "7", is NOT greater than the first number', function () {

            let isGreaterNumber = greaterThan(201, 7);
            expect(isGreaterNumber).to.equal(false);
            
        });
    });
        context('when "201" and "-202" are compared, ', function () {
        it('false is returned if the 2nd number, "-202", is NOT greater than the first number', function () {

            let isGreaterNumber = greaterThan(201, -202);
            expect(isGreaterNumber).to.equal(false);
            
        });
    });
    context('when negative numbers "-201" and "-20" are compared, ', function () {
        it('true is returned if the 2nd negative number, "-20", is greater than the first number', function () {

            let isGreaterNumber = greaterThan(-201, -20);
            expect(isGreaterNumber).to.equal(true);
            
        });
    });
    context('when numbers "0.0001" and "0.001" are compared, ', function () {
        it('true is returned if the 2nd number, "0.001", is greater than the first number', function () {

            let isGreaterNumber = greaterThan(0.0001, 0.001);
            expect(isGreaterNumber).to.equal(true);
            
        });
    });
});