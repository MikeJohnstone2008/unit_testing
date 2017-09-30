let containsVowel = require('../containsVowel');
let chai = require('chai');
let expect = chai.expect;
let assert = require('assert');

describe('Testing If a String Contains a Vowel: ', function () {
    context('when a string is passed', function () {
        it('true is returned if it contains a vowel', function () {
            let expectedResult = true;
            let actualResult = containsVowel("harumph");
            expect(actualResult).to.equal(expectedResult);
        });
    });
    context('when a string is passed', function () {
        it('false is returned if it does not contain a vowel', function () {
            let expectedResult = false;
            let actualResult = containsVowel("hhhhh yyyy ###trw @%&");
            expect(actualResult).to.equal(expectedResult);
        });
    });
});