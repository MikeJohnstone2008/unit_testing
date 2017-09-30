let isPalindrome = require('../palindrome');
let chai = require('chai');
let expect = chai.expect;
let assert = require('assert');

describe('Testing Is Word a Palindrome: ', function () {
    context('when the word is "racecar"', function () {
        it('true is correctly returned if the word is a palindrome', function () {
            let result = isPalindrome('racecar');
            expect(result).to.equal(true);
        });
     });
    context('when the word is "Anna"', function () {
        it('true is correctly returned if the word is a palindrome', function () {
            let result = isPalindrome('Anna');
            expect(result).to.equal(true);
        });
     });
    context('when the word is "A"', function () {
        it('true is correctly returned if the word is a palindrome', function () {
            let result = isPalindrome('A');
            expect(result).to.equal(true);
        });
     });
    context('when the word is ""', function () {
        it('true is correctly returned if the word is a palindrome', function () {
            let result = isPalindrome('');
            expect(result).to.equal(true);
        });
     });
    context('when the word is "abcdefg"', function () {
        it('false is correctly returned if the word is not a palindrome', function () {
            let result = isPalindrome('abcdefg');
            expect(result).to.not.equal(true);
        });
     });
    context('when the word is "Anna Racecar"', function () {
        it('false is correctly returned if the word is not a palindrome', function () {
            let result = isPalindrome('Anna Racecar');
            expect(result).to.not.equal(true);
        });
     });
});