function biggerHalf(arr) {

    arr.sort((a, b) => a - b);

    let startIndex = Math.floor(arr.length / 2);

    let result = arr.slice(startIndex);

    return result;
}
