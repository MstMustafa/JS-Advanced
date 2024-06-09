function sumFirstLast(array) {
    if (array.length === 0) {
        return 0; 
    }
    let first = Number(array[0]); 
    let last = Number(array[array.length - 1]);
    return first + last;
}
