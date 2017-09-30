let avg = require('../average');
let chai = require('chai');
let expect = chai.expect;
let assert = require('assert');

describe('Testing Average', function () {
    context('when 2,3 and 4 are averaged', function () {
        it('3 is correctly returned as the average', function () {
            let expectedResult = 3;
            let actualResult = avg(2,3,4);
            expect(actualResult).to.equal(expectedResult);
        });
    });
    context('when positive numbers 100,1000 and 10,000 are averaged', function () {
        it('positive number 3700 is correctly returned as the average', function () {

            let average = avg(100, 1000, 10000);
            expect(average).to.equal(3700);
        });
    });
    context('when negative numbers -22, -47, -99 are averaged', function () {
        it('negative number -56 is correctly returned as the average', function () {

            let average = avg(-22, -47, -99);
            expect(average).to.equal(-56);
        });
    });
        context('when 41, -16, -7 are averaged', function () {
        it('6 is correctly returned as the average', function () {

            let average = avg(41,-16, -7);
            expect(average).to.equal(6);
        });
    });
});