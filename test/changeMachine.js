let changeMachine = require('../changeMachine');
let chai = require('chai');
let expect = chai.expect;
let assert = require('assert');

describe('Testing Change Received', function () {
    context('make change with the least number of bills possible', function () {
        it('[ 2, 0, 1, 2 ] is the correct change for $47', function () {

            let billArray = changeMachine(47);
            expect(billArray).to.have.deep.equals([ 2, 0, 1, 2 ]);
        });
    });
});
describe('Testing Change Received', function () {
    context('make change with the least number of bills possible', function () {
        it('[ 0, 0, 0, 0 ] is the correct change for $0', function () {

            let billArray = changeMachine(0);
            expect(billArray).to.eql([ 0, 0, 0, 0 ]);
        });
    });
});
describe('Testing Change Received', function () {
    context('make change with the least number of bills possible', function () {
        it('[ 99, 1, 1, 4 ] is the correct change for $1999', function () {

            let billArray = changeMachine(1999);
            expect(billArray).to.have.deep.equals([ 99, 1, 1, 4 ]);
        });
    });

});