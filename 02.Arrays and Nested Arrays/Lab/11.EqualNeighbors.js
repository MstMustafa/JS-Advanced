function equalNeighbors(matrix) {
    let rowCount = matrix.length;
    let colCount = matrix[0].length;
    let count = 0;

    for (let row = 0; row < rowCount; row++) {
        for (let col = 0; col < colCount; col++) {
            
            if (col < colCount - 1 && matrix[row][col] === matrix[row][col + 1]) {
                count++;
            }
           
            if (row < rowCount - 1 && matrix[row][col] === matrix[row + 1][col]) {
                count++;
            }
        }
    }

    return count;
}
