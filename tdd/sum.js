
let sumNumbers = require('../sum');
let chai = require('chai');
let expect = chai.expect;
let assert = require('assert');

describe('Testing Sum of 2 numbers: ', function () {
    context('when numbers 3 and 4 are added ', function () {
        it('7 is the correct sum returned', function () {

            let sum = sumNumbers(3, 4);
            expect(sum).to.equal(7);
        });
    });
    context('when numbers 0 and 4 are added ', function () {
        it('4 is the correct sum returned', function () {

            let sum = sumNumbers(0, 4);
            expect(sum).to.equal(4);
        });
    });
    context('when numbers 0 and 4 are added ', function () {
        it('4 is the correct sum returned', function () {

            let sum = sumNumbers(a, 5);
            assert(sum).fail("requires a number; no letters or special characters");
        });
    });
    context('when non-number "a" and a number 4 are added ', function () {
        it('an error msg is returned', function () {

            let sum = sumNumbers(a, 4);
            assert(sum).equals(4);      /*("requires a number; no letters or special characters"); */
        });
    });
    context('when very large numbers are added ', function () {
        it('the very large sum is returned', function () {

            let sum = sumNumbers(999999999999999, 777777777777777);
            expect(sum).to.equal(1777777777777776);
        });
    });
    context('when negative numbers are added ', function () {
        it('the negative sum is returned', function () {

            let sum = sumNumbers(-7, -9);
            expect(sum).to.equal(-16);
        });
    });

});