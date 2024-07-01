function processOddPositions(arr) {
 
    let result = arr
        .filter((_, index) => index % 2 !== 0)
        .map(x => x * 2)                      
        .reverse();                         

    console.log(result.join(' '));
}
