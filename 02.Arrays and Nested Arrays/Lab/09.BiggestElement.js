function findBiggestElement(matrix) {
    
    let flatArray = matrix.flat();
    
    let maxElement = Math.max(...flatArray);
    
    return maxElement;
}
