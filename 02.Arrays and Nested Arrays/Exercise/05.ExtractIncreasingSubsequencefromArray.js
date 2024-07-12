function extractIncreasingSubset(arr) {
    if (arr.length === 0) return [];
    
    let result = [];
    let currentBiggest = arr[0];
    result.push(currentBiggest);

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= currentBiggest) {
            currentBiggest = arr[i];
            result.push(currentBiggest);
        }
    }

    return result;
}
