
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
    context('when numbers a and 5 are added ', function () {
        it('4 is the correct sum returned', function () {

            let sum = sumNumbers("a", 5);
            expect(sum).to.equal("the first value is not a number");
        });
    });
    context('when the number 4 and a non-number "a" are added ', function () {
        it('an error msg is returned', function () {

            let sum = sumNumbers(4, "a");
            expect(sum).to.equal("the second value is not a number");      /*("requires a number; no letters or special characters"); */
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