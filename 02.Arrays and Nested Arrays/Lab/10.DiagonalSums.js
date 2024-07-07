function diagonalSums(matrix) {
    let n = matrix.length;
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    
    for (let i = 0; i < n; i++) {
        mainDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][n - 1 - i];
    }
    
    console.log(mainDiagonalSum + ' ' + secondaryDiagonalSum);
}
