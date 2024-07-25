function isMagicMatrix(matrix) {
    if (matrix.length === 0) return true;

    const targetSum = matrix[0].reduce((a, b) => a + b, 0);

    for (let i = 1; i < matrix.length; i++) {
        const rowSum = matrix[i].reduce((a, b) => a + b, 0);
        if (rowSum !== targetSum) return false;
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            colSum += matrix[row][col];
        }
        if (colSum !== targetSum) return false;
    }

    return true;
}
