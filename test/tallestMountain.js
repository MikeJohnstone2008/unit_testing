var tallestMountain = require('../tallestMountain');
var chai = require('chai');
var expect = chai.expect;

describe('Testing Tallest Mountain', function () {
    context('when the tallest mountain is 14400', function () {
        it('returns 14400 for tallest', function () {

            var tallest = tallestMountain([12300, 14400, 10599]);
            expect(tallest).to.equal(14400);
        });
    });
});