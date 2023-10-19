const testNumbers = require('./testNumbers');
const { assert } = require('chai');

describe("Testing testNumbers", () => {

    describe("Testing sumNumbers", () => {

        it("should return undefined for non-numeric inputs", () => {
            assert.deepEqual(testNumbers.sumNumbers(25, "25"), undefined);
            assert.deepEqual(testNumbers.sumNumbers([25], "25"), undefined);
        });

        it("should return the sum of two numbers", () => {
            assert.equal(testNumbers.sumNumbers(25, 25), 50.00);
        });

    });

    describe("Testing numberChecker", () => {

        it("should throw an error for undefined input", () => {
            assert.throw(() => testNumbers.numberChecker(undefined), 'The input is not a number!');
        });

        it("should determine if a number is odd or even", () => {
            assert.equal(testNumbers.numberChecker(3), 'The number is odd!');
            assert.equal(testNumbers.numberChecker(8), 'The number is even!');
        });

    });

    describe("Testing averageSumArray", () => {

        it("should return the average of an array of numbers", () => {
            assert.equal(testNumbers.averageSumArray([4, 9, 24, 15, 2]), 10.8);
        });

    });

});
