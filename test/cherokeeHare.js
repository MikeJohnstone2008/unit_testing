let totalHares = require('../cherokeeHare');
let chai = require('chai');
let expect = chai.expect;
let assert = require('assert');

describe('Testing Total Rabbit Count', function () {
    context('when the number of weeks is 5', function () {
        it('29 is correct number of total rabbits', function () {

            let rabbitCount = totalHares(200, 0.1, 6);
            expect(rabbitCount).to.equal(32);
        });
    });
    // context('when the word is apple', function () {
    //     it('0 is correctly returned for count of letter b', function () {

    //         let letterCount = hangman('apple', 'b');
    //         expect(letterCount).to.equal(0);
    //     });
    // });
    // context('when the word is apple', function () {
    //     it('the test will CORRECTLY fail if the expected count of letter p != 2', function () {

    //         let letterCount = hangman('apple', 'p');
    //         expect(letterCount).to.equal(0);
    //         assert.fail(letterCount, 0, 'the test fails by design');
    //     });
    // });
    // context('when the word is uppercase MISSISSIPPI', function () {
    //     it('0 is correctly returned for count of lowercase letter s', function () {

    //         let letterCount = hangman('MISSISSIPPI', 's');
    //         assert.equal(letterCount, '0');
    //     });
    // });
});