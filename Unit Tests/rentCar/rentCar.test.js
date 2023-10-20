describe("Testing rentCar", () => {

    describe("Testing searchCar", () => {

        it("should return the number of matching cars and model", () => {
            assert.equal(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Audi"), `There is 1 car of model Audi in the catalog!`);
        });

        it("should throw an error for invalid input types", () => {
            assert.throw(() => rentCar.searchCar("Audi", "Audi"), `Invalid input!`);
            assert.throw(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], ['Audi']), `Invalid input!`);
        });

        it("should throw an error for non-matching models", () => {
            assert.throw(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Toyota"), `There are no such models in the catalog!`);
        });
    });

    describe("Testing calculatePriceOfCar", () => {

        it("should throw an error for invalid input types", () => {
            assert.throw(() => rentCar.calculatePriceOfCar("Audi", "25"), `Invalid input!`);
            assert.throw(() => rentCar.calculatePriceOfCar(["Volkswagen"], 25), `Invalid input!`);
        });

        it("should return the model and rental cost for valid input", () => {
            assert.equal(rentCar.calculatePriceOfCar("Volkswagen", 25), `You choose Volkswagen and it will cost $500!`);
        });

        it("should throw an error for non-existent models", () => {
            assert.throw(() => rentCar.calculatePriceOfCar("Bentley", 25), `No such model in the catalog!`);
        });
    });

    describe("Testing checkBudget", () => {

        it("should throw an error for invalid input types", () => {
            assert.throw(() => rentCar.checkBudget('50', 23, 350), `Invalid input!`);
            assert.throw(() => rentCar.checkBudget(50, true, 560), `Invalid input!`);
            assert.throw(() => rentCar.checkBudget(50, 23, [256]), `Invalid input!`);
        });

        it("should return 'You need a bigger budget!' if budget is insufficient", () => {
            assert.equal(rentCar.checkBudget(50, 23, 350), `You need a bigger budget!`);
        });

        it("should return 'You rent a car!' if budget is sufficient", () => {
            assert.equal(rentCar.checkBudget(50, 23, 10350), `You rent a car!`);
            assert.equal(rentCar.checkBudget(25, 25, 625), `You rent a car!`);
        });
    });
});
