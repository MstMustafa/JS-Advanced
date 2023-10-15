const lottery = require('./lottery');
const { assert } = require('chai');

describe("Testing lottery functionality", () => {

    describe("Testing buyLotteryTicket function", () => {

        it("should throw error if ticket price is not a number", () => {
            assert.throw(() => lottery.buyLotteryTicket("50", 5, true), "Invalid input!")
        });

        it("should throw error if buy is false", () => {
            assert.throw(() => lottery.buyLotteryTicket(50, 5, false), "Unable to buy lottery ticket!")
        });

        it("should return a success message with total price if buy is true", () => {
            const totalPrice = 50 * 5
            assert.equal(lottery.buyLotteryTicket(50, 5, true), `You bought 5 tickets for ${totalPrice}$.`)
        });
    });

    describe("Testing checkTicket functionality", () => {

        it("should throw error if ticketNumbers is not an array", () => {
            assert.throw(() => lottery.checkTicket("", [4, 5, 7, 1, 6, 8]), "Invalid input!")
        });

        it("should throw error if lucky numbers is not an array", () => {
            assert.throw(() => lottery.checkTicket([4, 5, 7, 1, 6, 8], false), "Invalid input!")
        });

        it("should return a success message for a winning ticket", () => {
            assert.equal(lottery.checkTicket([1, 5, 9, 7, 4, 6], [1, 5, 9, 3, 0, 4]), "Congratulations you win, check your reward!")
        });

        it("should return a success message for a jackpot-winning ticket", () => {
            assert.equal(lottery.checkTicket([1, 5, 9, 7, 4, 6], [6, 5, 9, 4, 7, 1]), "You win the JACKPOT!!!")
        });
    });

    describe("Testing secondChance", () => {

        it("should throw error if ticketId is not a number", () => {
            assert.throw(() => lottery.secondChance("", [4, 15, 69, 2, 1]), "Invalid input!")
        });

        it("should throw error if secondChanceWinninIds is not an array", () => {
            assert.throw(() => lottery.secondChance(6, "4,8,6,14,24"), "Invalid input!")
        });

        it("should return a success message for winning a second chance prize", () => {
            assert.equal(lottery.secondChance(9, [1, 5, 9, 3, 0, 4]), "You win our second chance prize!")
        });

        it("should return a message for a non-winning ticket", () => {
            assert.equal(lottery.secondChance(2, [1, 5, 9, 3, 0, 4]), "Sorry, your ticket didn't win!")
        });
    });

});
