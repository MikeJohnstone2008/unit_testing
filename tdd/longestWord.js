let longestWord = require('../longestWord');
let chai = require('chai');
let expect = chai.expect;
let assert = require('assert');

describe('Testing Longest Word', function () {
    context('when a string of many words is passed', function () {
        it('"farmerman" is returned as the longest word', function () {
            let expectedResult = "farmerman";
            let actualResult = longestWord("There was a farmerman who had a dog, And Bingo was his name-O. B-I-N-G-O! B-I-N-G-O! B-I-N-G-O! And Bingo was his name-O!");
            expect(actualResult).to.equal(expectedResult);
        });
    });
    context('when a string of many words is passed', function () {
        it('"alphabet" is returned as the longest word', function () {
            let expectedResult = "alphabet";
            let actualResult = longestWord("The alphabet is a b c d e f g h i j k l m n o p q r s t u v w x y & z");
            expect(actualResult).to.equal(expectedResult);
        });
    });
    context('when a string of a single word is passed', function () {
        it('"Supercalifragilisticexpialidocious!" is returned as the longest word', function () {
            let expectedResult = "Supercalifragilisticexpialidocious";  /* punctuation should not be included?! */
            let actualResult = longestWord("Supercalifragilisticexpialidocious!");
            expect(actualResult).to.equal(expectedResult);
        });
    });
});