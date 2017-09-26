let hangman = require('../hangmanLight');
let chai = require('chai');
let expect = chai.expect;
let assert = require('assert');

describe('Testing Letter Count', function () {
    context('when the word is apple', function () {
        it('2 is correctly returned for count of letter p', function () {

            let letterCount = hangman('apple', 'p');
            expect(letterCount).to.equal(2);
        });
    });
    context('when the word is apple', function () {
        it('0 is correctly returned for count of letter b', function () {

            let letterCount = hangman('apple', 'b');
            expect(letterCount).to.equal(0);
        });
    });
    context('when the word is apple', function () {
        it('the test will CORRECTLY fail if the expected count of letter p != 3', function () {

            let letterCount = hangman('apple', 'p');
            expect(letterCount).to.not.equal(3);
            // assert.fail(letterCount, 0, 'the test fails by design');
        });
    });
    context('when the word is uppercase MISSISSIPPI', function () {
        it('0 is correctly returned for count of lowercase letter s', function () {

            let letterCount = hangman('MISSISSIPPI', 's');
            assert.equal(letterCount, 0);
        });
    });
});