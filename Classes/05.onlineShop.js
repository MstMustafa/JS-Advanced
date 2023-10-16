class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (spaceRequired > this.warehouseSpace) {
            throw new Error("Not enough space in the warehouse.");
        }

        this.products.push({
            product: product,
            quantity: quantity
        });

        this.warehouseSpace -= spaceRequired;

        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity) {
        if (minimalQuantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }

        let searchedProduct = this.products.find(x => x.product === product);

        if (!searchedProduct) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if (searchedProduct.quantity >= minimalQuantity) {
            return `You have enough from product ${product}.`; // Fixed this line
        } else {
            let difference = minimalQuantity - searchedProduct.quantity;
            searchedProduct.quantity = minimalQuantity;

            return `You added ${difference} more from the ${searchedProduct.product} products.`;
        }
    }

   sellProduct(product) {
    const productInTheArray = this.products.find(x => x.product === product);

    if (!productInTheArray) {
        throw new Error(`There is no ${product} in the warehouse.`);
    }

    if (productInTheArray.quantity <= 0) {
        throw new Error(`There are no more ${product} in stock.`);
    }

    productInTheArray.quantity -= 1;

    this.sales.push({
        product: product,
        quantity: 1
    });

    return `The ${product} has been successfully sold.`;
}

    revision() {
        if (this.sales.length === 0) {
            throw new Error(`There are no sales today!`);
        }

        let results = [];

        results.push(`You sold ${this.sales.length} products today!`);
        results.push(`Products in the warehouse:`);

        this.products
            .filter(x => x.quantity > 0)
            .map((x) => results.push(`${x.product}-${x.quantity} more left`));

        return results.join("\n");
    }
}
