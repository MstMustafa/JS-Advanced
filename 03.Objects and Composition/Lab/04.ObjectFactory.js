function objectFactory(library, orders) {
    const fulfilledOrders = orders.map(order => {
        const newObject = Object.assign({}, order.template);
        order.parts.forEach(part => {
            if (library.hasOwnProperty(part)) {
                newObject[part] = library[part];
            }
        });
        return newObject;
    });
    return fulfilledOrders;
}
