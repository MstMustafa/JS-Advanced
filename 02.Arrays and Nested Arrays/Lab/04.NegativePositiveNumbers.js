function processNumbers(numbers) {
    let result = [];
    
    for (let number of numbers) {
        if (number < 0) {
            result.unshift(number);
        } else {
            result.push(number);
        }
    }
    
    for (let number of result) {
        console.log(number);
    }
}
