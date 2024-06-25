function printTwoSmallestNumbers(arr) {
  
    arr.sort((a, b) => a - b);
    let smallestTwo = arr.slice(0, 2);

    console.log(smallestTwo[0], smallestTwo[1]);
}
