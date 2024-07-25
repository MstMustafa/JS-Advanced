function diagonalAttack(matrixInput) {
    
    let matrix = matrixInput.map(row => row.split(' ').map(Number));
    let n = matrix.length; 
    
    let mainDiagonalSum = 0;
    let antiDiagonalSum = 0;
    
    for (let i = 0; i < n; i++) {
        mainDiagonalSum += matrix[i][i];
        antiDiagonalSum += matrix[i][n - 1 - i];
    }

    if (mainDiagonalSum === antiDiagonalSum) {
       
        let newMatrix = matrix.map((row, i) => 
            row.map((value, j) => 
                (i === j || i === (n - 1 - j)) ? value : mainDiagonalSum
            )
        );
        
       
        newMatrix.forEach(row => console.log(row.join(' ')));
    } else {
       
        matrix.forEach(row => console.log(row.join(' ')));
    }
}
