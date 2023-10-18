const { assert } = require('chai');
const flowerShop = require('./flowerShop');

describe("Testing flowerShop functionality", () => {
 
    describe("Testing calcPriceofFlowers", () => {

        it("Should return needed price", () => {
            assert.equal(flowerShop.calcPriceOfFlowers("Rose", 20, 9), "You need $180.00 to buy Rose!");
        });

        it("Test if the input is valid", () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers(20, 20, 9), "Invalid input!");
            assert.throw(() => flowerShop.calcPriceOfFlowers("Rose", "250", 9), "Invalid input!");
            assert.throw(() => flowerShop.calcPriceOfFlowers("Rose", 20, []), "Invalid input!");
        });
    });

    describe("Testing checkFlowersAvailable", () => {

        it("Should return the available flowers", () => {
            assert.equal(flowerShop.checkFlowersAvailable("Rose", ["Rose", "Tulip", "Daisy"]), "The Rose are available!");
            assert.equal(flowerShop.checkFlowersAvailable("Lily", ["Rose", "Tulip", "Daisy"]), "The Lily are sold! You need to purchase more!");
        });
    });

    describe("Testing sellFlowers", () => {

        it("Test if the input is valid", () => {
            assert.throw(() => flowerShop.sellFlowers(["Rose", "Tulip", "Daisy", "Lily"], 4), "Invalid input!");
            assert.throw(() => flowerShop.sellFlowers(["Rose", "Tulip", "Daisy", "Lily"], -1), "Invalid input!");
            assert.throw(() => flowerShop.sellFlowers("Rose Tulip  Daisy Lily", 3), "Invalid input!");
        });

        it("TODO ...", () => {
            assert.equal(flowerShop.sellFlowers(["Rose", "Tulip", "Daisy", "Lily"], 3), "Rose / Tulip / Daisy");
        });
    });
});

