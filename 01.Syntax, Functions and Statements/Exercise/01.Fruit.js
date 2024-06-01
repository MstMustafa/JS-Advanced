function calculateFruitCost(fruit, weightInGrams, pricePerKilogram) {

    let weightInKilograms = weightInGrams / 1000;


    let totalCost = weightInKilograms * pricePerKilogram;

    weightInKilograms = weightInKilograms.toFixed(2);
    totalCost = totalCost.toFixed(2);

    console.log(`I need $${totalCost} to buy ${weightInKilograms} kilograms ${fruit}.`);
}
