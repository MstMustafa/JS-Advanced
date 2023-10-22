const onlineStore = require('./onlineStore');
const { assert } = require('chai');

describe("Online Store Tests", () => {

    describe("isProductAvailable()", () => {

        it("should return out of stock message when quantity is 0 or less", () => {
            assert.equal(onlineStore.isProductAvailable("camera", 0), "Sorry, camera is currently out of stock.");
            assert.equal(onlineStore.isProductAvailable("camera", -2), "Sorry, camera is currently out of stock.");
        });

        it("should return available message when quantity is greater than 0", () => {
            assert.equal(onlineStore.isProductAvailable("camera", 4), "Great! camera is available for purchase.");
        });

        it("should throw error for invalid input", () => {
            assert.throw(() => onlineStore.isProductAvailable(["camera"], 4), "Invalid input.");
            assert.throw(() => onlineStore.isProductAvailable("camera", "4"), "Invalid input.");
        });

    });

    describe("canAffordProduct()", () => {

        it("should return insufficient funds message when not enough money", () => {
            assert.equal(onlineStore.canAffordProduct(350, 250), "You don't have sufficient funds to buy this product.");
        });

        it("should return success message with remaining balance when enough money", () => {
            assert.equal(onlineStore.canAffordProduct(350, 350), "Product purchased. Your remaining balance is $0.");
            assert.equal(onlineStore.canAffordProduct(350, 550), "Product purchased. Your remaining balance is $200.");
        });

        it("should throw error for invalid input", () => {
            assert.throw(() => onlineStore.canAffordProduct("350", 450), "Invalid input.");
            assert.throw(() => onlineStore.canAffordProduct(350, [500]), "Invalid input.");
        });

    });

    describe("getRecommendedProducts()", () => {

        it("should return recommended products in matching category", () => {
            assert.equal(onlineStore.getRecommendedProducts(
                [
                    { name: "Camera", category: "Photography" },
                    { name: "Smartphone", category: "Photography" }
                ], "Photography"),
                "Recommended products in the Photography category: Camera, Smartphone"
            );
        });

        it("should return no recommended products message for non-matching category", () => {
            assert.equal(onlineStore.getRecommendedProducts(
                [
                    { name: "Camera", category: "Photography" },
                    { name: "Smartphone", category: "Photography" }
                ], "Hiking"),
                "Sorry, we currently have no recommended products in the Hiking category."
            );
        });

        it("should throw error for invalid input", () => {
            assert.throw(() => onlineStore.getRecommendedProducts(
                "name: Camera, category: Photography", "Photography"),
                "Invalid input."
            );
            assert.throw(() => onlineStore.getRecommendedProducts(
                [
                    { name: "Camera", category: "Photography" },
                    { name: "Smartphone", category: "Photography" }
                ], 500),
                "Invalid input."
            );
        });

    });

});
