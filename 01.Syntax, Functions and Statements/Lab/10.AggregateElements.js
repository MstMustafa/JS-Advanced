function performOperations(arr) {
    let sum = 0;
    let sumOfInverses = 0;
    let concatenated = '';

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        sumOfInverses += 1 / arr[i];

        concatenated += arr[i].toString();
    }

    console.log(sum);
    console.log(sumOfInverses);
    console.log(concatenated);
}
